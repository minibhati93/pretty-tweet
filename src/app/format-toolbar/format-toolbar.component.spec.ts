import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatToolbarComponent } from './format-toolbar.component';

describe('FormatToolbarComponent', () => {
  let component: FormatToolbarComponent;
  let fixture: ComponentFixture<FormatToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
