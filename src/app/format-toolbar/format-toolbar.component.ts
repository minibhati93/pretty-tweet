import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-format-toolbar',
  templateUrl: './format-toolbar.component.html',
  styleUrls: ['./format-toolbar.component.scss']
})
export class FormatToolbarComponent implements OnInit {

  @Output() format = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitFormat(format: string) {
    this.format.emit(format);
  }
}
