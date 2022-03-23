import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagenotfoundComponent } from './bagenotfound/bagenotfound.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { DepatmentlistComponent } from './depatmentlist/depatmentlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OvervirewComponent } from './overvirew/overvirew.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
children:[
  {path:'overview',component:OvervirewComponent},
  {path:'contactinformation',component:ContactinformationComponent}
]       

const routes: Routes = [
  {path:'user',component:UsersComponent}, 
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Posts/:postid/Comments',component:CommentsComponent},
  {path:'post',component:PostsComponent},
  {path:'product',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:"**", component:BagenotfoundComponent},
  {path:'',redirectTo:'/depatrment',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
