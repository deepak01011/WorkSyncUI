import { Component } from '@angular/core';
import { InputFieldComponent } from './../../form/input/input-field.component';
import { ModalService } from '../../../services/modal.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-user-meta-card',
  imports: [
    CommonModule,
    ModalComponent,
    InputFieldComponent,
    ButtonComponent,
  ],
  templateUrl: './user-meta-card.component.html',
  styles: ``
})
export class UserMetaCardComponent {

  constructor(public modal: ModalService) {}

  isOpen = false;
  openModal() { this.isOpen = true; }
  closeModal() { this.isOpen = false; }

  // Example user data (could be made dynamic)
  user = {
    firstName: 'Admin',
    lastName: '',
    role: 'Team Manager',
    location: 'Arizona, United States',
    avatar: '/images/user/owner.jpg',
    social: {
      facebook: 'https://www.facebook.com/yopmailHQ',
      x: 'https://x.com/yopmailHQ',
      linkedin: 'https://www.linkedin.com/company/yopmail',
      instagram: 'https://instagram.com/yopmailHQ',
    },
    email: 'admin@yopmail.com',
    phone: '+09 363 398 46',
    bio: 'Team Manager',
  };

  handleSave() {
    // Handle save logic here
    console.log('Saving changes...');
    this.modal.closeModal();
  }
}
