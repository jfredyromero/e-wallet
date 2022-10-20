import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WalletService } from '../../services/wallet.service';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeroComponent, RouterTestingModule, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
