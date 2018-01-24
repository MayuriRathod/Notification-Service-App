import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	employees: any;

	constructor() {
		this.employees = [
			{id: 1, name: 'Mayuri'},
			{id: 2, name: 'Rathod'},
			{id: 3, name: 'Pankaj'}
		];
	}

	ngOnInit() {
	}

}
