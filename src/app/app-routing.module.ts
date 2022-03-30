import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { UservalidComponent } from './uservalid/uservalid.component';

const routes: Routes = [
  { path: 'uservalid',component: UservalidComponent},
  { path :'note', component: NoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
