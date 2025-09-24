import { useAuth } from 'hook/useAuth';

import { Button } from '@components/Buttons';

export function AuthButtons() {
  const { isSignedIn, signIn, signOut } = useAuth();

  return (
    <div>
      {!isSignedIn ? (
        <Button onClick={signIn}>Sign In</Button>
      ) : (
        <Button onClick={signOut}>Sign Out</Button>
      )}
    </div>
  );
}
