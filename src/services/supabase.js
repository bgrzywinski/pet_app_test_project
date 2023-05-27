
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supabase = createClient('https://afqoerzhcvrgareijlce.supabase.co', import.meta.env.VITE_TEST_PROJECT_KEY)

export default supabase;
