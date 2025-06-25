import { Observable } from "rxjs";

export interface IAuthService {
    readonly isAuth: boolean;
    loginAndSetCookie(payload: { employeerLastName: string; employeerPassword: string }): Observable<void>;
}