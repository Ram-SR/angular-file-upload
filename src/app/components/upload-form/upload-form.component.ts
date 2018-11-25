import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CSV_REGEX } from '../../constants/fileTypePatterns'

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  @Output() fileUpload = new EventEmitter();
  fileData: any;
  fileName: string;
  fileTypeValid: boolean = true;

  constructor() {}

  ngOnInit() {}

  fileChange(uploadEvent) {
    this.fileTypeValid = true;
    const { files } = uploadEvent.target;
    if (files && files.length > 0) {
      const file: File = files.item(0);
      this.fileName = file.name;
      if (!CSV_REGEX.test(file.name)) {
        return false;
      }
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        this.fileData = reader.result;
      };
    }
  }

  uploadFormSubmit() {
    if (!CSV_REGEX.test(this.fileName)) {
      this.fileTypeValid = false;
      return false;
    }
    this.fileUpload.emit(this.fileData);
  }
}
