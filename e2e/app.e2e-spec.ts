import { MarushaPage } from './app.po';

describe('marusha App', function() {
  let page: MarushaPage;

  beforeEach(() => {
    page = new MarushaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
