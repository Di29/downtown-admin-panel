import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoggedInAuthGuard } from './_guards/logged-in-auth.guard';
import { BlockComponent } from './block/block.component';
import { BlockUpsertComponent } from './block/block-upsert/block-upsert.component';
import { ServiceComponent } from './service/service.component';
import { ServiceUpsertComponent } from './service/service-upsert/service-upsert.component';
import { CallComponent } from './call/call.component';
import { CallUpsertComponent } from './call/call-upsert/call-upsert.component';
import { ReportComponent } from './report/report.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SubserviceComponent } from './subservice/subservice.component';
import { SubserviceUpsertComponent } from './subservice/subservice-upsert/subservice-upsert.component'; 
import { ServiceChatComponent } from './service-chat/service-chat.component';
import { ServiceChatUpsertComponent } from './service-chat/service-chat-upsert/service-chat-upsert.component';
import { TextComponent } from './text/text.component';
import { TextUpsertComponent } from './text/text-upsert/text-upsert.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'blocks', component: BlockComponent },
      { path: 'block/block-upsert', component: BlockUpsertComponent },
      { path: 'block/block-upsert/:id', component: BlockUpsertComponent },
      { path: 'services', component: ServiceComponent},
      { path: 'service/service-upsert', component: ServiceUpsertComponent},
      { path: 'service/service-upsert/:id', component: ServiceUpsertComponent},
      { path: 'calls', component: CallComponent },
      { path: 'call/call-upsert', component: CallUpsertComponent},
      { path: 'call/call-upsert/:id', component: CallUpsertComponent},
      { path: 'reports', component: ReportComponent},
      { path: 'suggestions', component: SuggestionComponent},
      { path: 'subservices', component: SubserviceComponent},
      { path: 'subservice/sub-upsert', component: SubserviceUpsertComponent},
      { path: 'subservice/sub-upsert/:id', component: SubserviceUpsertComponent},
      { path: 'chats', component: ServiceChatComponent},
      { path: 'chat/chat-upsert', component: ServiceChatUpsertComponent},
      { path: 'chat/chat-upsert/:id', component: ServiceChatUpsertComponent},
      { path: 'texts', component: TextComponent},
      { path: 'text/text-upsert', component: TextUpsertComponent},
      { path: 'text/text-upsert/:id', component: TextUpsertComponent}
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
