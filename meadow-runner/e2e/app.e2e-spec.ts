import { MeadowRunnerPage } from './app.po';

describe('meadow-runner App', () => {
  let page: MeadowRunnerPage;

  beforeEach(() => {
    page = new MeadowRunnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
