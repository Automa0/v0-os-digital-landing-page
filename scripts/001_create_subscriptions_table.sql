-- Create subscriptions table
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stripe_subscription_id text not null unique,
  stripe_customer_id text not null,
  plan_name text not null,
  billing_interval text not null, -- 'month' or 'year'
  current_period_start timestamp with time zone not null,
  current_period_end timestamp with time zone not null,
  status text not null, -- 'active', 'past_due', 'canceled', 'unpaid'
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.subscriptions enable row level security;

-- Policies
create policy "subscriptions_select_own" on public.subscriptions 
  for select using (auth.uid() = user_id);

create policy "subscriptions_insert_own" on public.subscriptions 
  for insert with check (auth.uid() = user_id);

create policy "subscriptions_update_own" on public.subscriptions 
  for update using (auth.uid() = user_id);

-- Index for faster lookups
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_subscriptions_stripe_customer_id on public.subscriptions(stripe_customer_id);
create index if not exists idx_subscriptions_stripe_subscription_id on public.subscriptions(stripe_subscription_id);
