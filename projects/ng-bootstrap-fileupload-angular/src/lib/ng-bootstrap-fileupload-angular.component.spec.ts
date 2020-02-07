import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapFileuploadAngularComponent } from './ng-bootstrap-fileupload-angular.component';

describe('NgBootstrapFileuploadAngularComponent', () => {
  let component: NgBootstrapFileuploadAngularComponent;
  let fixture: ComponentFixture<NgBootstrapFileuploadAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapFileuploadAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapFileuploadAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
