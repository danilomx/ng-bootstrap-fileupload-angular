# ng-bootstrap-fileupload-angular

# Angular File Upload

[![npm](https://img.shields.io/npm/v/ng-bootstrap-fileupload-angular.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/ng-bootstrap-fileupload-angular)
[![npm](https://img.shields.io/npm/dm/ng-bootstrap-fileupload-angular.svg)](https://www.npmjs.com/package/ng-bootstrap-fileupload-angular)

**This package supports Angular 8+**

Description

---

This fileupload is responsive design, so feel free to try it in your desktops, tablets and mobile devices.

## Dependencies
[bootstrap ^4.0.0](https://www.npmjs.com/package/bootstrap)

## Live Demo
[https://ng-bootstrap-fileupload-angular.stackblitz.io](https://stackblitz.com/edit/ng-bootstrap-fileupload-angular)

## How to Use

1.  Install with [npm](https://www.npmjs.com):`npm install ng-bootstrap-fileupload-angular --save`

2.  Add NgBootstrapFileuploadAngularModule to your **@NgModule** like example below

    ```typescript
    import { BrowserModule } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";

    import { AppComponent } from "./app.component";
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";
    import { CommonModule } from "@angular/common";

    import { NgBootstrapFileuploadAngularModule } from "ng-bootstrap-fileupload-angular";

    @NgModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapFileuploadAngularModule,
        CommonModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```

3.  Add your input into **form** like example below

    ```html
    <form>
      <div [formGroup]="formGroup">
        <ng-bootstrap-fileupload-angular
            previewUrl="https://dashboard.mx/ffct_laravel/public/img/user.png"
            showPreview="true" formControlName="FileUp"></ng-bootstrap-fileupload-angular>
      </div>
    </form>
    ```

4.  Connect to your __component__

    ```typescript
    import { Component, OnInit } from "@angular/core";
    import { FormGroup, FormControl, Validators } from "@angular/forms";

    @Component({
      selector: "app-root",
      templateUrl: "./app.component.html",
      styleUrls: ["./app.component.scss"]
    })
    export class AppComponent implements OnInit {
      title = "FileUp";
      formGroup: FormGroup;

      ngOnInit() {
        this.formGroup = new FormGroup({
          FileUp: new FormControl(null, {
            validators: [Validators.required]
          })
        });
      }
    }
    ```

License
-------
* License: MIT

Author
-------
**Danilo Meneses Loaisiga**
