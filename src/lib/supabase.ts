import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fail gracefully if keys are missing (common in local dev or initial setup)
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * DATABASE SCHEMA RECOMMENDATION:
 *
 * Table: leads
 * Columns:
 * - id: uuid (primary key, default: gen_random_uuid())
 * - created_at: timestamptz (default: now())
 * - type: text (applicant | patron)
 * - name: text
 * - email: text
 * - details: jsonb (to store flexible form data like compute needs or investment capacity)
 * - status: text (default: 'new')
 */
