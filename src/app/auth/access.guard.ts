import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"

export const canActivateAuth = () => {
    const isLoggednIn = inject(AuthService).isAuth

    if (isLoggednIn) {
        return true
    }

    return inject(Router).createUrlTree(['/login'])
}