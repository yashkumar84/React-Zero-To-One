import { create } from "zustand";
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";

interface AuthState {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  // setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  onAuthStateChanged(auth, (user) => {
    set({ user, loading: false });
  });

  return {
    user: null,
    loading: true,
    loginWithGoogle: async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        set({ user: result.user });
      } catch (error) {
        console.error("Google Login error: ", error);
      }
    },

    loginWithEmail: async (email: string, password: string) => {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        set({ user: result.user });
      } catch (error) {
        console.error("Error in the Email Login : ", error);
      }
    },

    registerWithEmail: async (email: string, password: string) => {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        set({ user: result.user });
      } catch (error) {
        console.error("Register Error : ", error);
      }
    },

    logout: async () => {
      try {
        await signOut(auth);
        set({ user: null });
      } catch (error) {
        console.error("Logout Error : ", error);
      }
    },
  };
});
