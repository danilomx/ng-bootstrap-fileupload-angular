import { TestBed } from '@angular/core/testing';

import { NgBootstrapImageuploadAngularService } from './ng-bootstrap-imageupload-angular.service';

describe('NgBootstrapImageuploadAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBootstrapImageuploadAngularService = TestBed.get(NgBootstrapImageuploadAngularService);
    expect(service).toBeTruthy();
  });
});
