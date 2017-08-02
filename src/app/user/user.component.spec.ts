import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';

describe('component: user ', () => {
    beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
  });
  });

