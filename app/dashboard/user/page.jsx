"use client"
import React from 'react'
import withAuth from '@/utils/withAuth'

const Page = () => {
  return (
    <div>User Page</div>
  )
}

export default withAuth(Page, ['user']);