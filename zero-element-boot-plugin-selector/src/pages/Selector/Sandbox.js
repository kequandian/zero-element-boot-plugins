import React, { useState, useEffect } from 'react';

import SelectContainer from './index';
// const SelectContainer = require('./index')

import useTokenRequest from 'zero-element-boot/lib/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const { onItemClickHandle } = props;

    const api = '/api/selectdata';

    function onItemClick (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});

    return (
        <div style={{background:'white'}}>
            <SelectContainer {...props} data={data}/>
        </div>
    )
}