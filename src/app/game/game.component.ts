import { Component, OnInit } from '@angular/core';

let BOARDS = 1;
let MAX_ATTEMPTS = 6;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  target: string = 'bogus';
  attempts: string[] = [];
  usedAttempts: number = 0;

  constructor() {
    for (let attemptIndex = 0; attemptIndex < MAX_ATTEMPTS; attemptIndex++) {
      this.attempts.push('');
    }
    this.attempts[0] = 'raise';
    this.attempts[1] = 'youth';
    this.attempts[2] = 'quack';
    this.usedAttempts = 2;
  }

  ngOnInit(): void {
  }

}
