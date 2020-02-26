import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  @ViewChild ('wallContent') wall:ElementRef;
  @ViewChild ('areaContent') area:ElementRef;
  @ViewChild ('textArea') textArea: ElementRef;
  @ViewChild ('inputValue') inputValue: ElementRef;
  @ViewChild ('setImages') setImages: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  profileImg = './assets/img/profile.jpg';
  profileTest = './assets/img/flower2.jpg';
  profileName: string = 'Vasya Pupkin';
  focusForm: any = false;
  uploadImage = false;
  arrayArea: Array<{id: string, imgProfile: any, text: string, img: any}> = []
  inputText: any;
  valueImg = '';
  setImg = ''

  showButton() {
    this.focusForm = true;
  }
  hideButton() {
    this.focusForm = false;
  }
  expressionUploadImage() {
    this.uploadImage = true;
  }
  addToWall(){
    if(this.setImages.nativeElement.outerHTML.length == 33){
      this.profileTest = '';
    }else{
     this.profileTest = './assets/img/flower2.jpg';
    }
   this.arrayArea.push({id: this.profileName, imgProfile: this.profileImg, text: this.inputText, img: this.profileTest});
   this.focusForm = false;
   this.textArea.nativeElement.value = ' ';
   console.log(this.setImages.nativeElement.outerHTML.length);
  }

  takeImg(){

    this.setImages.nativeElement.innerHTML = this.inputValue.nativeElement.value.replace(/.*[\\\/]/, "");
    this.uploadImage = false;
    this.setImg = this.inputValue.nativeElement.value;

  }

}
