"use client"

import styles from '../style.module.css'
import React,{useState} from 'react';
import {content, address} from './profilecontent'

const VerticalTabs = ({ tabs }:any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>   
      <div className={styles.tabs}>
      <div className={styles.main2}>
        {tabs.map((tab:any, index:any) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index ? 'bg-gray-300' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
    <div className={styles.content}>
        {tabs[activeTab].content}
      </div>
    </div>

  );
};




export default function profilepage(){
  const tabs = [
    {
      label: 'Profile',
      content: content(),
    },
    {
      label: 'Address',
      content: address(),
    },
 
  ];

    return(

      <div className="container mx-auto p-4 mt-20">
      <VerticalTabs tabs={tabs} />

    </div>
    );
}

