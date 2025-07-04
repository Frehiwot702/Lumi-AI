import React from 'react'

const MotivationCard = () => {

     const Quotes =  [
           "Today is a new page. Make it count.",
            "Small moments are still beautiful.",
            "Progress, not perfection.",
            "Breathe. Smile. Begin again.",
            "You’re doing better than you think.",
            "Find joy in the little things.",
            "Each day has its own story.",
            "Let today be a good memory tomorrow.",
            "Notice what made you smile today.",
            "Even ordinary days are worth remembering.",
            "It’s okay to rest.",
            "Feel what you feel. You’re human.",
            "Be kind to your mind.",
            "You are enough, just as you are.",
            "Take life one photo at a time."
            
        ]
    
  return (
    <div className='bg-[#CBD83B]/70 text-white/70 px-5 py-3 rounded-xl'>
        <h3 className='text-lg'>{Quotes[0]}</h3>
    </div>
  )
}

export default MotivationCard