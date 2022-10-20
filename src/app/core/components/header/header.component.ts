import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class HeaderComponent implements DoCheck {
    isLoggedIn: boolean;

    constructor(private authService: AuthService) {
        this.isLoggedIn = this.authService.currentUserValue ? true : false;
    }

    ngDoCheck(): void {
        this.isLoggedIn = this.authService.currentUserValue ? true : false;
    }

    logout(): void {
        this.authService.logout();
    }
}
