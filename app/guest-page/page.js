// 'admin' page to see all rsvp responses and create parties / members
import { NewPartyForm, NewMemberForm } from '@/components/index';

const page = () => {
  return (
    <div className='py-8'>
      <NewPartyForm />
      <NewMemberForm />
    </div>
  )
}

export default page