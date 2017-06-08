import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {FavoriteComponent} from './favorite.component';

@NgModule({
  imports:      [ BrowserModule ], 
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, FavoriteComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthorService, CourseService]
})
export class AppModule { }
