import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RightnvComponent } from './rightnv/rightnv.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ProductComponent } from './product/product.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferanceBindingComponent } from './template-referance-binding/template-referance-binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { MathematicsPipe } from './cosutom-pips/mathematics.pipe';
import { EmplistComponent } from './seveses/emplist/emplist.component';
import { EmpdetailsComponent } from './seveses/empdetails/empdetails.component';
import { DepatmentlistComponent } from './depatmentlist/depatmentlist.component';
import { BagenotfoundComponent } from './bagenotfound/bagenotfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { OvervirewComponent } from './overvirew/overvirew.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { UsersComponent } from './users/users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MaincontentComponent,
    LeftnavComponent,
    RightnvComponent,
    DatabindingComponent,
    ProductComponent,
    EventBindingComponent,
    TemplateReferanceBindingComponent,
    TwowaybindingComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    MathematicsPipe,
    EmplistComponent,
    EmpdetailsComponent,
    DepatmentlistComponent,
    BagenotfoundComponent,
    OvervirewComponent,
    ContactinformationComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EmployeelistComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 