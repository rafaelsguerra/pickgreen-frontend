import { PickgreenFrontendPage } from './app.po';

describe('pickgreen-frontend App', () => {
  let page: PickgreenFrontendPage;

  beforeEach(() => {
    page = new PickgreenFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
