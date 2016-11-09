import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username:string;
	private client_id = 'f3db9b4aec34af0d54f3';
	private client_secret = 'c8c978463e70f9996b6235d301a1857cc074f616';

	constructor(private _http: Http){
		console.log('Github Service Ready...');
		this.username = 'cesarrodas';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/' + this.username + '?client_id='+this.client_id + '&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id='+this.client_id + '&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}
}
