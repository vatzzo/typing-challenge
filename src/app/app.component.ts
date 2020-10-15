import { Component } from '@angular/core';
import { lorem, random } from 'faker';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.word();
  userText = '';
  noWords = 1;

  onInput(value: string) {
    this.userText = value;
    
    if(this.randomText === this.userText) {
      console.log('Now');
    }
  }

  clearInput(text1:string, text2:string, event: any) {
    if(text1 === text2) {
      setTimeout(() => 
        { 
          event.target.value = "";
          this.userText = '';
          this.generateSentance();
        }, 800 );
    }
  } 

  getClassName(randomLetter: string, userLetter: string) {
    if(!userLetter) {
      return 'underline-black'
    }
    
    if(randomLetter === userLetter) {
      return 'underline-green';
    } else {
      return 'underline-red';
    }
  }

  chooseOption(value: any) {
    value.target.parentElement.children[this.noWords-1].classList.remove('option--active');
    this.noWords = value.target.id;
    value.target.classList.add('option--active');
    this.generateSentance();
  }

  generateSentance() {
    this.randomText = '';
    for(let i = 1; i <= this.noWords; i++) {
      this.randomText += (lorem.word() + ' ');
    }
    this.randomText = this.randomText.trim(); 
  }
}
