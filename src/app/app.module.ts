import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { UserNamesComponent } from './user-names/user-names.component';
import { UserIdsComponent } from './user-ids/user-ids.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Servicios
import { PersonalService } from './personal.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormoneComponent } from './components/formone/formone.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { RatingNameComponent } from './components/rating-name/rating-name.component'



const routes: Routes = [
  { path: '',  component: HomeComponent, pathMatch:"full" },
  { path: 'users',  component: UsersComponent, pathMatch:"full" },
  { path: 'users-names',  component: UserNamesComponent, pathMatch:"full" },
  { path: 'users-ids',  component: UserIdsComponent, pathMatch:"full" },
  { path: 'users-by-id/:id',  component: UserByIdComponent, pathMatch:"full" },
  { path: 'add-user',  component: AddUserComponent, pathMatch:"full" },
  { path: 'user-detail/:id',  component: UserDetailComponent, pathMatch:"full" },
  { path: 'form-one',  component: FormoneComponent, pathMatch:"full" },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo:"404", pathMatch:"full" },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotfoundComponent,
    HomeComponent,
    UserNamesComponent,
    UserIdsComponent,
    UserByIdComponent,
    AddUserComponent,
    UserDetailComponent,
    FormoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    StarRatingComponent,
    RatingNameComponent
  ],
  providers: [
    PersonalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
