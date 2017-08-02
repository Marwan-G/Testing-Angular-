import { TestangularPage } from './app.po';

describe('testangular App', () => {
  let page: TestangularPage;

  beforeEach(() => {
    page = new TestangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
