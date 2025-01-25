import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

    
  
  constructor(private http:HttpClient) { }
  url = "http://localhost:8080/student";
  fetchStudents(){
    return this.http.get(this.url+"/findAll")
  }
  deletestdentid(id:number){
    return this.http.delete(this.url+"/"+id);

  }
  savestudent(student:any){
    return this.http.post(this.url+"/insert",student)
  }
  editstudent(student:any){
    return this.http.put(this.url+"/"+student['id'],student)
  }
 
}
