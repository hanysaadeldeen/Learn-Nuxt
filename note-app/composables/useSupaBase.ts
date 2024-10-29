import { createClient } from "@supabase/supabase-js";

const useSupaBase = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseApiUrl;
  const supabaseKey = config.public.supabaseApiKey;

  const supabase = createClient(supabaseUrl, supabaseKey);
  return {
    supabase,
  };
};
export default useSupaBase;
