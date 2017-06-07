import { JoeffisonappPage } from './app.po';

describe('joeffisonapp App', () => {
  let page: JoeffisonappPage;

  beforeEach(() => {
    page = new JoeffisonappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
