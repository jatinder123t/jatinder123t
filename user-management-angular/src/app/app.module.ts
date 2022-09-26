import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { UserAppComponent } from "./user-app.component";
import { appRoutes } from "./routes";
import { LoaderComponent } from "./shared/Loader/loader.component";

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
   declarations: [
      UserAppComponent,
     
      LoaderComponent,
      UserAddComponent,
      UserDeleteComponent,
      UserUpdateComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CommonModule,
      // InMemoryWebApiModule.forRoot(InMemoryDataService),
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [UserAppComponent]
})
export class AppModule { }
