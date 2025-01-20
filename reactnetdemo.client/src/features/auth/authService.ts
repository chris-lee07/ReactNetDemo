interface Credentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

export const login = async (credentials: Credentials): Promise<LoginResponse> => {
  const { username, password } = credentials;

  if (username === 'user' && password === 'password') {
    return {
      user: { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      token: 'mock-token-123',
    };
  }

  throw new Error('Invalid credentials');
};