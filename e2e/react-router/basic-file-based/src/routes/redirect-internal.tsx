import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/redirect-internal')({
  beforeLoad: async () => {
    throw redirect({
      to: '/posts',
    })
  },
})
