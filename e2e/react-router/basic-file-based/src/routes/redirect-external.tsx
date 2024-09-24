import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/redirect-external')({
  beforeLoad: () => {
    throw redirect({
      href: 'http://example.com',
    })
  },
})
