export type DbProvider = "vercel_postgres" | "supabase";

type NullableClient<T> = T | null;

type SupabaseClient = {
  from: (table: string) => { select: (query: string) => Promise<unknown> };
};

export const getVercelPostgresClient = async () => {
  try {
    const { sql } = await import("@vercel/postgres");
    return sql;
  } catch (error) {
    console.error("Vercel Postgres client load failed", error);
    return null;
  }
};

export const getSupabaseClient = async (): Promise<NullableClient<SupabaseClient>> => {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase env vars are missing");
      return null;
    }

    const { createClient } = await import("@supabase/supabase-js");
    return createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error("Supabase client load failed", error);
    return null;
  }
};

export const getRegistrationList = async (provider: DbProvider) => {
  try {
    if (provider === "vercel_postgres") {
      const sql = await getVercelPostgresClient();
      if (!sql) {
        return [];
      }
      const result = await sql`select * from registrations limit 10`;
      return result.rows ?? [];
    }

    const supabase = await getSupabaseClient();
    if (!supabase) {
      return [];
    }
    const response = await supabase.from("registrations").select("*");
    return response ?? [];
  } catch (error) {
    console.error("Registration fetch failed", error);
    return [];
  }
};
