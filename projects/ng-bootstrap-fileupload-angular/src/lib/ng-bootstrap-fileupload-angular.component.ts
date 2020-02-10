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
import { FileModel } from './file.model';

@Component({
  selector: "ng-bootstrap-fileupload-angular",
  templateUrl: './ng-bootstrap-fileupload-angular.component.html',
  styleUrls: ['./ng-bootstrap-fileupload-angular.css'],
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
  savedFile: FileModel;
  defaultUrl: string;
  fileName: string;
  @Input() previewUrl = null;
  @Input() showPreview = true;
  @Input() messageSelectFile = 'Drop file here or click to upload.';
  @ViewChild('fileInput', null) fileInput: ElementRef;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  constructor(
    private inj: Injector,
    private host: ElementRef<HTMLInputElement>
  ) {}

  onDragStart(event, data: any) {
    event.dataTransfer.setData('data', data);
  }

  onDrop(event) {
    this.uploadFile(event.dataTransfer.files[0]);
    event.preventDefault();
  }

  allowDrop(event) {
    event.preventDefault();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ngControl = this.inj.get(NgControl);
    this.defaultUrl = this.previewUrl;
    this.clearSavedFile();
  }

  clearSavedFile() {
    this.savedFile = {
      id: null,
      name: null,
      size: null,
      url: null,
      file: null
    };
  }

  writeValue(newModel: any) {
    this.host.nativeElement.value = '';
    this.selectedFile = null;
  }

  onFileSelected($event) {
    this.uploadFile($event.target.files[0]);
  }

  uploadFile(fileToUpload: File) {
    this.selectedFile = fileToUpload;

    if (this.selectedFile) {
      this.onChange(this.selectedFile);
      this.fileName = this.selectedFile.name;
      this.preview();

      this.savedFile.name = this.selectedFile.name;
      this.savedFile.size = this.bytesToSize(this.selectedFile.size);
    }
  }

  clear() {
    this.selectedFile = null;
    this.fileName = '';
    this.previewUrl = this.defaultUrl;
    this.fileInput.nativeElement.value = null;
    this.clearSavedFile();
    this.onChange(this.selectedFile);
  }

  bytesToSize(bytes: number) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
      return 'n/a';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
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
