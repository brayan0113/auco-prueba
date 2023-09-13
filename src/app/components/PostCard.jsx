'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function PostCard({ userName, title, body, postId }) {
  const router = useRouter();

  const viewDetails = () => {
    router.push(`/post/${postId}`);
  };
  return (
    <>
      <article key={postId} className="flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className=" mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-indigo-gray-500 bg-clip-border text-white shadow-lg shadow-indigo-gray-500/40 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
        <div className="group relative h-56">
          <div className="p-6">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
              <span className="absolute inset-0" />
              {title}
            </h3>
          </div>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 px-6">{body}</p>
        </div>
        <div className="relative mt-4 flex items-center gap-x-4">
          <div className="text-sm leading-6 px-6">
            <p className="font-semibold text-gray-900">
              <span className="absolute inset-0" />
              {userName}
            </p>
          </div>
        </div>
        <div className="p-6 pt-2">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-indigo-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={viewDetails}
          >
            Leer mas{' '}
          </button>
        </div>
      </article>{' '}
    </>
  );
}

export default PostCard;
