import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})


export class LayoutComponent {
  translocoService = inject(TranslocoService)

  changeLang(lang: string) {
    console.log(lang)
    this.translocoService.setActiveLang(lang);
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }
}
