import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarToggleComponent } from './side-bar-toggle/side-bar-toggle.component';
//import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot()],
  declarations: [ AppComponent, SideBarComponent, SideBarToggleComponent ],
  bootstrap:    [ AppComponent ],
  //providers: 	[ BsModalService, BsModalRef, ComponentLoaderFactory]
})
export class AppModule { }
