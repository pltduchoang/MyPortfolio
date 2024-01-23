// root/page.js:
'use client';
import React, { useState } from 'react';
import Background from './src/components/Background';
import Link from 'next/link';
import { useTheme } from './src/utils/ThemeContext';

export default function Page() {
    const { isNightMode, setIsNightMode } = useTheme();
    // Function to toggle night mode

    return (
      <main className='relative min-h-screen'>
          <Background isNightMode={isNightMode}/>
        
          {/* Toggle switch */}
          <div style={{zIndex: 3}}>
              <button onClick={()=>setIsNightMode(!isNightMode)} className=' bg-black text-white' style={{zIndex: 1}}>
                  { isNightMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              </button>
              <Link href='/src/resume'>To Home</Link>
          </div>
      </main>
  );
}