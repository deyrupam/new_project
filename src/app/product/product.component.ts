import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { MyDataService } from '../my-data.service';
let student = require('../../data/students.json');
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private newservice:MyDataService) { }

   ngOnInit() {
    // console.log(this.newservice.obj);
    console.log(student);
    console.log(this.newservice.fetchData());

  }


}
