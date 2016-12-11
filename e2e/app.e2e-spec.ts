import { Ng2MagiccPage } from './app.po';

describe('ng2-magicc App', function() {
  let page: Ng2MagiccPage;

  beforeEach(() => {
    page = new Ng2MagiccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
