import { AngularLessonPage } from './app.po';

describe('angular-lesson App', function() {
  let page: AngularLessonPage;

  beforeEach(() => {
    page = new AngularLessonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
