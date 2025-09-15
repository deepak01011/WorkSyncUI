import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ButtonsComponent } from '../../ui-elements/buttons/buttons.component';
import { ButtonComponent } from "../../../shared/components/ui/button/button.component";

@Component({
  selector: 'app-upload-resume',
  imports: [
    CommonModule,
    PageBreadcrumbComponent,
    ButtonComponent
],
  templateUrl: './upload-resume.component.html',
  styleUrl: './upload-resume.component.css'
})
export class UploadResumeComponent {
  selectedFiles: File[] = [];
  isUploading = false;
  uploadProgress = 0;
  boxIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" /></svg>';

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const filesArray = Array.from(input.files);
      // Limit to 100 files
      this.selectedFiles = filesArray.slice(0, 100);
    }
  }

  uploadFiles(): void {
    if (!this.selectedFiles.length) return;
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate upload progress
    const total = 100;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      this.uploadProgress = progress;
      if (progress >= total) {
        clearInterval(interval);
        //this.isUploading = false;
        //this.selectedFiles = [];
      }
    }, 200);
  }


  
  isDragActive = false;

   //filesDropped:File[] = new EventEmitter<File[]>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      //this.filesDropped.emit(Array.from(input.files));
      this.selectedFiles = Array.from(input.files);//.slice(0, 100);
      console.log('Files dropped:', Array.from(input.files));
    }
  }

  //@HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragActive = true;
  }

  //@HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragActive = false;
  }

  //@HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragActive = false;
    if (event.dataTransfer && event.dataTransfer.files.length) {
      const files = Array.from(event.dataTransfer.files).filter(file =>
        ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'].includes(file.type)
      );
      //this.filesDropped.emit(files);
      this.selectedFiles = files;//.slice(0, 100);
      console.log('Files dropped:', files);
    }
  }
}
