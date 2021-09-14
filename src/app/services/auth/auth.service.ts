import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject < string > ;

  constructor() {
    this.token = new BehaviorSubject < string > ('');
  }


  signin(email: string, password: string): Promise < void | string > {
    return new Promise < void | string > ((resolve, reject) => {
      setTimeout(() => {
        if(email ==='philippe@anguler.boot' && password === "qwerty"){

        this.token.next('azertyui');
        resolve();
      } else {
        reject('Indentifiants incorrects.')
      }
    }, 350);
    })
  }
  signout(): Promise < void > {
    return new Promise < void > ((resolve, reject) => {
        this.token.next('');
        resolve();
      }
    );
  }
}
