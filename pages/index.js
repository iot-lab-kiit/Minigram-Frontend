import React from 'react'
import {Sidebar} from '../components/Sidebar.js'
import {Messages} from '../components/Messages.js'

export default function index(){
  return (
    <div>
      <Messages/>
      <Sidebar/>
    </div>
  )
}