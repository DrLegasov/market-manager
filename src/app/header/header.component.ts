import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected: boolean;
  isAddPage: boolean;

  routerEventsSub: Subscription;
  tokenSub: Subscription;

  constructor(private authService : AuthService, private router : Router) {

}

  ngOnInit(): void {
    this.routerEventsSub = this.router.events.pipe(
    filter(event =>event instanceof NavigationEnd)).subscribe((e: any) => {
      if(e.url === '/books/new') {
        this.isAddPage = true;
      }
      else {
        this.isAddPage = false;
      }
    })
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
