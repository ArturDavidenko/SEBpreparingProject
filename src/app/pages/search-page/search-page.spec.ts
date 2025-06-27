import { Component } from "@angular/core";
import { Profile } from "../../data/services/interfaces/profile.interface";
import { of } from "rxjs";
import { SearchPageComponent } from "./search-page.component";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ProfileService } from "../../data/services/profile.service";
import { By } from "@angular/platform-browser";
import { TestCardComponent } from "../../common-ui/test-card/test-card.component";
import { CommonModule } from "@angular/common";

// @Component({
//     selector: 'app-test-card',
//     standalone: true,
//     template: '<div class="test-card-mock"></div>',
//     inputs: ['profile']
// })
// class MockTestCardComponent {}


@Component({
    selector: 'app-test-storybook',
    standalone: true,
    template: '<div class="mock-storybook"></div>'
})
class MockTestStorybookComponent {}

const mockProfiles: Profile[] = [
    // i have mocket http GET request but i try write all manually
    {
        "id": "674c953b5b1f7ffe6ce47437",
        "firstName": "Valerijs",
        "lastName": "Davidenko",
        "phoneNumber": "27029494",
        "role": "admin",
        "orders": [],
        "image": null,
        "imageId": null
      },
      {
          "id": "674c9622540f2015a5115fdf",
          "firstName": "Artur",
          "lastName": "DavidenkoV2",
          "phoneNumber": "27029494",
          "role": "admin",
          "orders": [],
          "image": null,
          "imageId": null
      },
      {
          "id": "67ddf844e153d0c01f5571ee",
          "firstName": "Egors",
          "lastName": "Petrovs",
          "phoneNumber": "27021777",
          "role": "employeer",
          "orders": [
              "67ddfa16e153d0c01f5571f7",
              "67ddfa7ce153d0c01f5571f8",
              "67e1a63c4b7d49aa53c7a686",
              "67e1f8c3a63dd807098aca21",
              "67e2ac5bb23422998ac74386",
              "67e1eb7f312d0f0aaa850297",
              "67e2f340e532385c42f722ad",
              "67e2f367e532385c42f722ae"
          ],
          "image": null,
          "imageId": null
      },
      {
          "id": "67ddf86de153d0c01f5571ef",
          "firstName": "Maksim",
          "lastName": "Efremof",
          "phoneNumber": "2766852",
          "role": "employeer",
          "orders": [
              "67ddfa16e153d0c01f5571f7",
              "67ddfa7ce153d0c01f5571f8",
              "67e1f8c3a63dd807098aca21"
          ],
          "image": null,
          "imageId": "679d31a5d600c667d68e84b9"
      },
      {
          "id": "67ddf894e153d0c01f5571f0",
          "firstName": "Nikita",
          "lastName": "Solomjanij",
          "phoneNumber": "2502395",
          "role": "employeer",
          "orders": [
              "67ddfa16e153d0c01f5571f7",
              "67ddfa7ce153d0c01f5571f8",
              "67e2f30fe532385c42f722ac"
          ],
          "image": null,
          "imageId": "679d31a5d600c667d68e84b9"
      },
      {
          "id": "67ddf8c0e153d0c01f5571f1",
          "firstName": "Anton",
          "lastName": "Shulak",
          "phoneNumber": "2709123",
          "role": "employeer",
          "orders": [
              "67e2f340e532385c42f722ad"
          ],
          "image": null,
          "imageId": "679d31a5d600c667d68e84b9"
      },
      {
          "id": "67ddf8eee153d0c01f5571f2",
          "firstName": "Pavel",
          "lastName": "Durunov",
          "phoneNumber": "2500782",
          "role": "employeer",
          "orders": [
              "67ddfa7ce153d0c01f5571f8",
              "67e2f367e532385c42f722ae"
          ],
          "image": null,
          "imageId": null
      },
      {
          "id": "67e1f59f4258483db620f57e",
          "firstName": "Lev",
          "lastName": "Snikers",
          "phoneNumber": "27029999",
          "role": "manager",
          "orders": [
              "67e1f8c3a63dd807098aca21"
          ],
          "image": null,
          "imageId": null
      }
] 


class MockProfileService{
    getEmployees() {
        //console.log(mockProfiles);
        return of(mockProfiles)
    }
}

describe('SearchPageComponent', () => {
    let component: SearchPageComponent;
    let fixture: ComponentFixture<SearchPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SearchPageComponent,
                TestCardComponent,
                MockTestStorybookComponent,
                CommonModule
            ],
            providers: [
                { provide: ProfileService, useClass: MockProfileService}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(SearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call getEmployees and set profiles', () => {
        expect(component.profiles.length).toBe(8);
        expect(component.profiles).toEqual(mockProfiles);
    });

    it('should render correct number of test-card components', waitForAsync(async () => {
        await fixture.whenStable();
        fixture.detectChanges();
        
        const cards = fixture.debugElement.queryAll(By.css('app-test-card'));
        expect(cards.length).toBe(mockProfiles.length);
    }));
});