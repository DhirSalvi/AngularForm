import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ContentComponent } from './content/content.component';
import { MessagesModule } from 'primeng/messages';
import { Message, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SplitterModule } from 'primeng/splitter';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    FloatLabelModule,
    BrowserAnimationsModule,
    MatInputModule,
    InputIconModule,
    IconFieldModule,
    MessagesModule,
    ToastModule,
    SplitterModule,
    InputGroupModule,
    ButtonModule,
    InputGroupAddonModule,
    ToolbarModule,
    AvatarModule,
    SidebarModule,
  ],
  providers: [
    provideAnimationsAsync(),
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
