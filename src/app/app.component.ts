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
  savedFile = {
    id: 123456,
    name: null,
    size: null,
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png',
    file: null
  };

  ngOnInit() {
    this.formGroup = new FormGroup({
      FileUp: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.formGroup.patchValue({ FileUp: this.savedFile});
  }
  guardar() {
    const FORMULARIO: any = this.formGroup;
    console.log(FORMULARIO.value.FileUp);
  }
}
