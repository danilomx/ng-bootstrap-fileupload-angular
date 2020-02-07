import { TestBed } from '@angular/core/testing';

import { NgBootstrapFileuploadAngularService } from './ng-bootstrap-fileupload-angular.service';

describe('NgBootstrapFileuploadAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBootstrapFileuploadAngularService = TestBed.get(NgBootstrapFileuploadAngularService);
    expect(service).toBeTruthy();
  });
});
