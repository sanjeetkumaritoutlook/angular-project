import { opportunityData } from './opportunity.data';

export const basicTableConfig = {
  headers: [
    { dataPath: 'accountId', label: 'Account ID', visible: false },
    { dataPath: 'opportunityName', label: 'Opportunity Name' },
    { dataPath: 'clientCountry', label: 'Country' },
    { dataPath: 'contactName', label: 'Contact Name' },
    { dataPath: 'phase', label: 'Phase' },
  ],
  dataItems: Array.from({ length: 20 }).reduce((allItems: any[], _) => {
    return [...allItems, ...opportunityData];
  }, []),
  tableId: 'basic-table',
  allowOverflow: true,
};
