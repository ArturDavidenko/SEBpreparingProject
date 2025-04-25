import { Component, inject } from '@angular/core';
import { TestCardComponent } from './common-ui/test-card/test-card.component';
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/services/interfaces/profile.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TestCardComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  

}
