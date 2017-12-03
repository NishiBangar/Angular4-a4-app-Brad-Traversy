import { Component, OnInit } from '@angular/core';
// To access information about the current route
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	username : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  	//this.route.params.subscribe((params) => this.username = params.username);
  }

}
 