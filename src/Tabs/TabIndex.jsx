import React, { useState } from 'react';
import Tabs from './Tabs';
import {tabLabels} from './Constant';

const TabIndex = () => {
    const [activTab,setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);
    
    const onClickTab =(tab)=>{
        setActiveTab(tab);
    };

  return (
    <div>
        <Tabs activTab={activTab} onClickTab={onClickTab} />
    </div>
  )
};

export default TabIndex