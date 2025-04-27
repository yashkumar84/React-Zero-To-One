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
import { toast } from "sonner";

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
        toast.success("Logged in SuccessFully");
      } catch (error) {
        console.error("Google Login error: ", error);
        toast.error("Google Login Error");
      }
    },

    loginWithEmail: async (email: string, password: string) => {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        set({ user: result.user });
        toast.success("Logged in SuccessFully");
      } catch (error) {
        toast.error("Email Login Error");
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
        toast.success("Registered SuccessFully");
      } catch (error) {
        toast.error("Register Error");
        console.error("Register Error : ", error);
      }
    },

    logout: async () => {
      try {
        await signOut(auth);
        set({ user: null });
        toast.success("Logged Out SuccessFully");
      } catch (error) {
        toast.error("Error While Logout");
        console.error("Logout Error : ", error);
      }
    },
  };
});
