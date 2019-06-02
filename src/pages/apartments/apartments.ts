import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';
import { Http } from '@angular/http';
import { AddApartmentPage } from '../add-apartment/add-apartment';
import { ApartmentPage } from '../apartment/apartment';
import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the ApartmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apartments',
  templateUrl: 'apartments.html',
})
export class ApartmentsPage {
  apartments=[];
  total:number;
  productsURL:string;
  baseURL:string;
  constructor(public app: App, public navCtrl: NavController,public global:GlobalProvider, public http:Http, public navParams: NavParams) {
  	
  }

  ionViewDidEnter() {
    this.initializeApartments();
    console.log('ionViewDidLoad ApartmentsPage');
  }

  filterApartments(ev: any) {
    this.http.get(this.baseURL)
      .subscribe(data => {
        console.log(data["_body"]);
        this.apartments=JSON.parse(data["_body"]);
        let val = ev.target.value;
        if (val && val.trim() !== '') {
          this.apartments = this.apartments.filter((apartment) => {
            return ((apartment.fldapartmentid.toLowerCase().indexOf(val.toLowerCase()) > -1));
          })
        }
      }, error => {
        console.log("failed");
      }
    );
  }

  initializeApartments() {
    this.baseURL=this.global.serverAddress+"api/apartments.php"+"?accno="+this.global.session.fldaccountno;;
    if(this.global.accessLevel=='LANDLORD'){
      this.baseURL=this.baseURL+"&landlord";
    }
    this.http.get(this.baseURL)
      .subscribe(data => {
        console.log(data);
        this.apartments=JSON.parse(data["_body"]);
      }, error => {
        console.log("failed");
      }
    );
  }

  pushApartment(apartment){
  	this.navCtrl.push(ApartmentPage, {'apartment':apartment});
  }

  showAddApartment(){
    this.app.getRootNav().setRoot(AddApartmentPage);
  }

}
