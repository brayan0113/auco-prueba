import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function cargarPostsById(request, { params }) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar el post:', error);
    return [];
  }
}
