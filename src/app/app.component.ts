import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZT-3.2-Project';

  selectedSidebar = '';

  sidebarItemClick(sidebarTitle:any){
   console.log(sidebarTitle);  
   this.selectedSidebar = sidebarTitle;
  }
}
