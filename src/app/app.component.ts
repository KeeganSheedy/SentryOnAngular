import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SentryOnAngular';

  triggerError() {
      var myVariable = undefined;
      var myVariableLength = myVariable.length;
  }
}
