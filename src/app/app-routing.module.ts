import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteParameterResolver } from 'sql-components';
import { ForcedLogoutComponent } from './auth/forced-logout/forced-logout.component';
import { InvalidTokenComponent } from './auth/invalid-token/invalid-token.component';
import { NewSigninComponent } from './auth/new-signin/new-signin.component';
import { UserEnrollComponent } from './auth/user-enroll/user-enroll.component';
import { UserLogoutComponent } from './auth/user-logout/user-logout.component';
import { DataResolver, MenuResolver, PingResolver, UserResolver } from './data.resolver';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { DocWorkspaceListComponent } from './features/doc-workspace-list/doc-workspace-list.component';
import { DocWorkspaceTableComponent } from './features/doc-workspace-table/doc-workspace-table.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { AdminHomeComponent } from './features/admin-home/admin-home.component';
import { OrgDashboardComponent } from './admin/org-dashboard/org-dashboard.component';
import { SettingsComponent } from './auth/settings/settings.component';
import { VerifyDocComponent } from './features/verify-doc/verify-doc.component';
import { MyTeamListComponent } from './features/team/my-team-list/my-team-list.component';

const routes: Routes = [
  { path: '', component: NewSigninComponent },
  { path: 'workspace-table', component: DocWorkspaceTableComponent },
  { path: 'workspaces', component: DocWorkspaceListComponent },
  { path: 'settings', component: SettingsComponent, resolve: { data: DataResolver }},
  { path: 'verify', component: VerifyDocComponent, resolve: { data: DataResolver }},
  { path: 'org-dashboard/:id', component: OrgDashboardComponent, resolve: { data: DataResolver }  },
  { path: 'team', component: MyTeamListComponent, resolve: { data: DataResolver }  },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'test/:id', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },
  { path: 'test/:id/:id2', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },
  { path: 'test/:id/:id2/:id3', component: TestPageComponent, resolve: { parameters: RouteParameterResolver } },    
  { path: 'sadmin', component: AdminDashboardComponent, resolve: { data: DataResolver, userdata: UserResolver, menudata: MenuResolver }, },
  { path: 'enroll/:id', component: UserEnrollComponent , resolve: { data: DataResolver }, },
  { path: 'e/:id', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'e', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'forced-off/:id', component: ForcedLogoutComponent },
  { path: 'forced-off', component: ForcedLogoutComponent },
  { path: 'sign-in', component: NewSigninComponent },
  { path: 'error', component: InvalidTokenComponent },
  { path: 'enroll', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'user-logout', component: UserLogoutComponent },
  { path: 'enroll/:id', component: UserEnrollComponent },
  { path: 'enroll', component: UserEnrollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
