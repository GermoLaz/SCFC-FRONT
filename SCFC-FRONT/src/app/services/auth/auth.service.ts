import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string) {
    // Aquí normalmente verificarías las credenciales del usuario con un servidor.
    // Por simplicidad, este ejemplo simplemente permite cualquier nombre de usuario/contraseña.
    if(username === 'user' && password === 'pass'){
      this._isLoggedIn = true;
      this.router.navigate(['/main-page']);
    }
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }
}
