import type { RoomType } from "@/lib/db/schema";

export type { RoomType } from "@/lib/db/schema";

export const ROOM_TYPE_IDS: readonly RoomType[] = [
  "living-room",
  "kitchen",
  "bedroom",
  "bathroom",
  "toilet",
  "hallway",
  "office",
  "laundry-room",
  "storage-room",
  "walk-in-closet",
  "sauna",
  "gym",
  "childrens-room",
  "pool-area",
  "dining-room",
  "tv-room",
  "library",
  "hobby-room",
  "utility-room",
  "pantry",
  "conservatory",
  "garage",
  "terrace",
  "garden",
  "landscape",
  "exterior",
  "other",
];

export const ROOM_TYPE_LABELS: Partial<Record<RoomType, string>> = {
  "living-room": "Living Room",
  kitchen: "Kitchen",
  bedroom: "Bedroom",
  bathroom: "Bathroom",
  toilet: "Toilet",
  hallway: "Hallway",
  office: "Office",
  "laundry-room": "Laundry Room",
  "storage-room": "Storage Room",
  "walk-in-closet": "Walk-in Closet",
  sauna: "Sauna",
  gym: "Gym",
  "childrens-room": "Children's Room",
  "pool-area": "Pool Area",
  "dining-room": "Dining Room",
  "tv-room": "TV Room",
  library: "Library",
  "hobby-room": "Hobby Room",
  "utility-room": "Utility Room",
  pantry: "Pantry",
  conservatory: "Conservatory",
  garage: "Garage",
  terrace: "Terrace",
  garden: "Garden",
  landscape: "Landscape",
  exterior: "Exterior",
  other: "Other",
};

export const getRoomTypeLabel = (roomType: RoomType): string => {
  const mapped = ROOM_TYPE_LABELS[roomType];
  if (mapped) {
    return mapped;
  }

  return roomType
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
