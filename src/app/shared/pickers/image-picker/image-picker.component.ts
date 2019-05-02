import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType} from '@capacitor/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  selectedImage: string;
  selectedImageWebPath: string;
  @Output() imagePick = new EventEmitter<string>();
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  onPickImage() {
    console.log('on pick image');
    Plugins.Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Base64
    }).then(image => {
      this.selectedImage = image.base64String;
      this.selectedImageWebPath = image.webPath;
      this.imagePick.emit(image.base64String);
    }).catch(error => console.log(error));
  }

}
