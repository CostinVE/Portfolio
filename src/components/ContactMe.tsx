import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Use EmailJS to send the email
    emailjs
      .send(
        'service_7l4p2xg', // Replace with your EmailJS service ID
        'template_lxetgrn', // Replace with your EmailJS template ID
        emailData,
        'NuwjyGeMydRI-g5bG' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setAttachment(null);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="  text-left p-6 border-zinc-500/50 border-4 border-double">
      {/* Social Media Section */}
      <div className="flex gap-6 mb-8">
        {/* GitHub */}
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587v-2.17c-3.338.725-4.043-1.613-4.043-1.613-.547-1.387-1.338-1.755-1.338-1.755-1.093-.75.088-.725.088-.725 1.207.088 1.838 1.238 1.838 1.238 1.073 1.837 2.813 1.3 3.5.988.113-.775.42-1.3.763-1.6-2.665-.3-5.467-1.338-5.467-5.963 0-1.313.47-2.388 1.238-3.238-.125-.3-.538-1.513.113-3.15 0 0 1.01-.325 3.3 1.238.963-.263 2-.4 3.038-.4 1.038 0 2.075.138 3.038.4 2.288-1.563 3.3-1.238 3.3-1.238.65 1.638.238 2.85.113 3.15.775.85 1.238 1.925 1.238 3.238 0 4.638-2.813 5.663-5.488 5.963.425.363.813 1.088.813 2.2v3.263c0 .325.188.7.8.587C20.563 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-.028-3.156-1.922-3.156-1.922 0-2.218 1.5-2.218 3.05v5.606h-3v-10h2.888v1.367h.041c.403-.763 1.388-1.563 2.857-1.563 3.053 0 3.617 2.011 3.617 4.623v5.573z" />
          </svg>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block font-medium">
            Phone (Optional)
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows={5}
            required
          />
        </div>

        {/* File Attachment */}
        <div>
          <label htmlFor="attachment" className="block font-medium">
            Attachment (Optional)
          </label>
          <input
            type="file"
            id="attachment"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};