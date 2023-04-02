import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdmianchklkpoglbndsd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkbWlhbmNoa2xrcG9nbGJuZHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NTc1NTgsImV4cCI6MTk5MzAzMzU1OH0.aAB5aDV4d3_JUCPlSYYSEi2YqW7Ei6ASLNblQFF5v7U';

export const supabase = createClient(supabaseUrl, supabaseKey);
