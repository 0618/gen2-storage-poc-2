import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  isDefault: true,
  name: 'amplifyTeamDrive',
//   access: (allow) => ({
//     'profile-pictures/{entity_id}/*': [
//       allow.guest.to(['read', 'write']),
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ],
//     'picture-submissions/*': [
//       allow.authenticated.to(['read','write']),
//       allow.guest.to(['read', 'write'])
//     ],
//   })
});

export const storageTwo = defineStorage({
  // isDefault: true,
  name: 'amplifyTeamDriveTwo',
//   access: (allow) => ({
//     'profile-pictures/{entity_id}/*': [
//       allow.guest.to(['read', 'write']),
//       allow.entity('identity').to(['read', 'write', 'delete'])
//     ],
//     'picture-submissions/*': [
//       allow.authenticated.to(['read','write']),
//       allow.guest.to(['read', 'write'])
//     ],
//   })
});