import { Component } from '@angular/core';

@Component({
   selector: 'user-app',
   template: `
      <nav class='navbar navbar-expand navbar-bg'>
         <ul class='nav nav-pills'>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/adduser']">Add User</a></li>
            
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/updateuser']">Update User</a></li>
            
         </ul>
      </nav>
      <div class="container">
         <router-outlet></router-outlet>
      </div>
   `
})
export class UserAppComponent {

}