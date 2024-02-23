import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  //  Moadls for the setting component
  addBookOpen(){
    const addDiv = document.getElementById('addBookModal');
    if (addDiv != null) {
      addDiv.style.display = 'block';
    }
    console.log('Book Add Modal Opened');
  }

  addBookClose(){
    const addDiv = document.getElementById('addBookModal');
    if (addDiv != null) {
      addDiv.style.display = 'none';
    }
    console.log('book Add Modal Closed');
  }
  //  Moadls for the setting component

}
