'use client';

import Hero from './sections/Hero';
import SignatureWork from './sections/SignatureWork';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureWork />
      <Services />
      <BeforeAfter />
    </>
  );
}