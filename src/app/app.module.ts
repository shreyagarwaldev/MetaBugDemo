import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'about', component: AboutComponent, pathMatch: 'full' }
      ]),
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
