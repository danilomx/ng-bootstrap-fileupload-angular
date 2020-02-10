import {
  OnInit,
  Component,
  Injector,
  forwardRef,
  Input,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import {
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: "ng-bootstrap-imageupload-angular",
  templateUrl: './ng-bootstrap-imageupload-angular.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgBootstrapImageuploadAngularComponent),
      multi: true
    }
  ]
})
export class NgBootstrapImageuploadAngularComponent
  implements ControlValueAccessor, OnInit {
  selectedFile: File = null;
  defaultUrl: string;
  fileName: string;
  @Input() previewUrl = null;
  @Input() showPreview = true;
  @ViewChild('file', null) file: ElementRef;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  constructor(
    private inj: Injector,
    private host: ElementRef<HTMLInputElement>
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ngControl = this.inj.get(NgControl);
    this.defaultUrl = this.previewUrl;
  }

  writeValue(newModel: any) {
    this.host.nativeElement.value = '';
    this.selectedFile = null;
  }

  onFileSelected($event) {

    console.log('file selected change')
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
    this.file.nativeElement.value = null;
    this.onChange(this.selectedFile);
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
