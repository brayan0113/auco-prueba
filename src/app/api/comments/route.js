export async function getComments() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los comments:', error);
    return [];
  }
}
