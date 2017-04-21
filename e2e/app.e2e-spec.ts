import { ReduxLayoutAppPage } from './app.po';

describe('redux-layout-app App', () => {
  let page: ReduxLayoutAppPage;

  beforeEach(() => {
    page = new ReduxLayoutAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
