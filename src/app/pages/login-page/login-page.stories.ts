import { provideTransloco, TranslocoLoader } from "@ngneat/transloco";
import { LoginPageComponent } from "./login-page.component";
import { Meta, StoryObj } from '@storybook/angular';
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { Observable, of } from "rxjs";
import { IAuthService } from "../../interfaces/auth.service.interface";


class MockTranslocoLoader implements TranslocoLoader {
  getTranslation(lang: string): Promise<Record<string, any>> {
    return Promise.resolve({ 'Last name': 'Last name', 'Password': 'Password' });
  }
}

class MockAuthService implements IAuthService {
  get isAuth(): boolean {
    return true;
  }
  loginAndSetCookie(): Observable<void> {
    return of(void 0);
  }
}


const meta: Meta<LoginPageComponent> = {
    title: 'Pages/LoginPage',
    component: LoginPageComponent,
    tags: ['autodocs'],
    decorators: [
        (story) => ({
            ...story(),
            providers: [
                provideTransloco({
                    config: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                        prodMode: true,
                    },
                    loader: MockTranslocoLoader
                    }),
                provideHttpClient(),
                {
                    provide: AuthService,
                    useClass: MockAuthService
                },
                provideRouter([])
            ]
        })
    ]
};

export default meta;

type Story = StoryObj<LoginPageComponent>;

export const Default: Story = {};