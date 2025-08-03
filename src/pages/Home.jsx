import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-20 bg-gray-50 text-center">
        <Container>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-purple-600">BlogVerse</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Please <span className="text-purple-500 font-semibold">login</span> to read amazing blogs from our community.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
