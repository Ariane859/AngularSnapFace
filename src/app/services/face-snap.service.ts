import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService {
    faceSnaps:FaceSnap[]=[
        {
            id:1,
          title:'Archibald',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 50,
          location:'Atlanta'
        },
        { 
            id:2,
          title:'Ariane',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl:'https://picsum.photos/seed/picsum/500/300',
          createdDate: new Date(),
          snaps: 100,
          location:'My new location'
        },
        { 
            id:3,
          title:'Océane',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://picsum.photos/500/300?grayscale',
          createdDate: new Date(),
          snaps: 150
        },
        { 
            id:4,
          title:'Océane',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://picsum.photos/500/300?grayscale',
          createdDate: new Date(),
          snaps: 200
        },
        { 
            id:5,
          title:'Océane',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://picsum.photos/500/300?grayscale',
          createdDate: new Date(),
          snaps: 250
        }
    ];

    getAllFaceSnaps():FaceSnap[] {
        return this.faceSnaps;
    }

    snapFaceGetById(FaceSnapId:number):void {
        const faceSnap=this.faceSnaps.find(faceSnap=>faceSnap.id === FaceSnapId)
        if (faceSnap) {
            faceSnap.snaps++;
        } else {
            throw new Error('Not normal');
        }
    }

    snapFaceGetByIdReduc(FaceSnapId:number):void {
        const faceSnap=this.faceSnaps.find(faceSnap=>faceSnap.id === FaceSnapId)
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('Not normal');
        }
    }

    getFaceSnapById(FaceSnapId:number) {
        const faceSnap=this.faceSnaps.find(faceSnap=>faceSnap.id === FaceSnapId)
        if (faceSnap) {
            return faceSnap.id;
        } else {
            throw new Error('Not normal');
        }
    }
}