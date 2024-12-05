import clientPromise from '../../../lib/mongodb';

export async function GET(req) {
  const client = await clientPromise;
  const db = client.db('todo');

  const products = await db.collection('tasks').find({}).toArray();

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
