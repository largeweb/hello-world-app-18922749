// app/page.tsx
import React from 'react';
import HelloWorld from './components/HelloWorld';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <HelloWorld />
    </div>
  );
}