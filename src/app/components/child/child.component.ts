import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';

  constructor() { }

  ngOnInit(): void { }

  handleInput(event: KeyboardEvent) { // The $event is now a specific KeyboardEvent
    this.input1 = (event.target as HTMLInputElement).value;
  }

  handleInput2(input: string) {
    this.input2 = input;
  }

  handleInput3(input: string) {
    this.input3 = input
  }
}
