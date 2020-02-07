import { OnInit, Component, Injector, forwardRef, Input } from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: "ng-bootstrap-fileupload-angular",
  templateUrl: './ng-bootstrap-fileupload-angular.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgBootstrapFileuploadAngularComponent),
      multi: true
    }
  ]
})
export class NgBootstrapFileuploadAngularComponent
  implements ControlValueAccessor, OnInit {
  selectedFile: File = null;
  defaultUrl: string;
  fileName: string;
  @Input() previewUrl = null;
  @Input() showPreview = true;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  constructor(private inj: Injector) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ngControl = this.inj.get(NgControl);

    this.defaultUrl = this.previewUrl;
  }

  writeValue(newModel: any) {}

  onFileSelected($event) {
    this.selectedFile = $event.target.files[0] as File;

    if (this.selectedFile) {
      this.onChange(this.selectedFile);
      this.fileName = this.selectedFile.name;
      this.preview();
    }
  }

  clear() {
    this.selectedFile = null;
    this.fileName = '';
    this.previewUrl = this.defaultUrl;
  }

  preview() {
    // Show preview
    const mimeType = this.selectedFile.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  inputBlur($event) {
    this.onTouched();
  }
}
