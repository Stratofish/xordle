import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './Config/Config.component';
import { GameComponent } from './Game/Game.component';
import { BoardComponent } from './Game/Board/Board.component';
import { BoardAttemptComponent } from './Game/BoardAttempt/BoardAttempt.component';
import { BoardLetterComponent } from './Game/BoardLetter/BoardLetter.component';
import { KeyboardComponent } from './Game/Keyboard/Keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    GameComponent,
    BoardComponent,
    BoardAttemptComponent,
    BoardLetterComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
