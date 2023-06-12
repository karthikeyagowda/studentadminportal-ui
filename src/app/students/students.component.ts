import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../models/ui-models/student.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {

  students : Student[] = [];

  columnsToDisplay = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender'];

  dataSource: MatTableDataSource<Student>  = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) matPaginator!:MatPaginator;

  @ViewChild(MatSort) matSort!:MatSort;

  filterString = '';

  constructor(private studentService : StudentService){
  }

  ngOnInit(): void {
    this.studentService.getStudent()
    .subscribe(
      (successResponse) =>{
        this.students = successResponse;
        this.dataSource = new MatTableDataSource<Student>(this.students);

        if(this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if(this.matSort){
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
      }
    );
  }

  filterStudents(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
