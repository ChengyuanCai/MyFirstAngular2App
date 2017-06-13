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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './subscription-form.component';
import { SignUpFormComponent } from './signup-form.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { PostService } from './post.service';
import { GitHubService } from './github.service';
import {GitHubProfileComponent} from './github-profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule], 

  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, FavoriteComponent, 
  				LikeComponent, VoteComponent, ZippyComponent, ContactFormComponent, SubscriptionFormComponent, 
  				SignUpFormComponent, GitHubProfileComponent],

  bootstrap:    [ AppComponent ],

  providers: [AuthorService, CourseService, PostService, GitHubService]
})
export class AppModule { }
