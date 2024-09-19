import { gql } from 'urql';
import client from './utils/client';
import { Suspense } from 'react';

// Define your GraphQL query
const QUERY = gql`
  query {
    friend {
      name
    }
  }
`;

// Server-side data fetching function
async function fetchFriends() {
  try {
    const result = await client.query(QUERY).toPromise();
    return result.data.friend;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Component for rendering the data
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Hello World from Food App</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <FriendsList />
      </Suspense>
    </div>
  );
}

// Server Component for FriendsList
async function FriendsList() {
  const friends = await fetchFriends();

  return (
    <ul className="space-y-4">
      {friends.map((friend: any) => (
        <li
          key={friend.name}
          className="px-6 py-3 bg-gold-300 rounded-lg shadow-md hover:bg-gold-200 transition"
        >
          {friend.name}
        </li>
      ))}
    </ul>

  );
}
