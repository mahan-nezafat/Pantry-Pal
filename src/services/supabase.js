
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rwbgneniaaqougogdxar.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3YmduZW5pYWFxb3Vnb2dkeGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMDk1NzYsImV4cCI6MjAxMDg4NTU3Nn0.PXrYBDJo6SBZghr_kdXx1HaZKgwcSUA65Xod4Nky7-0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;