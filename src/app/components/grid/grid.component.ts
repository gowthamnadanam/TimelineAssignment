import { Component, OnInit } from '@angular/core';
import { Grade } from '../../../models/grades';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  filteredArray: Array<Grade> = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.gridData.subscribe(response => {
      this.filteredArray = response;
    });
  }

}
