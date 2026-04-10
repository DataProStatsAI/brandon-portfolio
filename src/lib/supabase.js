import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL  = 'https://mtmonxvkvjshrrftgkws.supabase.co'
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bW9ueHZrdmpzaHJyZnRna3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NzIwNzgsImV4cCI6MjA5MTM0ODA3OH0.sJYZ0w262sjKbeZ4yHtVh-43YiiBPXs-W4EB7902Smk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)
