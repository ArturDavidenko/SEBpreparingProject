import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
    let service: ProfileService;
    let httpMock: HttpTestingController;
    let employeeId: string;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProfileService]
        });

    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
    });

    it('should fetch single profile data', () => {
        //Arrange
        const mockResponse = {
                "id": "674c953b5b1f7ffe6ce47437",
                "firstName": "Valerijs",
                "lastName": "Davidenko",
                "phoneNumber": "27029494",
                "role": "admin",
                "orders": [],
                "image": null,
                "imageId": null
            };

        employeeId = "674c953b5b1f7ffe6ce47437";

        //Act
        service.getEmpoyeeProfile(employeeId).subscribe((data) => {
            //Assert
            expect(data).toEqual(mockResponse);
        });

        const req = httpMock.expectOne(`https://localhost:7251/Admin/get-employeer/${employeeId}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse); //Act
    });


    afterEach(() => {
        httpMock.verify();
    });
});