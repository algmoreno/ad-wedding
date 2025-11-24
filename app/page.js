import {EventDetailsCard, HeaderLanding } from '@/components/index';
import Balatro from '../components/Balatro';

export const metadata = {
  title: "D+A",
  description: "Doli and Alan Wedding",
};

export default function Home() {
  return (
    <div className=''>
      <HeaderLanding />
      <EventDetailsCard />
    </div>
  );
}
