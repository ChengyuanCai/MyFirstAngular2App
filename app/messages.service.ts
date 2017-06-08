import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
	getMessages() {
		return ['m1', 'm2', 'm3'];
	}
}