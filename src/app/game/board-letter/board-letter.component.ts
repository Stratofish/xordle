import {Component, Input, OnInit} from '@angular/core';
import {LetterClassification} from "./LetterClassification";

@Component({
  selector: 'app-board-letter',
  templateUrl: './board-letter.component.html',
  styleUrls: ['./board-letter.component.css']
})
export class BoardLetterComponent implements OnInit {

  @Input()
  letter: string = '';

  @Input()
  classification: LetterClassification = LetterClassification.Wrong;

  constructor() { }

  ngOnInit(): void {
  }

  isCorrect() {
    return this.classification === LetterClassification.Correct;
  }

  isUsed() {
    return this.classification === LetterClassification.Used;
  }

  isWrong() {
    return this.classification === LetterClassification.Wrong;
  }
}
