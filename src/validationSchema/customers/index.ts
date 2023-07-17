import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  organization_id: yup.string().nullable(),
});
