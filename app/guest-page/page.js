// 'admin' page to see all rsvp responses and create parties / members
import { NewPartyForm, NewMemberForm, GuestList } from '@/components/index';

const page = () => {
  return (
    <div>
      <div className="col-span-2 mb-10">
        <GuestList />
      </div>

      <div className='flex py-8 items-center'>
        <div className="flex m-auto">
          <NewPartyForm />
          <NewMemberForm />
        </div>
      </div>

    </div>

  )
}

export default page