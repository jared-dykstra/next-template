import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../page'
import { describe } from 'node:test'

describe('Page', () => {
  test('Should show docs heading', () => {
    render(<Page />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Docs' })
    ).toBeDefined()
  })
})
