// 'admin' page to see all rsvp responses and create parties / members
import { NewPartyForm, NewMemberForm, GuestList, Header } from '@/components/index';

const page = () => {
  return (
    <div>
      <Header />
      <div className="col-span-2 mb-10">
        <GuestList />
      </div>

      <div className='flex items-center'>
        <div className="flex m-auto">
          <NewPartyForm />
          <NewMemberForm />
        </div>
      </div>

    </div>

  )
}

export default page