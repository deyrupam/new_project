import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http:Http) { }
fetchData(){
  this.http.get('../data/students.json').subscribe(
    (data)=>console.log(data)
  )

}

  obj =[
  {
    id:1,
    name:"rupam",
    rollno:4
  }
]
success(){
  return "successfull";
}

}
