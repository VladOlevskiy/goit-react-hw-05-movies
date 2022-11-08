import React from 'react';
import { Formik } from 'formik';
import { Label, Button, Form, Field } from './Searchbar-styled';
import PropTypes from 'prop-types';

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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
