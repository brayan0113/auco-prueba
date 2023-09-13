'use client';
import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { getUsers } from '@/api/users/route.js';
import { getPosts } from '@/api/posts/route.js';

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsData = await getPosts();
      setPosts(postsData);

      const usersData = await getUsers();
      setUsers(usersData);
    }

    fetchData();
  }, []);

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          userName={users.find((user) => user.id === post.userId)?.name}
          title={post.title}
          body={post.body}
          post={post}
          postId={post.id}
        />
      ))}
    </div>
  );
}

export default PostPage;
