import { TextField } from '@components/form';
import { Form, Formik } from 'formik';
import { ReactElement } from 'react';

import styles from './global-search.module.css';

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
    <div className={styles.globalSearch}>
      <Formik<IGlobalSearchModel> initialValues={INITIAL_VALUE} onSubmit={handleSubmit}>
        <Form>
          <TextField name="search" label="Поиск по сайту" placeholder="Поиск" hiddenLabel />
        </Form>
      </Formik>
    </div>
  );
};
