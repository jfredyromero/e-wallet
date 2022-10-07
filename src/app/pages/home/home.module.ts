import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from '../../core/components/hero/hero.component';
import { TransanctionsListComponent } from '../../core/components/transanctions-list/transanctions-list.component';
@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		HeroComponent,
		TransanctionsListComponent,
	],
})
export class HomeModule {}
