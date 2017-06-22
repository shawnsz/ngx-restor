import { RistorPage } from './app.po';

describe('ristor App', () => {
  let page: RistorPage;

  beforeEach(() => {
    page = new RistorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sz!!');
  });
});
