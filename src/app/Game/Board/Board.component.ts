import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './Board.component.html',
  styleUrls: ['./Board.component.css']
})
export class BoardComponent implements OnInit {

  @Input()
  target: null | string = '';

  @Input()
  attempts: null | string[] = [];

  @Input()
  usedAttempts: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
