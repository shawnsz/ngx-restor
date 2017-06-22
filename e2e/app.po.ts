import { browser, by, element } from 'protractor';

export class RistorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sz-root h1')).getText();
  }
}
