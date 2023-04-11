
import React from 'react'
import {Cards} from '../components/Cards';
import {Sidebar} from '../components/Sidebar.js'
import {Messages} from '../components/Messages.js'

export default function index(){
  return (
    <div>
      <Sidebar/>
      <Cards/>
      <Messages/>
    </div>
  )
}

