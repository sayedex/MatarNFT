import React from 'react'
import ConnectButton from '../connetbutton/ConnectButton';

type Props = {}

function Topheader({}: Props) {
  return (
    <div className=' items-end float-end py-8 pr-8 hidden xl:flex'><ConnectButton/></div>
  )
}

export default Topheader