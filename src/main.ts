import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideTransloco, TRANSLOCO_LOADER, translocoConfig, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { inject } from '@angular/core';


async function enableMocking() {
  if (environment.production) return;

  const { worker } = await import('./mocks/browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}

class TranslocoHttpLoader implements TranslocoLoader {
  http = inject(HttpClient);
  getTranslation(lang: string) {
    return this.http.get<Record<string, string>>(`/public/assets/i18n/${lang}.json`);
  }
}

async function main() {
  await enableMocking();

  await bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      provideTransloco({
        config: translocoConfig({
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
        }),
        loader: TranslocoHttpLoader,
      }),
      ...appConfig.providers,
    ],
  });
}

main().catch((err) => console.error(err));
