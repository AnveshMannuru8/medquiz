export type SessionInfo = {
  authenticated: boolean;
  user?: {
    id: string;
    email?: string | null;
    name?: string | null;
    role?: string | null;
  };
};

