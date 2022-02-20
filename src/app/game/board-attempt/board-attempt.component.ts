import {Component, Input, OnInit, OnChanges } from '@angular/core';
import {LetterClassification} from "../board-letter/LetterClassification";

@Component({
  selector: 'app-board-attempt',
  templateUrl: './board-attempt.component.html',
  styleUrls: ['./board-attempt.component.css']
})
export class BoardAttemptComponent implements OnInit {

  @Input()
  attempt: string = '';

  @Input()
  target: null | string = '';

  @Input()
  current: boolean = true;

  letters: string[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.letters = [];
    for (let letterIndex = 0; letterIndex < 5; letterIndex++)
    {
        this.letters.push(this.attempt.charAt(letterIndex));
    }
  }

  classify(letter: string, letterIndex: number) {
    if ((this.attempt === '') ||
        (this.current)) {
      return LetterClassification.Wrong;
    }

    if (this.target === null)
      this.target = '';

    if (this.target.charAt(letterIndex) === letter)
      return LetterClassification.Correct;

    if ((letter !== '') &&
        (this.target.indexOf(letter) !== -1))
      return LetterClassification.Used;

    return LetterClassification.Unused;
  }
}
