interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Guest User', 'Administrator', 'Room Manager'],
  tenantName: 'COLAB',
  applicationName: 'SCHEDULE',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage room reservations and activities',
    'Manage collaboration projects',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5c068e4d-8c5a-42aa-a844-b5f4feaba7c2',
};
