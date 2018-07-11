import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getContacts();
  }

  ngOnInit() {
    this.contactsService.contactChangedEvent
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  }

}
