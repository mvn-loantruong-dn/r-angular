import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './content/detail/detail.component';
import { Directive } from './directive/index';
import { Pipe } from './pipe/index';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-list/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberComponent } from './member-services/member.component';
import { MembersService } from './services/member.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    DetailComponent,
    Directive,
    Pipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
