import { Routes, RouterModule } from '@angular/router';
import {LyricComponent} from './lyric/lyric.component';
import {ShowLComponent} from './show-l/show-l.component';




const appRoutes: Routes = [
  { path: '', component: LyricComponent },
  { path: 'Home', component: LyricComponent },
  { path: 'Show', component: ShowLComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
