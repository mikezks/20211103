/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-lib';
import { Observable, PartialObserver, Subscription, tap, timer } from 'rxjs';


@Injectable()
export class RxConnector implements OnDestroy {
  private subscription = new Subscription();

  connect<T>(stream$: Observable<T>, observer?: PartialObserver<T>): Subscription {
    const subscription = stream$.subscribe(observer);
    this.subscription.add(subscription);
    return subscription;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [RxConnector]
})
export class FlightSearchComponent implements OnInit, OnDestroy {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  timer$ = timer(0, 1_000).pipe(
    tap(console.log)
  );
  subscriptions = new Subscription();

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService,
    private rx: RxConnector) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.timer$.subscribe(value => console.log('TS Subscribe', value))
    );

    this.rx.connect(
      this.timer$,
      {
        next: value => console.log('TS Connect 1', value)
      }
    );

    this.rx.connect(
      this.timer$.pipe(
        tap(value => console.log('TS Connect 2', value))
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /* getFlightDetails() {
    const flights = this.flightService.flights;
    const firstFlight = flights[0];
    this.from = firstFlight.from;
  } */

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

}


/* const flightsState = {
  ids: [3, 5, 9, 7, 6],
  entities: {
    5: {
      id: 5,
      from: 'Hamburg',
      to: 'Graz'
    },
    3: {
      id: 3,
      from: 'Hamburg',
      to: 'Graz'
    }
  }
}

const flightFive = flightState.entities[5];
const flightsArr = flightsState.ids.map(id => flightsState.entities[id]);

flightsState.ids.push(11); */
