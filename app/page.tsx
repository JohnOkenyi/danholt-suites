import Hero from '@/components/Hero';
import LuxuryIntro from '@/components/LuxuryIntro';
import AnticipatedNeeds from '@/components/AnticipatedNeeds';
import ServiceStatement from '@/components/ServiceStatement';
import DanholtPromise from '@/components/DanholtPromise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <LuxuryIntro />
      <AnticipatedNeeds />
      <ServiceStatement />
      <DanholtPromise />
      <Footer />
    </>
  );
}
