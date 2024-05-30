import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "cOnvOz",
  description: "Video calling app",
  icons:{
    icon:'icons/logo.svg'
  },
};

const Rootlayout = ({children}:{children: ReactNode}) => {
  return (
    <main>
      
       <StreamVideoProvider>
       {children}
       </StreamVideoProvider>
     
    </main>
  )
}

export default Rootlayout;