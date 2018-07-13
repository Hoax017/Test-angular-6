import { Routes } from '@angular/router';

// import { AboutComponent } from './about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
// import { UserComponent } from './user/user.component';
// import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
// import { RepoListComponent } from './github/repo-list/repo-list.component';
// import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
// import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];