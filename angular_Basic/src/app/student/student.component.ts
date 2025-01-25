import { CommonModule } from '@angular/common';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [CommonModule,FormsModule],
  // providers:[StudentServiceService],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  constructor(private stu:StudentServiceService){

  }
  showform=false;
  formHeader="Student Details"
  studentname="";
  studentage=null;
  studentid=null;
  student:any=null;
  ngOnInit(): void {
    this.getallstudents()          
  }
  getallstudents(){
    this.stu.fetchStudents().subscribe(
      (data)=>{
        this.student=data
      }
      
    )
  }
  deletestudent(id:number){
      this.stu.deletestdentid(id).subscribe(
      (res) => {
        console.log('Delete Success:', res); // Log API Response
        this.getallstudents(); // Refresh List
      },
      (error) => {
        console.error('Delete Failed:', error); // Log Error
      }
    );
  }
  openform(datt=null){
    this.showform=true;
   if(datt){
    this.studentname=datt['name'];
    this.studentage=datt['age']
    this.studentid=datt['id']
    this.formHeader ="Edit Student Details"
   }
    else{
      this.studentid=null
      this.formHeader = "Add Student Details"
    }
  }
  cancelform(){
    this.showform=false;
    this.studentname=""
    this.studentage=null
    this.studentid=null
  }
  saveform(){
    //this.st
    this.showform=false
    let body ={
      id: this.studentid,
      name: this.studentname,
      age: this.studentage
    }
    if(this.studentid){
      // body['id']=this.studentid;
      this.stu.editstudent(body).subscribe(
        (res)=>{
          this.getallstudents()
        }
      )
    }
    else{
      this.stu.savestudent(body).subscribe(
        (res)=>{
          this.getallstudents()
        }
      )
    }
    this.showform=false;
    this.studentname=""
    this.studentage=null
    this.studentid=null

  }
}
