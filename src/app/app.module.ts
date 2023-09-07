import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './list/task-list/task-list.component';
import { TaskFilterComponent } from './filter/task-filter/task-filter.component';
import { TaskFormComponent } from './form/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from './task-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFilterComponent,
    TaskFormComponent,
    TaskFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
