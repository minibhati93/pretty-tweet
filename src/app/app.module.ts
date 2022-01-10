import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatToolbarComponent } from './format-toolbar/format-toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SwitchModeComponent } from './switch-mode/switch-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatToolbarComponent,
    FooterComponent,
    SwitchModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
