import { onAuthStateChanged, signInAnonymously, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '~/utils/firebase';

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  user?: string | null;
  loading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  user: null,
  loading: false,
});

// Hook to access user info.
export function useAuth() {
  const value = React.useContext(AuthContext);

  if (process.env.NODE_ENV === 'production') {
    if (!value) {
      throw new Error('useAuth must be wrapped in a <AuthProvider />');
    }
  }

  return value;
}

// Auth provider component
export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<string | null>('null');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user?.uid || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => signInAnonymously(auth),
        signOut: () => signOut(auth),
        user,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
