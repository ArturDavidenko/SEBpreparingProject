import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { TranslocoService } from '@ngneat/transloco';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})


export class LayoutComponent {
  translocoService = inject(TranslocoService)

   constructor() {
    this.translocoService.langChanges$
      .pipe(filter(lang => lang === 'ru'))
      .subscribe(() => {
        console.log('RU язык загружен');
      });
  }
  
  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }
}
