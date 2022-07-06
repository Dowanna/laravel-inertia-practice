import React from 'react'
import useSWR from 'swr'

const fetcher = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())

export function TestSwr () {
  const { data, error } = useSWR('/api/user/123', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>{JSON.stringify(data)}</div>
}