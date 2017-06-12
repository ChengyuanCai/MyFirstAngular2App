import { Component, Input, Output } from '@angular/core';

@Component({
	selector: 'subscription',
	templateUrl: 'app/subscription-form.component.html'
})
export class SubscriptionFormComponent {
	frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

	OnSubmit (form) {
		console.log(form);
	}
}
