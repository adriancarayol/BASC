import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'project',
  templateUrl: './project.html',
  styleUrls: ['./css/project.css'],
})

export class ProjectComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		$('.carousel.carousel-slider').carousel({fullWidth: true});
		$('.modal').modal();
	}
}
