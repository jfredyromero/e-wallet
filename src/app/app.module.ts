import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		// FormsModule,
		AppRoutingModule,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
