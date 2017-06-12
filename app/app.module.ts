import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './subscription-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], 
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, FavoriteComponent, LikeComponent, VoteComponent, ZippyComponent, ContactFormComponent, SubscriptionFormComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthorService, CourseService]
})
export class AppModule { }
