import React from 'react'
import { User } from '../models'

export function UserCard({ user }: { user: User }) {

  return (
    <div className="border rounded-md border-gray-500 bg-gray-800 p-4 my-4 w-full">
      <h3>{user.getName()}</h3>
      <img src={user.getAvatarUrl()} alt="avatar" width="75" height="75" className="mt-2" />
    </div>
  )
}