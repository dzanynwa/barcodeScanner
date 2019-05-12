import { Component } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scannedData: {};
  barcode: string; 
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner) {

    this.barcode = "";
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  async scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData
      this.barcode = barcodeData.text
    }).catch(err => {
      console.log(err);
    });
  }
}
