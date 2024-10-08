import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then(([photoResult, userResult]) => {
      // Assuming photoResult has a body property
      console.log(`${photoResult.body || 'No Photo'} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
