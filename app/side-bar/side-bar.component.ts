import { Component, HostBinding, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import $ from "jquery";
@Component({
  selector: './app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @HostBinding('class.is-open')
  isOpen = false;
  modalRef: BsModalRef;	
 constructor(private modalService: BsModalService) {} 
  toggle() {
    this.isOpen = !this.isOpen;
	console.log($(".btn-primary").click());
  }
  
  launched(){
  alert()}
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }  

}