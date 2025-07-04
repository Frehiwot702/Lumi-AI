import Topbar from '../components/dashboard/Topbar'
import TodaysJourney from '../components/dashboard/TodaysJourney'
import AddJourney from '../components/forms/AddJourney'
import MonthSummery from '../components/dashboard/MonthSummery'
import BottomBar from '../components/BottomBar'

const Dashboard = () => {



  return (
    <div className=''>
        <Topbar/>
        <div className='px-5 space-y-2'>
            <h3 className='text-2xl pt-8'>Welcome back, Rediet!</h3>
            <hr className='w-full h-1 border-white/50'/>
        </div>
       
      <TodaysJourney/> 
      <MonthSummery/>
      <BottomBar/>
      {/* <AddJourney/> */}
        
    </div>
  )
}

export default Dashboard