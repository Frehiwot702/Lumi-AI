'use client'
import React, { useState } from 'react'
import MotivationCard from './MotivationCard'


const TodaysJourney = () => {
    const Quotes = () => [
        {
            "id": 1,
            "quote": "Today is a new page. Make it count."
        },
        {
            "id": 2,
            "quote": "Small moments are still beautiful."
        },
        {
            "id": 3,
            "quote": "Progress, not perfection."
        },
       
       
    ]
 console.log('quotes, ', Quotes)

    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');
    const [mood, setMood] = useState('');
    const [location, setLocation] = useState('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false)

    const clearForm = async () => {
        setCaption('')
        setMood('')
        setLocation('')
        setSelectedFile(null)
    };

    const handleSubmit = async () => {
        
        setLoading(true);
        const res = await fetch('/api/cloudinary', { method: 'POST' });
        const { signature, timestamp } = await res.json();

                      
        const formData = new FormData();
        formData.append('file', selectedFile as Blob); 
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
        formData.append('upload_preset', 'Day_In_a_Life');
        formData.append('signature', signature);
        formData.append('timestamp', timestamp.toString());
        

        
        const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await uploadRes.json(); 
         
        setImageUrl(data.secure_url);
        const now = new Date();
 
        const timeFormat = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        const dayFormat = now.toISOString().split('T')[0];
        const monthFormat = now.toISOString().slice(0, 7);

        const journalData = { 
            userData: '01',
            imageUrl,
            caption,
            mood,
            date: new Date().toISOString(), 
            time: timeFormat,
            day: dayFormat,
            month: monthFormat
        };
            
        console.log('from submit', journalData)

            // // 4. Send to your API to insert in DB
            // await fetch('/api/journal/create', {
            // method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(journalData),
            // });

        setLoading(false);
        clearForm();
        alert('Entry saved!');
    };

    
  return (
    <div className='px-5 py-10'>

        <MotivationCard/>
       
        <div className='grid md:grid-cols-2 gap-5 py-5'>
            <div className='border border-dashed grid grid-cols-2 gap-5 rounded-md py-5 px-5 text-center'> 
                <div className='flex items-center justify-between col-span-2'>
                    <h3 className='font-bold text-xl'>Today's Journal</h3>
                    <h3 className='bg-[#CBD83B] rounded-full px-3 py-2 text-sm text-black font-bold'> {new Date().toISOString().split('T')[0]}</h3>
                </div>
                   
                <div className="mt-4 flex justify-center"> 
                    <img src='./mood7.jpg' alt="Todays picture" className="w-42 object-cover rounded rotate-x-12 rotate-y-12 shadow-2xl" />
                </div>
               
                <div className='text-white/70 py-5 space-y-3 text-start text-sm'>
                   
                    <h3>Mood: Greatful 😊</h3>
                    <h3>Caption: Watched the sunrise with coffee. Felt at peace</h3>
                    <h3>Location: Addis Ababa, Ethiopia</h3>
                    <div className='flex justify-between'>
                        <button 
                            className=''
                        >Edit </button>
                         <button 
                            className='text-[#]'
                        >Add +</button>
                    </div>
                   
                </div>
               
            </div>
             
        </div>
    </div>
  )
}

export default TodaysJourney