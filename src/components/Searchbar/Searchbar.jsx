import React from 'react';
import { Formik, Field } from 'formik';
import { Label, Button, Form } from './Searchbar-styled';

const initialValues = {
  searchQuery: '',
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field
          type="text"
          name="searchQuery"
          placeholder="Enter text for search some film"
        ></Field>
        <Button type="submit">
          <Label>Search</Label>
        </Button>
      </Form>
    </Formik>
  );
};

export default Searchbar;
