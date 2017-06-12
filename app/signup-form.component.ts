import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { usernameValidators } from './usernameValidators';

@Component({
	selector:'signup-form',
	templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
	form: FormGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			username: ['', Validators.compose([Validators.required, usernameValidators])], 
			password: ['', Validators.required]
		});
	}


	/*form = new FormGroup({
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required)
	});*/

	signUp() {
		console.log(this.form.value);
	}
}