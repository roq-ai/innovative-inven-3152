const mapping: Record<string, string> = {
  customers: 'customer',
  'erp-integrations': 'erp_integration',
  'financial-details': 'financial_detail',
  inventories: 'inventory',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
