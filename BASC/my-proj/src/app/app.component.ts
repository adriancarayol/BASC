import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})

export class AppComponent implements OnInit { 
	name = 'Angular'; 

	ngOnInit() {
		console.log("OK");
	}
}
