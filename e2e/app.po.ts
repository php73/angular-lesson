import { browser, element, by } from 'protractor';

export class AngularLessonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-lesson-one-view h1')).getText();
  }
}
