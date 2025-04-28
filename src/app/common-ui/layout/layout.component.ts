import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-layout',
  imports: [RouterModule, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
