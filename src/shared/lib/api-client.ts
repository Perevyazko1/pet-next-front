const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

export async function apiClient<T>(config: {
  url: string;
  method: string;
  params?: Record<string, string | number | boolean>;
  data?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}): Promise<T> {
  const { url, method, params, data, headers, signal } = config;

  const queryString = params
    ? '?' +
      new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)]),
      ).toString()
    : '';

  const response = await fetch(`${BASE_URL}${url}${queryString}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
    signal,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
