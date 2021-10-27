import * as React from 'react';

import Selector from '@/pages/Selector/Sandbox';
export default function index(props) {

  function onItemClickHandle (data) {
    console.log('data1111 = ', data)
  }
  
  return <Selector  onItemClickHandle={onItemClickHandle} />
}
