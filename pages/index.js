<<<<<<< HEAD
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
=======

import {Cards} from '../components/Cards';
import sidebar from '../components/sidebar.js';
import messages from '../components/messages.js';
export default function index()
{
  return(
    <div>
      <sidebar/>
      <Cards/>
      <messages/>
    </div>
  )
}

>>>>>>> fc4f3d2d3ab21a91c3efb69ca26bd97c14718f1e
