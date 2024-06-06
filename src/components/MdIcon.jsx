import React from 'react';
import * as Icons from '../icons'

const MdIcon = ({icon, ...props}) => {
    const Icon = Icons[icon]
    return (
        <Icon {...props} />
    );
}

export default MdIcon;

// function Icon({ icon, ...props }) {
//     const Icon = Icons[icon]
//     return <Icon {...props} />
//   }
