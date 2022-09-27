import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from '../components/hero/hero.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, HomeRoutingModule, HeroComponent],
})
export class HomeModule {}
