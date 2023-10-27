import { Route, Routes } from '@angular/router';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { SessionStorageComponent } from './session-storage/session-storage.component';

const routes: Routes = [
  { path: 'local-storage', component: LocalStorageComponent },
  { path: 'session-storage', component: SessionStorageComponent },
  { path: '', redirectTo: '/local-storage', pathMatch: 'full' },
];
