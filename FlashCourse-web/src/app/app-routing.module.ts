/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/app.routing.ts
The app routing file defines the routes of the application, each route contains a path and associated component. 
The home route is secured by passing the AuthGuard to the canActivate property of the route.
*/

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import {
    Routes, 
    RouterModule
} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent} from './courses/courses.component';
import { FlashcardsComponent} from './flashcards/flashcards.component';
import { HomeComponent } from './home/home.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegistrationComponent } from './registration/registration.component';
import { TermsComponent } from './terms/terms.component';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
// {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
// },
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'courses', component: CoursesComponent },
{ path: 'flashcards', component: FlashcardsComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'home/:id', component: HomeComponent },
{ path: 'institutions', component: InstitutionsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'terms', component: TermsComponent },
{ path: 'privacy', component: PrivacyComponent },

// otherwise redirect to home
{ path: '**', redirectTo: '' }

];

/*
    ! make card item appear
    1st iteration -> static decks, static cards
    Reflect to API team on what we would need. 
    todo: update route information to figure out how to make card component appear as a sub-item 
    * card detail view  '/:courseid/:deckid/card/:id'
        card will be the item 
    * course detail view '/:courseid/
    * decklist view '/:courseid/decks/

    <a routerLink="/:courseid/"
    * how do i pass in data to the routerlink on the click of a button
    https://angular.io/guide/router#route-definition-with-a-parameter
    create a get id method 
    Logic to transfer between id and the API
    create a skeletal page so that the deck can be passed.

    --FROM the above Angular documentation
    ngOnInit() {
  this.hero$ = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.service.getHero(params.get('id')));
}

*/

export const routing: 

ModuleWithProviders = RouterModule.forRoot(routes);