import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

	ImageUrlList = ['one.png', 'two.jpg', 'three.jpg', 'default.jpg'];
	ImageTimeOut = 5 * 1000;
	selected = 0;

	constructor() {
	}

	ngOnInit() {
		this.loadImages();
	}

	loadImages() {
		var count = 0;
		setInterval( () => {
			this.selected = count;
			count = count + 1;
			if(count == this.ImageUrlList.length) {
				count = 0;
			}
		}, this.ImageTimeOut);
	}
}