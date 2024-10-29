import type { User } from "@supabase/supabase-js";

const useAuth = () => {
  const { supabase } = useSupaBase();
  const router = useRouter();
  const user = useState<User | null>("user", () => null);

  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null;
  });

  const signUp = async ({
    email,
    password,
    ...metaData
  }: {
    email: string;
    password: string;
  }) => {
    const { data: u, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metaData,
        emailRedirectTo: `${window.location.origin}/notes`,
      },
    });

    if (error) throw error;

    return u;
  };

  const logIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data: u, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return u;
  };

  const logOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  };

  const isLoggedIn = () => {
    const loggedIn = !!user.value;
    return loggedIn;
  };

  return { user, signUp, logIn, logOut, isLoggedIn };
};
export default useAuth;
