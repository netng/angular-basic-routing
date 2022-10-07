import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CategoriesComponent } from "./categories/categories.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },

  { 
    path: 'categories', 
    component: CategoriesComponent,
    canActivate: [AuthGuardService]
  },

  { 
    path: 'users', 
    component: UsersComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: ':id/:name', component: UserComponent },
      { path: ':id/:name/edit', component: EditUserComponent },
    ]
  },

  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}