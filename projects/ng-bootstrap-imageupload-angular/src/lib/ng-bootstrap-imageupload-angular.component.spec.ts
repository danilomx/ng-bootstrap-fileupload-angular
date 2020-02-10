import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapImageuploadAngularComponent } from './ng-bootstrap-imageupload-angular.component';

describe('NgBootstrapImageuploadAngularComponent', () => {
  let component: NgBootstrapImageuploadAngularComponent;
  let fixture: ComponentFixture<NgBootstrapImageuploadAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapImageuploadAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapImageuploadAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
