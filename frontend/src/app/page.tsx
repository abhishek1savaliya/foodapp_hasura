import { gql } from 'urql';
import client from './utils/client';
import { Suspense } from 'react';

const QUERY = gql`
  query {
    friend {
      name
    }
  }
`;

async function fetchFriends() {
  try {
    const result = await client.query(QUERY).toPromise();
    return result.data.friend;
  } catch (err: any) {
    throw new Error(err.message);
  }
}


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-8xl font-bold text-blue-600 mb-8">Hello World from FOOD-APP</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <FriendsList />
      </Suspense>
    </div>
  );
}

async function FriendsList() {
  const friends = await fetchFriends();

  return (
    <ul className="space-y-4">
      {friends.map((friend: any) => (
        <li
          key={friend.name}
          className="px-12 py-9 bg-slate-900  rounded-lg shadow-md hover:bg-gold-200 transition text-4xl"
        >
          <p className='text-slate-50'> {friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
