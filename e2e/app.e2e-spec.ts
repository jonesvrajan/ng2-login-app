import { AngularTestFinalPage } from './app.po';

describe('angular-test-final App', () => {
  let page: AngularTestFinalPage;

  beforeEach(() => {
    page = new AngularTestFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
