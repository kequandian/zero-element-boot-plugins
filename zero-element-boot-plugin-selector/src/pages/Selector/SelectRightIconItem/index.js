import React from 'react';
const { AutoComponent } = require('zero-element-boot/lib');

const { Avatar, Title } = require('@/presenter');

export default function SelectRightIconItem(props) {
  const allComponents = {
    Avatar, Title,
  }
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'column',
      },
      children: [
        {
          presenter: 'Title',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                name: 'TitleText'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return (
    <div style={{width: '100px', marginRight: '10px'}}>
      <AutoComponent {...config} allComponents={allComponents} />
    </div>
  )

}