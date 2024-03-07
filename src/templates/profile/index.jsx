'use server';

import { getSession } from '@auth0/nextjs-auth0';

const ProfileTemplate = async () => {
  const session = await getSession();
  const user = session?.user;

  return user ? (
    <div>
      {user.picture && <img src={user.picture} alt={user.name} />}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <span>"Por favor. Faça login para acessar dados"</span>
  );
};

export default ProfileTemplate;
