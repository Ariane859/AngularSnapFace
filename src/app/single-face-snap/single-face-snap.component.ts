import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  buttonText!:string;
  faceSnap!:FaceSnap;

  constructor(private faceSnapsService:FaceSnapsService,private route:ActivatedRoute){}

  ngOnInit(){
    this.buttonText='Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    //this.faceSnap = this.faceSnapsService.getFaceSnapById(3);
  }

  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceGetById(this.faceSnap.id)
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceGetByIdReduc(this.faceSnap.id)
      this.buttonText = 'Oh Snap!';
    }
  }
}
