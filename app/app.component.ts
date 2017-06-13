import { Component } from '@angular/core';
import { PostService } from './post.service';
import { onInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div *ngIf = "isLoading">
  				<i class="fa fa-spinner fa-spin fa-3x"></i>
  			</div>`
  /*templateUrl: 'app/favorite.template.html',*/
  providers: [PostService]
})

export class AppComponent implements onInit {
	title = "My First Angular App";
	isLoading = true;

	constructor(private _postService: PostService) {
	}

	onFavoriteChange($event) {
		console.log($event);
	}

	onVote($event) {
		console.log($event);
	}

	post = {
		title: 'title',
		isFavorite: true
	}

	tweet = {
		totalLikes: 10,
		isLike: false
	}

	votes = {
		voteCount: 10,
		myVote: 0
	}

	ngOnInit() {
		this._postService.getPosts()
				.then(posts => {
					this.isLoading = false;
					console.log(posts[0].id);

				});

	}
}

