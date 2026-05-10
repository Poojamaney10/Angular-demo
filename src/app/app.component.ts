import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'My Simple Angular App';
  message = 'Hello! This is a running Angular application 🚀';

  changeMessage() {
    this.message = 'You clicked the button!';
  }
}
