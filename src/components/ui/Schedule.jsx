import React from 'react'

const Schedule = ({ schedule }) => {
  return (
    <ul className='flex flex-col gap-2 items-stretch justify-center w-3/5 mx-auto'>
      {schedule.map(sched => 
        <li key={sched} className='flex items-center justify-start gap-2 text-start'>
          <span className='w-10'>{sched.day}</span>
          <span>{sched.time}</span>
        </li>
      )}
    </ul>
  )
}

export default Schedule