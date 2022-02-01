import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1 [class]="text">Hello</h1>
  `,
  styles: [`
  .testcolor
  {
    color:blue;
  }`
  ]
})
export class TestComponent implements OnInit {

public text="testcolor";
  constructor() { }

  ngOnInit(): void {
  }

}
