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
import { FileModel } from 'projects/ng-bootstrap-fileupload-angular/src/lib/file.model';

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
  savedFile: FileModel;
  defaultUrl: string;
  @Input() showPreview = true;
  @ViewChild('fileInput', null) fileInput: ElementRef;

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
  }

  writeValue(newFileModel: any) {
    if (newFileModel) {
      this.savedFile = newFileModel;
      this.defaultUrl = newFileModel.url;
    }
  }

  onFileSelected($event) {
    this.uploadFile($event.target.files[0]);
  }

  uploadFile(fileToUpload: File) {
    console.log(this.savedFile);
    this.savedFile.file = fileToUpload;

    if (this.savedFile.file) {
      this.preview();

      this.savedFile.name = this.savedFile.file.name;
      // this.savedFile.size = this.bytesToSize(this.savedFile.file.size);

      this.onChange(this.savedFile);
    }
  }

  bytesToSize(bytes: number) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
      return 'n/a';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
  }

  clear() {
    this.savedFile.name = null;
    this.savedFile.size = null;
    this.savedFile.url = null;
    this.savedFile.file = null;

    this.savedFile.url = this.defaultUrl;
    this.fileInput.nativeElement.value = null;
    this.onChange(this.savedFile);
  }

  preview() {
    // Show preview
    const mimeType = this.savedFile.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.savedFile.file);
    reader.onload = _event => {
      this.savedFile.url = reader.result;
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
