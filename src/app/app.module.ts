import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// tslint:disable-next-line: max-line-length
import { NgBootstrapFileuploadAngularModule } from '../../projects/ng-bootstrap-fileupload-angular/src/lib/ng-bootstrap-fileupload-angular.module';
import { NgBootstrapImageuploadAngularModule } from '../../projects/ng-bootstrap-imageupload-angular/src/lib/ng-bootstrap-imageupload-angular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapImageuploadAngularModule,
    NgBootstrapFileuploadAngularModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
