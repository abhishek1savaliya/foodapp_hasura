export default async function Home() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
      },
      body: JSON.stringify({
        query: `
          query {
            friend {
              name
            }
          }
        `,
      }),
    });

    const result = await response.json();
    const friends = result.data?.friend || [];

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Hello World from Food App</h1>
        <ul className="space-y-4">
          {friends.map((friend: { name: string }) => (
            <li
              key={friend.name}
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:bg-blue-50 transition">
              {friend.name}
            </li>
          ))}
        </ul>
      </div>

    );
  } catch (error) {
    console.error('Error fetching friends:', error);
    return <div>Error loading friends list</div>;
  }
}
