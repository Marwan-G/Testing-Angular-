import {  ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

describe('component: user ', () => {
    beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
  });
  });
// it('should creat the app ', () => {
//     const  fixture = TestBed.createComponent(UserComponent);
//     const  usercomponent = fixture.debugElement.componentInstance;
//     expect(usercomponent).toBeTruthy();
// })


// it('should get username from service', () => {
//     const fixture = TestBed.createComponent(UserComponent);
//     const usercompo = fixture.debugElement.componentInstance;
//     const userservice =  fixture.debugElement.injector.get(UserService);
//     fixture.detectChanges();
//     expect(userservice.user.name).toEqual(usercompo.user.name);
// });
// it('should display username if user islogged in', () => {
//     const fixture = TestBed.createComponent(UserComponent);
//     const usercompo = fixture.debugElement.componentInstance;
//     usercompo.isLoggedIn = true;
//     fixture.detectChanges();
//     const compileTemplate = fixture.debugElement.nativeElement;
//     expect(compileTemplate.querySelector('p').textContent).toContain(usercompo.user.name);
// })
// it('should not  display username if user islogged in', () => {
//     const fixture = TestBed.createComponent(UserComponent);
//     const usercompo = fixture.debugElement.componentInstance;
//     usercompo.isLoggedIn = false;
//     fixture.detectChanges();
//     const compileTemplate = fixture.debugElement.nativeElement;
//     expect(compileTemplate.querySelector('p').textContent).not.toContain(usercompo.user.name);
// });
  it('shoud not fetch data successfully if not called asyncronouslly ', ()=> {
    const fixture = TestBed.createComponent(UserComponent);
    const  usercompo = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges();
    expect(usercompo.data).toBe(undefined);
  });
  it('should not fetch data successfully if not called asyncronuoslly', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const usercompo = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValues(Promise.resolve('Data'))
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    expect(usercompo.data).toBe('Data');
    })

  }));
})
