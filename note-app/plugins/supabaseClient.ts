import { createClient } from "@supabase/supabase-js";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseApiUrl;
  const supabaseKey = config.public.supabaseApiKey;
  const supabase = createClient(supabaseUrl, supabaseKey);

  return {
    provide: {
      supabase,
    },
  };
});
