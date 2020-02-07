import { NgModule } from '@angular/core';
import { NgBootstrapFileuploadAngularComponent } from './ng-bootstrap-fileupload-angular.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgBootstrapFileuploadAngularComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgBootstrapFileuploadAngularComponent]
})
export class NgBootstrapFileuploadAngularModule { }
