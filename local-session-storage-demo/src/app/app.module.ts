import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { SessionStorageComponent } from './session-storage/session-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalStorageComponent,
    SessionStorageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'local-storage', component: LocalStorageComponent },
      { path: 'session-storage', component: SessionStorageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
