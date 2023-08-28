import { Component,OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // buttonText!:string;
  @Input() faceSnap!:FaceSnap;

  constructor(private faceSnapsService:FaceSnapsService,private route:Router){}

  ngOnInit(){
    // this.buttonText='Oh Snap!';
  }

  // onAddSnap() {
  //   if (this.buttonText === 'Oh Snap!') {
  //     this.faceSnapsService.snapFaceGetById(this.faceSnap.id)
  //     this.buttonText = 'Oops, unSnap!';
  //   } else {
  //     this.faceSnapsService.snapFaceGetByIdReduc(this.faceSnap.id)
  //     this.buttonText = 'Oh Snap!';
  //   }
  // }

  onView()
  {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
