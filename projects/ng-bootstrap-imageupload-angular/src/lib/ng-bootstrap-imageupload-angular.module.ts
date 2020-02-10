import { NgModule } from '@angular/core';
import { NgBootstrapImageuploadAngularComponent } from './ng-bootstrap-imageupload-angular.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgBootstrapImageuploadAngularComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgBootstrapImageuploadAngularComponent]
})
export class NgBootstrapImageuploadAngularModule { }
