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
    console.log(result)
    const friends = result.data.friend;

    return (
      <div>
        <h1>Hello World from Food App</h1>
        <ul>
          {friends.map((friend: { name: string }) => (
            <li key={friend.name}>{friend.name}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching friends:', error);
    return <div>Error loading friends list</div>;
  }
}
