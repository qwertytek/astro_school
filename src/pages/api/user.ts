const CREDENTIALS_URL = import.meta.env.CREDENTIALS_URL

export async function getUser(request: Request) {
  try {
    const response = await fetch(CREDENTIALS_URL, {
      headers: {
        Authorization: request.headers.get("Authorization") || "",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}