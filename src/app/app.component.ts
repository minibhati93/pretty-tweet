import { Component, ElementRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { toUnicodeVariant } from './unicodeVariant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  content: string = '';
  contentLength = 280;

  constructor(private clipboard: Clipboard,
    private el: ElementRef) {}

  copyText() {
    this.clipboard.copy(this.content);
  }

  format(variant: string, flag: string = '') {
    const word: string | null = this.getSelectedText();
    let formatWord;
    if (typeof word === "string") {
      formatWord = toUnicodeVariant(word, variant, flag);
      this.content = this.content.replace(word, formatWord);
    }
  }

  getSelectedText(): string | null {
    if (window.getSelection) {  // all browsers, except IE before version 9
      var range = window.getSelection();
      return range?.toString() || null;
    }
    return null;
  }

  updateWordCount() {
    this.contentLength = 280 - this.content.length;
    if (this.contentLength <= 0) {
      this.contentLength = 0;
    }
  }
}
