const serverUrl = process.env.NEXT_PUBLIC_SERVER!;

export const serverFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${serverUrl}${path}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json() as Promise<T>;
};