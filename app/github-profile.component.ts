import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GitHubService} from './github.service';

@Component({
	selector: 'github-profile',
	styles: [`
		.avatar {
			width: 100;
			height: 100;
			border-radius: 100%;
		}
	`],
	templateUrl: 'app/github.template.html',
	providers: [GitHubService]
})
export class GitHubProfileComponent implements OnInit {
	isLoading = true;
	username = "sCAIwalker";
	user = {};
	followers = [];

	constructor(private _gitHubService: GitHubService) {}

	ngOnInit() {
		Observable.forkJoin(
			this._gitHubService.getUser(this.username),
			this._gitHubService.getFollowers(this.username)
		)
		.subscribe (
			res => {
				this.user = res[0];
				this.followers = res[1];
				console.log(res);
			},
			null,
			() => {this.isLoading = false;})
	}
}