import { provideTransloco, TranslocoLoader } from "@ngneat/transloco";
import { LoginPageComponent } from "./login-page.component";
import { Meta, StoryObj } from '@storybook/angular';
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { AuthService } from "../../auth/auth.service";


class MockTranslocoLoader implements TranslocoLoader {
  getTranslation(lang: string): Promise<Record<string, any>> {
    return Promise.resolve({ 'Last name': 'Last name', 'Password': 'Password' });
  }
}

class MockAuthService {
  get isAuth(): boolean {
    return true;
  }
  loginAndSetCookie(payload: any) {
    return {
      pipe: () => ({
        subscribe: ({ next }: any) => {
          next({ token: 'mock-token', expiration: 9999 });
        }
      })
    };
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
                //provideHttpClient(),
                provideRouter([]),
                {
                    provide: AuthService,
                    useClass: MockAuthService
                },
            ]
        })
    ]
};

export default meta;

type Story = StoryObj<LoginPageComponent>;

export const Default: Story = {};