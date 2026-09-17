import type { LiveStatus } from "./LiveStatus";

export interface MockLiveData {
  [spaceName: string]: LiveStatus;
}
