import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Upload, X } from 'lucide-react';

export const ComplaintForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const totalFiles = images.length + newFiles.length;
      
      if (totalFiles > 5) {
        setError('You can only attach a maximum of 5 images.');
        return;
      }
      
      setImages(prev => [...prev, ...newFiles]);
      setError('');
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (images.length < 3) {
      setError('Please attach at least 3 images to support your complaint.');
      return;
    }
    
    if (images.length > 5) {
       setError('You can only attach a maximum of 5 images.');
       return;
    }

    // Simulate API call to email/save
    console.log('Submitting complaint to email...', {
        to: 'complaints@tkmtradingshop.com',
        description,
        images: images.map(f => f.name)
    });
    
    // Simulate success
    setTimeout(() => {
        setSuccess(true);
        setDescription('');
        setImages([]);
    }, 1000);
  };

  if (success) {
      return (
          <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-tkm-teal mb-4">Complaint Received</h2>
                  <p className="text-gray-600 mb-6">Thank you for contacting TKM Trading Shop. We have received your complaint and attachments. Our support team will review the information and contact you shortly.</p>
                  <button onClick={() => setSuccess(false)} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">Submit Another</button>
              </div>
          </div>
      )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <SectionTitle title="File a Complaint" />
      <p className="text-center text-gray-500 mb-8">We apologize for any inconvenience. Please describe your issue in detail and attach 3-5 images so we can assist you effectively.</p>
      
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-2">Description of the Issue</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full h-40 p-3 border border-gray-300 rounded focus:outline-none focus:border-tkm-teal focus:ring-1 focus:ring-tkm-teal"
            placeholder="Please explain the issue you are facing..."
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-700 mb-2">Evidence Images (Min 3, Max 5)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white hover:bg-gray-50 transition-colors">
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden" 
              id="file-upload"
              disabled={images.length >= 5}
            />
            <label htmlFor="file-upload" className={`flex flex-col items-center justify-center ${images.length >= 5 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
              <Upload size={32} className="text-gray-400 mb-2" />
              <span className="text-sm text-tkm-teal font-bold hover:underline">Click to upload images</span>
              <span className="text-xs text-gray-400 mt-1">Supported formats: JPG, PNG</span>
            </label>
          </div>
          
          {/* Image Previews */}
          {images.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                  {images.map((file, idx) => (
                      <div key={idx} className="relative w-20 h-20 md:w-24 md:h-24 border border-gray-200 rounded overflow-hidden group">
                          <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-bl opacity-80 hover:opacity-100 transition-opacity"
                          >
                              <X size={12} />
                          </button>
                      </div>
                  ))}
              </div>
          )}
          
          <div className="flex justify-between mt-2 text-xs font-medium">
             <span className={`${images.length < 3 ? 'text-red-500' : 'text-green-600'}`}>
                {images.length} / 5 images attached {images.length < 3 && '(Minimum 3 required)'}
             </span>
          </div>
        </div>

        {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 text-sm">
                <p className="font-bold">Error</p>
                <p>{error}</p>
            </div>
        )}

        <div className="flex justify-center">
          <button type="submit" className="bg-black text-white px-12 py-3 uppercase text-sm font-bold tracking-widest hover:bg-tkm-teal transition-colors shadow-lg">
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
};