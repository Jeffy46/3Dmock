import type { Media } from "./maker_space_interfaces/Media";
import type { Location } from "./maker_space_interfaces/Location";
import type { Text } from "./maker_space_interfaces/Text";
export interface MakerSpace {
  name: string;
  date: string;
  location: Location;
  media: Media;
  text: Text;
  resources: string[];
}
