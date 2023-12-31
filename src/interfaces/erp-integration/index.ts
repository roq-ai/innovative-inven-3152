import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ErpIntegrationInterface {
  id?: string;
  settings?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ErpIntegrationGetQueryInterface extends GetQueryInterface {
  id?: string;
  settings?: string;
  organization_id?: string;
}
