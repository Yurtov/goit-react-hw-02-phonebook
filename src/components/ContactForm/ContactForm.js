import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required')
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = ({ onAddContact }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={schema}
    onSubmit={(values, actions) => {
      onAddContact({
        id: nanoid(),
        ...values,
      });
      actions.resetForm();
    }}
  >
    <Form>
      <label>
        Name
        <Field name="name" />
        <ErrorMessage name="name" />
      </label>

      <label>
        Number
        <Field name="number" />
        <ErrorMessage name="number" />
      </label>

      <button type="submit">Add contact</button>
    </Form>
  </Formik>
);
