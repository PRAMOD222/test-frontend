"use client";
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      setMessage('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
// set request to no-cors
    try {
      const response = await fetch('https://ecom.thirstymart.in/api/posts/add', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Post created successfully: ID ${data.postId}`);
      } else {
        setMessage(`Error: ${data}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://ecom.thirstymart.in/api/posts/all');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Upload Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}

      <div>
        <h1>Uploaded Posts</h1>
        {error && <p>Error: {error}</p>}
        <ul>
          {posts.map(post => (
            <li key={post.title} className='border p-4 m-4 rounded-md '>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a target='_blank'>{`http://localhost:3001${post.image}`}</a>
              <Image width={200} height={200} src={`http://localhost:3001${post.image}`} alt={post.title}  />
              {/* <p>Uploaded on: {new Date(post.created_at).toLocaleString()}</p> */}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>

  );
};

export default UploadPage;
