import { Component,NgModule  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meadow Runner';
  languages = ["English","Spanish"]
  selectedLanguage = 'English';
  
  onChange(newValue) {
    console.log(newValue);
    this.selectedLanguage = newValue;
  }
}
