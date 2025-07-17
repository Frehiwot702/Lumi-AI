import React from 'react'

const Features = () => {

    const features = [
        {
            id: 1,
            title: 'One Photo a Day',
            description: 'Capture a dingle moment each day to build your personal viual timeline. One image, one story - no distractions, just you and your life.'
        }, 
        {
            id: 2,
            title: 'Visual Timeline',
            description: 'See your memories unfold in a clean, minimalist grid or calendar. Scroll through your life liek a visual journal - day by day, photo by photo.',
        },
        {
            id: 3,
            title: 'Mood, Notes & Location',
            description: 'Add a cation, tag your mood or pin a location to each entry. Its not about the photo - its about how that day felt.'
        }, 
        {
            id: 4,
            title: 'Private & Personal',
            description: 'Your journal is yours alone, All entries are secure and provate by default - a quiet space to reflect, record and remember.',
        }
    ]
  return (
    <div className='px-10 py-10'>
        {/* <h3 className='text-3xl'>Features</h3> */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {features.map((feature) => (
                <div key={feature.id} className='bg-white/10 p-8 rounded-lg'>
                    <h3 className='text-2xl font-bold'>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Features