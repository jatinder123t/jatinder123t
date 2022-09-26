import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User } from '../user-add/user.model';

import { ToastrService } from 'src/app/shared/toastr.service';
import { UserService } from "../services/user.service";
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

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

  deleteUser()
  {
     this.userService
    .deleteUser(this.user.id)
    .subscribe(
       () => { data => this.user = data
        //  this.router.navigate(['/user'])
         this.toastr.success("User Deleted Successfully");
       },
       (error) => this.toastr.error(error),
    )
  }
  getUser()
  {
     this.userService
    .getUser(this.user.id)
    .subscribe(
       () => { data => this.user = data
        //  this.router.navigate(['/user'])
         // this.toastr.success("Updated User Successfully");
       },
       (error) => this.toastr.error(error),
    )
  }

  onSubmit(formValues) {
    formValues.status = 'active';
    this.userService
       .updateUser(formValues)
       .subscribe(
          () => {
           //  this.router.navigate(['/user'])
             this.toastr.success("Updated User Successfully");
          },
          (error) => this.toastr.error(error),
       )
 }
}
