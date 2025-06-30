import { NgClass } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-test-storybook',
  imports: [NgClass],
  standalone: true,
  templateUrl: './test-storybook.component.html',
  styleUrl: './test-storybook.component.scss'
})
export class TestStorybookComponent {
    @Input() label: string = '';
    @Input() color: string = ''; 
}
