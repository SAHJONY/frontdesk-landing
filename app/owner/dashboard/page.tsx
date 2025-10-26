import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function OwnerDashboard() {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    redirect('/login')
  }

  // Get user's organizations
  const { data: orgs } = await supabase
    .from('orgs')
    .select(`
      *,
      org_members!inner(role)
    `)
    .eq('org_members.user_id', user.id)

  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      background: '#f5f5f5'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h1 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>
            Owner Dashboard
          </h1>
          <p style={{opacity: 0.6}}>
            Welcome back, {user.email}
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>
            Your Organizations
          </h2>
          
          {orgs && orgs.length > 0 ? (
            <div style={{display: 'grid', gap: '1rem'}}>
              {orgs.map((org: any) => (
                <div
                  key={org.id}
                  style={{
                    padding: '1.5rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <h3 style={{fontSize: '1.25rem', marginBottom: '0.25rem'}}>
                      {org.name}
                    </h3>
                    <p style={{opacity: 0.6, fontSize: '0.875rem'}}>
                      Role: {org.org_members[0]?.role || 'member'}
                    </p>
                  </div>
                  <a
                    href={`/owner/org/${org.slug}`}
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#667eea',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}
                  >
                    Manage
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              opacity: 0.6
            }}>
              <p>You don't have any organizations yet.</p>
              <a
                href="/owner/new-org"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.75rem 1.5rem',
                  background: '#667eea',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 600
                }}
              >
                Create Organization
              </a>
            </div>
          )}
        </div>

        <div style={{marginTop: '2rem', textAlign: 'center'}}>
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                background: '#666',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

