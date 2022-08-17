import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public students: Array<any>;
  displayedColumns: string[] = ['name', 'icNo', 'height', 'actions'];
  public dataSource = new MatTableDataSource;
  public myForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
    this.students = [
      { name: 'Ali bin Yusof', icNo: '930110938484', height: 182,  },
      { name: 'Abu bin Sufian', icNo: '970228098875', height: 173,  },
      { name: 'Saleha binti Salleh', icNo: '071010075568', height: 159,  }
    ];
    this.myForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      icNo: ['', Validators.compose([Validators.maxLength(14), Validators.pattern('^\\d{6}\\-\\d{2}\\-\\d{4}$'), Validators.required])],
      height: ['', Validators.compose([Validators.required])]
    });

    this.dataSource.data = this.students
  }

  onSubmit(){
    // if(this.myForm.valid){
      // console.log(this.myForm.value);
      // this.students.push(this.myForm.value);
      this.students.push({ name: 'Ali bin Yusof', icNo: '930110938484', height: 182,  });
      this.dataSource.data = this.students;
    // }
  }

  ngOnInit(): void {
  }

}
