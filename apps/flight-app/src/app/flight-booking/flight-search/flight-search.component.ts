/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {Component, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-lib';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
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
