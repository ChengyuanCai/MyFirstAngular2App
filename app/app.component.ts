import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  			 <courses></courses>
  			 <authors></authors>
  			 <favorite></favorite>
                `

})
export class AppComponent {
	title = "My First Angular App";
}
