import { List, ContactItem, Span, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <Span>
            {contact.name}: {contact.number}
            <DeleteBtn type="button" onClick={() => onClick(contact.id)}>
              Delete
            </DeleteBtn>
          </Span>
        </ContactItem>
      ))}
    </List>
  );
};
