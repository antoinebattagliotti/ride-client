import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://qtngsjuumutcxxcxhtor.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0bmdzanV1bXV0Y3h4Y3hodG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4OTIzNDIsImV4cCI6MjAyNDQ2ODM0Mn0.QLdzvuPJxezZ-tO8SkSwpRbA_O1YtP9PaFjqJ0iPMJg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
