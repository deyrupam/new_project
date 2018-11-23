import { Component } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import {MyDataService} from './my-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'tour of employee';

constructor(private newservice:MyDataService){}
ngOnInit(){

  console.log(this.newservice.success());
  console.log(this.newservice.obj);
}

// form;
// ngOnInit(){
//   this.form=new FormGroup({
//     firstname:new FormControl("abc"),
//     lastname:new FormControl("def"),
//     sub:new FormControl(""),


//   })
// }


onSubmit=function(user){
  console.log(user);

}

 items=["abc","def","ghi"];
 newItem="kuch";
 pushItem(){
  if(this.newItem !=""){
     this.items.push(this.newItem);
     this.newItem="";
     }

 }
 removeItem(index){
this.items.splice(index,1);

 }
  



}
