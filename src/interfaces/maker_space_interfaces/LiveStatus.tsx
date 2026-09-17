import type { EquipmentItem } from "../EquipmentItem";

export interface LiveStatus {
  hours: string;
  capacity: string;
  equipment: EquipmentItem[];
}
