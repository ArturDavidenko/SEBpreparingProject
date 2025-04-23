import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestCardComponent } from './common-ui/test-card/test-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-project';
}
