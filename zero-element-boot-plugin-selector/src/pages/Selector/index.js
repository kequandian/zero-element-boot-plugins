import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib';

import layout from './layout';

import SelectUpperRightItem from './SelectUpperRightItem';
import SelectRightIconItem from './SelectRightIconItem';

export default function (props) {

    const { data=[], onItemClickHandle } = props;

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
    }

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutData
    };

    return (
        <AutoLayout {...config} onItemClick={onItemClickHandle}>
            <SelectUpperRightItem />
            {/* <SelectRightIconItem /> */}
        </AutoLayout>
    )
}