import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Post} from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()	
export class PostService {
	private _url = "http://jsonplaceholder.typicode.com/posts";

	constructor (private _http: Http) {

	}

	getPosts() : Promise<Post[]> {
		return this._http.get(this._url)
				.map(res => res.json())
				.toPromise();
	}

	createPost(post) {
		return this._http.post(this._url, JSON.stringify(post))
				.map(res => res.json());
	}
}