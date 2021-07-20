import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
;
import { SharedService } from 'src/app/sharedService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(public SharedService: SharedService,
  private route: ActivatedRoute) { }

  activeParam: string = "";
  categoryToShow: string = ''
  productsToShow:any 
  

  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.activeParam = params.productId;
      console.log('param: ', this.activeParam);
      this.AfterViewInit(this.activeParam)
    });
  }

  AfterViewInit(nameProduct:string) {
    this.SharedService.data = this.SharedService.dataOriginal.filter((e:any)=>{
      return e.name === nameProduct
    })
    this.categoryToShow = this.SharedService.data[0].category
    this.productsToShow = this.SharedService.dataOriginal.filter((e:any)=>{
      return e.name === nameProduct
    })
  }

}
