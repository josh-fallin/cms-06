import { Injectable, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  @Output() contactChangedEvent = new EventEmitter<Contact[]>();
  contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContact(id: string) 
  {
    for(let i = 0; i < this.contacts.length; i++) {
      if(this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
    return null;
  }

  getContacts() {
    return this.contacts.slice();
  }

  deleteContact(contact: Contact) {
    if (contact === null) { return; }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) { return; }

    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());

  }

}
