import { User } from "@/types/User";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}
