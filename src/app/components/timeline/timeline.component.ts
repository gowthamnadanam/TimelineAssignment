import { Component, OnInit, ViewChild } from '@angular/core';
import { appConfig } from 'src/config/appConfig';
import { Grade } from 'src/models/grades';
import { TimelineService } from '../../../services/timeline.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  grades: Grade[] = [];
  filteredArray: Array<Grade> = [];
  res: Array<Grade> = [];

  itemsPerSlide = appConfig.itemsPerSlide;
  singleSlideOffset = appConfig.singleSlideOffset;
  noWrap = appConfig.noWrap;
  activeSlideIndex = appConfig.activeSlideIndex;

  @ViewChild('carousel') carousel: any;

  constructor(private timelineService: TimelineService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getTimeline();
  }

  getTimeline(): void {
    this.timelineService.getTimeline()
      .subscribe((res : any)=>{
        this.grades = res;
    });
  }

  filterByReference = () => {
    this.res = this.grades.filter(el => {
      return this.carousel['_slidesWithIndexes'].find((element: { index: number; }) => {
        return element.index === el.id;
      });
    });
    return this.res;
  }

  changedTimeline() {
    this.filteredArray = this.filterByReference();
    this.sendNewData(this.filteredArray);
  }

  sendNewData(gridData: Array<Grade>) {
    this.dataService.sendData(gridData);
  }

}
