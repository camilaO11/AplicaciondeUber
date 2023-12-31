import { Component, OnInit,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
/////////////////////////////////////////////
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {
  @ViewChild('rutafacil') rutafacil!: ElementRef;

  constructor(
      private router: Router,private aniCtrl: AnimationController
    ) { }

  ngAfterViewInit(): void {
    const ani = this.aniCtrl.create()
    .addElement(this.rutafacil.nativeElement)
    .duration(1250)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(-125px)', 'translateX(125px)')
    .fromTo('opacity', '1', '0.2');
    ani.play();
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },4000);
  }

   
   



}
