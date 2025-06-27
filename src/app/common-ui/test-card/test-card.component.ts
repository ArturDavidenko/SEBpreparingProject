import { Component, Input } from '@angular/core';
import { Profile } from '../../data/services/interfaces/profile.interface';

@Component({
  selector: 'app-test-card',
  standalone: true,
  imports: [],
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.scss'
})

export class TestCardComponent {
  @Input() profile!: Profile;
  
}
