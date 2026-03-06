import 'server-only'
import { createClient } from '@supabase/supabase-js'

// Admin client uses service_role key — bypasses RLS for creating users
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
