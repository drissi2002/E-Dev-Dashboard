import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*on veut rendre notre FakeSessionItemService disponible à
l’injection dans d’autres composants et services, il nous faut aussi
l’enregistrer dans le module AdminModule (dans propriété providers du
décorateur @NgModule   ; providers: [FakeSessionItemService] ). */
const adminRoutes: Routes = [
  {
  path: '',
  component: AdminComponent,
  children: [{ path: 'add', component: SessionAddFormComponent },
  { path: 'edit/:id', component:
  SessionEditFormComponent },
  { path: 'list', component: SessionItemListComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
  ],
  }
  ];

@NgModule({
  declarations: [
    AdminComponent,
    SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent
  ],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
