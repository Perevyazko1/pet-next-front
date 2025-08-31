import { NextRequest, NextResponse } from 'next/server';

/**
 * Proxy route handler.
 * Получает параметры от клиента, делает серверный запрос к API с токеном авторизации.
 */
export async function POST(req: NextRequest) {
  try {
    const { url, method = 'GET', headers = {}, body } = await req.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid "url" parameter' },
        { status: 400 },
      );
    }

    const token = req.cookies.get('access_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized: No access token' },
        { status: 401 },
      );
    }

    const fetchOptions: RequestInit = {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    };

    const backendResponse = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + url,
      fetchOptions,
    );

    if (backendResponse.status === 401) {
      const res = NextResponse.json(
        { error: 'Unauthorized: Invalid or expired token' },
        { status: 401 },
      );

      // Удаляем access_token
      res.cookies.delete('access_token');
      return res;
    }

    const contentType = backendResponse.headers.get('content-type');

    const responseBody = contentType?.includes('application/json')
      ? await backendResponse.json()
      : await backendResponse.text();

    return new NextResponse(JSON.stringify(responseBody), {
      status: backendResponse.status,
      headers: { 'Content-Type': contentType || 'application/json' },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
