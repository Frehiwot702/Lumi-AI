'use client';

import { useState } from 'react';

export default function CloudinaryUploader() {
  const [imageUrl, setImageUrl] = useState('');
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = async () => {
    // 1. Get signature from backend
    const res = await fetch('/api/cloudinary', { method: 'POST' });
    const { signature, timestamp } = await res.json();

    // 2. Create form data for Cloudinary
    const formData = new FormData();
    formData.append('file', selectedFile as Blob); // handle file from input
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
    formData.append('upload_preset', 'Day_In_a_Life');
    formData.append('signature', signature);
    formData.append('timestamp', timestamp.toString());
    

    // 3. Upload to Cloudinary
    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await uploadRes.json();
    console.log('data: ', data)
    setImageUrl(data.secure_url);
  };


  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload} disabled={!selectedFile} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
        Upload Image
      </button>

      {imageUrl && (
        <div className="mt-4">
          <p className="text-sm">Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="w-64 rounded shadow" />
        </div>
      )}
    </div>
  );
}
