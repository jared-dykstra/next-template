import { expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { InOut } from '..'
import { describe } from 'node:test'

describe('InOut', () => {
  test('Should be "here" by default', () => {
    render(<InOut person="Foo" />)
    expect(screen.getByText('Foo is here')).toBeDefined()
  })

  test('Should toggle state', async () => {
    render(<InOut person="Foo" />)
    const button = screen.getByRole('button', { name: 'Toggle' })

    fireEvent.click(button)
    expect(await screen.findByText('Foo is away')).toBeDefined()
  })
})
