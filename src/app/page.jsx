import React from 'react';
import PostPage from './post/page';

function HomePage() {
  return (
    <main>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Trazando mi camino hacia el éxito: Experiencias y reflexiones en el mundo de la tecnología
            </p>
          </div>
          <PostPage></PostPage>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
