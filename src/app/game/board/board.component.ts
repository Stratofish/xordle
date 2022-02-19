import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
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
