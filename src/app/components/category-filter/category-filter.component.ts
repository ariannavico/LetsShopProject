import { Component, Input, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  constructor() { }

  @Input()categoriesName:string[] = []
  @Output() filter:any = new EventEmitter()

  ngOnInit(): void {
  }


  filterByCategory(e:string){
    this.filter.emit(e)
  }
}
