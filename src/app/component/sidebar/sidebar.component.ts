import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  toggleSidebar () {
    document.getElementById("sidebar-burger-w-500px")?.classList?.toggle("open")
    document.getElementById("sidebar-background-w-500px")?.classList?.toggle("open")
    document.getElementById("sidebar-sidebar-w-500px")?.classList?.toggle("open")
  }

  ngOnInit(): void {
  }

}
