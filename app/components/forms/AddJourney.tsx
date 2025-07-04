'use client'
import { CldUploadButton, CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'
import CloudinaryUploader from '../CloudinaryUploader'

const AddJourney = () => {

    const moods = [
        {
            id: 1,
            name: 'Happy ',
            icon: '😊'
        }, 
        {
            id: 2,
            name: 'Calm',
            icon: '🌿'
        },
        {
            id: 3,
            name: 'Sad',
            icon: '😢'
        },
        {
            id: 4,
            name: 'Anxious',
            icon: '😰'
        },
        {
            id: 5,
            name: 'Grateful',
            icon: '🙏'
        }, 
        {
            id: 6,
            name: 'Excited',
            icon: '🎉'
        },
        {
            id: 7,
            name: 'Tired',
            icon: '💤'
        },
        {
            id: 8,
            name: 'Reflective',
            icon: '🧠'
        }
    ]

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

        <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg'>Share how your day is going</h3>
            <h3 className='bg-[#CBD83B] rounded-full px-3 py-2 text-black font-bold'> {new Date().toISOString().split('T')[0]}</h3>
        </div>
       
        <div className='grid md:grid-cols-2 gap-5 py-5'>
            <div className='border border-dashed rounded-md py-10 px-5 text-center'> 
                {selectedFile && (
                    <div className="mt-4 flex justify-center"> 
                        <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" className="w-48 rounded shadow" />
                    </div>
                )}
                 <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                />
                {/* <button onClick={handleUpload}  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                    Upload Image
                </button> */}
               
            </div>
            <div className='space-y-5'>
                
               
                <select  value={mood} onChange={(e) => setMood(e.target.value)} className='block border rounded-lg w-full px-3 py-2'>
                    <option className='bg-black p-2'>Select Mood</option>
                    {moods.map((md) => (
                        <option 
                            key={md.id} 
                            value={md.name}
                            className='bg-black p-2' 
                        > {md.name} {md.icon}</option>
                    ))}
                </select>
                <input
                    type='text'
                    name='caption'
                    placeholder='Add Caption'
                    value={caption} 
                    onChange={(e) => setCaption(e.target.value)}
                    className='w-full px-3 py-2 border border-white/20 rounded-lg'
                />
                <input
                    type='text'
                    name='location'
                    placeholder='Add Location'
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    className='w-full px-3 py-2 border border-white/20 rounded-lg'
                />
                 <button onClick={handleSubmit}  disabled={loading || !selectedFile}>
                    {loading ? 'Saving...' : 'Save Entry'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddJourney