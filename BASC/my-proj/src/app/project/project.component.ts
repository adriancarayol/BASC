import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.html',
  styleUrls: ['./css/project.css'],
})

export class ProjectComponent implements OnInit {

	ngOnInit() {
		$('.carousel.carousel-slider').carousel({fullWidth: true});
	}
}
