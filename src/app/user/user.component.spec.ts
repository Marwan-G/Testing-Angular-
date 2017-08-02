import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('component: user ', () => {
    beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
  });
  });

  it('should creat the app ', () => {
    const  fixture = TestBed.createComponent(UserComponent);
    const  app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
  it('should get username from service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const usercompo = fixture.debugElement.componentInstance;
    const userservice =  fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userservice.user.name).toEqual(usercompo.user.name);
  });
  it('should display username if user islogged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const usercompo = fixture.debugElement.componentInstance;
     usercompo.isLoggedIn = true;
    fixture.detectChanges();
    const compileTemplate = fixture.debugElement.nativeElement;
    expect(compileTemplate.querySelector('p').textContent).toContain(usercompo.user.name);
  })
  it('should not  display username if user islogged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const usercompo = fixture.debugElement.componentInstance;
    usercompo.isLoggedIn = false;
    fixture.detectChanges();
    const compileTemplate = fixture.debugElement.nativeElement;
    expect(compileTemplate.querySelector('p').textContent).not.toContain(usercompo.user.name);
  })
});
