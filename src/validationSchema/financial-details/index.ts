import * as yup from 'yup';

export const financialDetailValidationSchema = yup.object().shape({
  cost: yup.number().integer(),
  price: yup.number().integer(),
  inventory_id: yup.string().nullable(),
});
