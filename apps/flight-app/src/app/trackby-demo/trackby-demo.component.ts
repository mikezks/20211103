import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-workspace-trackby-demo',
  templateUrl: './trackby-demo.component.html',
  styleUrls: ['./trackby-demo.component.css']
})
export class TrackbyDemoComponent {
  state1 = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  state2 = [
    this.state1[0],
    // { id: 1, name: 'Item 1' },
    { id: 2, name: 'New Item 2' },
    { id: 3, name: 'New Item 3' }
  ];

  identify(index: number, item: { id: number, name: string }): number {
    return item.id;
  }

  changeState(stateId: number): void {
    switch (stateId) {
      case 2:
        this.state1 = this.state2;
        break;
    }
  }
}
