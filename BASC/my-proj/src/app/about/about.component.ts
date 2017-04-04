import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'about',
	templateUrl: './about.html'
})

export class AboutComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		$('.parallax').parallax();
		$('.collapsible').collapsible();
	}
}