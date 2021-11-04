import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'flight-workspace-trackby-child',
  templateUrl: './trackby-child.component.html',
  styleUrls: ['./trackby-child.component.css']
})
export class TrackbyChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input() item: { id: number, name: string } = { id: 0, name: '' } ;

  ngOnInit(): void {
    console.log('Init', this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes.item.currentValue);
  }

  ngOnDestroy(): void {
    console.log('Destroyed', this.item);
  }
}
