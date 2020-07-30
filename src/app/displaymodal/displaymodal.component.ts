import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-displaymodal',
  templateUrl: './displaymodal.component.html',
  styleUrls: ['./displaymodal.component.css']
})
export class DisplaymodalComponent implements OnInit,OnDestroy {

  constructor(public modal: ModalService) { }
  ngOnInit() {

    document.getElementById("message").innerHTML=`${this.modal.getmessage()}`
  }
  ngOnDestroy()
  {
    this.modal.write('','');
    
  }

  copylink(){
    var copytext = document.getElementById("message");
    document.addEventListener('copy',(e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.modal.getmessage() );
      e.preventDefault();
      
    });
    
    
    document.execCommand('copy');
  }

}
