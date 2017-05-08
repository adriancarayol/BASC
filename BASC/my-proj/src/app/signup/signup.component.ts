import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  styleUrls: ['./css/signup.css'],
})

export class SignUpComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		$('select').material_select();
		$('.datepicker').pickadate({
    		selectMonths: true, // Creates a dropdown to control month
    		selectYears: 15 // Creates a dropdown of 15 years to control year
  		});
	}
}
