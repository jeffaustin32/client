import { Component, ViewChild } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { MdMenuTrigger, MdDialog } from '@angular/material';

// Components
import { LoginDialogComponent } from './shared/components/login-dialog/login-dialog.component';

// Services
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   trigger('slideInOut', [
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('void => *', [
        animate(200)
      ]),
      transition('* => void', [
        animate(200)
      ])
    ])
  ]
})
export class AppComponent {
  private header = 'Home';
  private menuState = 'closed';
  private isLoggedIn = false;
  private userEmail = 'Please log in';

  constructor(private authService: AuthService, public dialog: MdDialog, private router: Router) {
    // Subscribe to login changes
    authService.isLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    })
  }

  public login(): void {
    // Create the login spinner dialog
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: true
    });

    // Try to log in
    this.authService.login().subscribe(
      (res) => {
        dialogRef.close();
        this.userEmail = this.authService.getUserEmail();
      },
      (err) => { dialogRef.close() }
    );
  }

  public logout(): void {
    this.userEmail = 'Please log in';
    this.authService.logout();
  }

}
