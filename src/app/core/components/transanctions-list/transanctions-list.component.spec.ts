import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransanctionsListComponent } from './transanctions-list.component';

describe('TransanctionsListComponent', () => {
    let component: TransanctionsListComponent;
    let fixture: ComponentFixture<TransanctionsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TransanctionsListComponent, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(TransanctionsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
