import { Component } from '@angular/core';

@Component({
	selector: 'contact-form',
	templateUrl: 'app/contact-form.component.html'
})

export class ContactFormComponent {
	OnSubmit(form) {
		console.log(form);
	}
}