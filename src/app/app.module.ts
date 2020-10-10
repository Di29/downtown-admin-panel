import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { BlockComponent } from './block/block.component';
import { BlockUpsertComponent } from './block/block-upsert/block-upsert.component';
import { CallComponent } from './call/call.component';
import { CallUpsertComponent } from './call/call-upsert/call-upsert.component';
import { ReportComponent } from './report/report.component';
import { ServiceComponent } from './service/service.component';
import { ServiceUpsertComponent } from './service/service-upsert/service-upsert.component';
import { ServiceChatComponent } from './service-chat/service-chat.component';
import { ServiceChatUpsertComponent } from './service-chat/service-chat-upsert/service-chat-upsert.component';
import { SubserviceComponent } from './subservice/subservice.component';
import { SubserviceUpsertComponent } from './subservice/subservice-upsert/subservice-upsert.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SuggestionUpsertComponent } from './suggestion/suggestion-upsert/suggestion-upsert.component';
import { TextComponent } from './text/text.component';
import { TextUpsertComponent } from './text/text-upsert/text-upsert.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockComponent,
    BlockUpsertComponent,
    CallComponent,
    CallUpsertComponent,
    ReportComponent,
    ServiceComponent,
    ServiceUpsertComponent,
    ServiceChatComponent,
    ServiceChatUpsertComponent,
    SubserviceComponent,
    SubserviceUpsertComponent,
    SuggestionComponent,
    SuggestionUpsertComponent,
    TextComponent,
    TextUpsertComponent,
    NavMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['https://downtown-bot-api.herokuapp.com/'],
        disallowedRoutes:['https://downtown-bot-api.herokuapp.com/auth]
      },
    }),
    //NgbModule,
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
