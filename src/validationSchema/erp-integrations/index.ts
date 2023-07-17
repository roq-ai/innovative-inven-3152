import * as yup from 'yup';

export const erpIntegrationValidationSchema = yup.object().shape({
  settings: yup.string(),
  organization_id: yup.string().nullable(),
});
