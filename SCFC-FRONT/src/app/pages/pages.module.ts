import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { FilesUploadComponent } from "../components/files-Upload/files-upload.component";


@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    FilesUploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ]
})

export class PageModule { }
