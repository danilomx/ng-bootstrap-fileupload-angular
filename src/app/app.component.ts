import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngbootstrapfileuploadangular';
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      FileUp: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }
}
