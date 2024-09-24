import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  private destroy = inject(DestroyRef);

  // private interval?: ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const interval = setInterval(() => {
      const rnd = Math.random();
      // console.log(rnd)
      if (rnd < 0.5) {
        this.currentStatus = 'online'
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000);

    this.destroy.onDestroy(()=> {
      clearInterval(interval);
    })

  }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   clearInterval(this.interval);
  // }
}
