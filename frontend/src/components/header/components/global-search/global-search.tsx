import { TextField } from '@components/form';
import { Form, Formik } from 'formik';
import { ReactElement } from 'react';

import { SearchContainer } from './styles';

interface IGlobalSearchModel {
  search: string;
}

const INITIAL_VALUE: IGlobalSearchModel = {
  search: ''
};

export const GlobalSearch = (): ReactElement => {
  const handleSubmit = (data: IGlobalSearchModel): void => {
    console.log(data);
  };

  return (
    <SearchContainer>
      <Formik<IGlobalSearchModel> initialValues={INITIAL_VALUE} onSubmit={handleSubmit}>
        <Form>
          <TextField name="search" label="Поиск по сайту" placeholder="Поиск" hiddenLabel />
        </Form>
      </Formik>
    </SearchContainer>
  );
};
