import { Component, OnInit } from '@angular/core';

let BOARDS = 1;
let MAX_ATTEMPTS = 6;

@Component({
  selector: 'app-game',
  templateUrl: './Game.component.html',
  styleUrls: ['./Game.component.css']
})
export class GameComponent implements OnInit {

  attempts: string[] = [];
  usedAttempts: number = 0;

  constructor() {
    for (let attemptIndex = 0; attemptIndex < MAX_ATTEMPTS; attemptIndex++) {
      this.attempts.push('');
    }
    this.attempts[0] = 'RAISE';
    this.attempts[1] = 'YOUTH';
    this.attempts[2] = 'QUACK';
    this.usedAttempts = 2;
  }

  ngOnInit(): void {
  }

}
