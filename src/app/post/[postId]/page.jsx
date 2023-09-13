import { Suspense } from 'react';
import Post from '../page';

async function cargarPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
async function cargarUsuario(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar el usuario:', error);
    return {};
  }
}
async function cargarComentarios(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los comentarios:', error);
    return [];
  }
}
async function cargarPhotos(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${postId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar las imágenes:', error);
    return [];
  }
}

async function Page({ params }) {
  const postData = await cargarPost(params.postId);
  const usuarioData = await cargarUsuario(postData.userId);
  const comentariosData = await cargarComentarios(params.postId);
  const photosData = await cargarPhotos(params.postId);
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Autor: <strong>{usuarioData.name}</strong>
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {' '}
                  {postData.id}. {postData.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">{postData.body}</p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {photosData.length > 0 && (
              <img
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src={photosData[0]?.url} // Mostramos la primera imagen relacionada con el post
                alt=""
              />
            )}{' '}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight">Comentarios:</h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600 ">
                  {comentariosData.map((comentario) => (
                    <li key={comentario.id} className="flex gap-x-3 rounded-lg shadow-md p-4">
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Nombre: <em className="text-teal-500">{comentario.name}</em>
                        </strong>{' '}
                        <br />
                        {comentario.body}
                      </span>
                    </li>
                  ))}
                </ul>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
