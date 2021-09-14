import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected: boolean;
  tokenSub: Subscription;

  constructor(private authService : AuthService, private router : Router) {

}

  ngOnInit(): void {
    this.tokenSub = this.authService.token.subscribe((token: string) => {
      if(token) {
        this.isConnected = true;
      } else {
      this.isConnected = false;
      }
    }
  );
  }

  onClickSignout() {
    this.authService.signout().then(() => {
      this.router.navigateByUrl('auth');
    })
  }
  ngOnDestroy() {
    this.tokenSub.unsubscribe();
  }

}
