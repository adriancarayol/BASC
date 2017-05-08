import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'home',
	templateUrl: './home.html',
	styleUrls: ['./css/home.css'],
})

export class HomeComponent implements OnInit {
	constructor() {}
	
	ngOnInit() {
		$('.carousel.carousel-slider').carousel({fullWidth: true});
		$('ul.tabs').tabs();
		$(".button-collapse").sideNav();
	}
}