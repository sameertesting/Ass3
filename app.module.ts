import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//mport {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MyHiddenDirectives} from './directives/myhidden.directives';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MyHiddenDirectives
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
