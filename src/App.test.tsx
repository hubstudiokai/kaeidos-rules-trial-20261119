import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App.tsx'

afterEach(cleanup)

describe('App', () => {
  it('says the application is ready', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Votre application est prête',
    )
  })

  it('counts each click', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('button').textContent).toBe('Compteur : 2')
  })
})
