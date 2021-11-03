import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('counter', {read: ElementRef}) counter: ElementRef | undefined;

  constructor(private zone: NgZone) {}

  cdCountUpdater() {
    this.zone.runOutsideAngular(() => {
      const counterElem = this.counter as ElementRef;
      counterElem && (
        counterElem.nativeElement.textContent =
          ++counterElem.nativeElement.textContent
      );
    });
  }
}
