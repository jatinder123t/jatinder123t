import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User } from './user.model';

import { ToastrService } from 'src/app/shared/toastr.service';
import { UserService } from "../services/user.service";
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor( private router: Router,
    private userService: UserService,
    private toastr: ToastrService) { }

  user: User =
  {
  id:null,
  name:'',
  gender:'',
  email:'',
  status:''
  }
  ngOnInit(): void {
  }

  onSubmit(formValues) {
    formValues.status = 'active';
    this.userService
       .addUser(formValues)
       .subscribe(
          () => {
           //  this.router.navigate(['/user'])
             this.toastr.success("Added new User");
          },
          (error) => this.toastr.error(error),
       )
 }
}
