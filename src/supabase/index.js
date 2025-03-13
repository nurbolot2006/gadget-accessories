
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fadmzndhzetwfwcecrbi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZG16bmRoemV0d2Z3Y2VjcmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTYxNzYsImV4cCI6MjA1NzE3MjE3Nn0.Ugjf8Id5rpzLKfuoK0HKksIYQplRHQKD1jNpIZF--qQ"

export const supabase = createClient(supabaseUrl, supabaseKey)