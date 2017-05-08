import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./css/search.css'],
})

export class SearchComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		$(".button-collapse").sideNav();
	}
}
