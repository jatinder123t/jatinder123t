import { Routes } from "@angular/router";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserUpdateComponent } from "./user-update/user-update.component";
export const appRoutes: Routes = [
   { path: 'updateuser', component: UserUpdateComponent },
   { path: 'adduser', component: UserAddComponent },
   { path: '', redirectTo: 'adduser', pathMatch: 'full' },
   { path: '**', redirectTo: 'adduser', pathMatch: 'full' },
]