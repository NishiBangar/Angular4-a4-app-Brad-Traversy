import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';


// Services
import { DataService } from './services/data.service';



// Create our Router configuration objects
export const ROUTES: Routes = [ 
	{
		path : '', /* Home Page */
		component : UserComponent,
		pathMatch : 'full'
	},
	{
		//path : 'about/:username',
		path : 'about',
		component : AboutComponent,
		pathMatch : 'full'
	}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
