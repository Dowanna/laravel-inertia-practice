import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import useSWR from 'swr'

// memo: inertia requestを作成するには特殊ヘッダーをつける必要がある
// versionはビルドごとに固有なのでusepageで取得して付与する必要がある
const fetcher = (version: string) => () => fetch('http://localhost:8000/Users/Profile', { headers: { 'X-Inertia': 'true', 'X-Inertia-Version': version } }).then(res => res.json())

export function TestSwr({ user }: { user: number }) {
  const { version } = usePage()
  const { data, error } = useSWR('/api/user/123', fetcher(version ?? 'no-version'))

  if (error) return <div>failed to load: {JSON.stringify(error)}</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>{`userID: ${(data.props.user)}`}</div>
}