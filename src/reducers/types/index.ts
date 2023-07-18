import { AuthState } from './auth-state';
import { EventsState } from './event-state';
import { UserState } from './user-state';

export interface StoreType {
  auth: AuthState;
  user: UserState;
  events: EventsState;
}
