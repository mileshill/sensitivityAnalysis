import { SensitivityAnalysisPage } from './app.po';

describe('sensitivity-analysis App', () => {
  let page: SensitivityAnalysisPage;

  beforeEach(() => {
    page = new SensitivityAnalysisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
