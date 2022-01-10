import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { toUnicodeVariant } from './unicodeVariant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  content: string = '';
  result: string = '';

  constructor(private clipboard: Clipboard) {}

  copyText() {
    this.clipboard.copy(this.content);
  }

  format(variant: string) {
    const word: string | null = this.getSelectedText();
    let formatWord;
    if (typeof word === "string") {
      formatWord = toUnicodeVariant(word, variant, '');
      this.content = this.content.replace(word, formatWord);
    }
  }

  boldWord(): void {
    const word: string | null = this.getSelectedText();
    let boldWord;
    if (typeof word === "string") {
      boldWord = toUnicodeVariant(word, 'bold', '');
      this.content = this.content.replace(word, boldWord);
    }
  }

  italicWord() {
    const word: string | null = this.getSelectedText();
    let italicWord;
    if (typeof word === "string") {
      italicWord = toUnicodeVariant(word, 'italic', '');
      this.content = this.content.replace(word, italicWord);
    }
  }

  getSelectedText(): string | null {
    if (window.getSelection) {  // all browsers, except IE before version 9
      var range = window.getSelection();
      return range?.toString() || null;
    }
    return null;
  }
}
