'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/owner/dashboard')
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {error && (
        <div style={{
          padding: '0.75rem',
          background: '#fee',
          border: '1px solid #fcc',
          borderRadius: '0.5rem',
          color: '#c33',
          fontSize: '0.875rem'
        }}>
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500}}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '0.5rem',
            fontSize: '1rem'
          }}
        />
      </div>

      <div>
        <label htmlFor="password" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500}}>
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '0.5rem',
            fontSize: '1rem'
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '0.75rem',
          background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '0.5rem'
        }}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <p style={{textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem'}}>
        Don't have an account?{' '}
        <a href="/signup" style={{color: '#667eea', textDecoration: 'none', fontWeight: 600}}>
          Sign up
        </a>
      </p>
    </form>
  )
}

