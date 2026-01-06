import type { VideoRoomType } from "@/lib/db/schema"

/**
 * Default motion prompts for Kling Video v2.6 Pro generation
 *
 * Best practices from Kling 2.6 Pro Prompt Guide:
 * @see https://fal.ai/learn/devs/kling-2-6-pro-prompt-guide
 *
 * Structure: [Camera action] + [Direction/Speed] + [Distance/Framing] + [Subject focus] + [Style]
 *
 * Key principles:
 * - Use consistent motion language: "camera tracks", "camera pushes forward"
 * - Specify camera distance and framing for visual coherence
 * - Break complex movements into simpler instructions
 * - Avoid multiple simultaneous camera transformations
 */

export const DEFAULT_MOTION_PROMPTS: Record<VideoRoomType, string> = {
  "exterior-front":
    "Camera slowly tracks right across the front facade at medium distance. Steady movement reveals landscaping, driveway, and architectural details. Eye-level framing, natural daylight, professional real estate cinematography.",

  entryway:
    "Camera pushes forward slowly through the front door at eye level. Smooth, steady motion reveals the interior space ahead. Warm ambient lighting, welcoming atmosphere, professional real estate style.",

  "living-room":
    "Camera tracks left to right across the living room at medium distance. Steady horizontal movement showcases furniture arrangement and natural window light. Eye-level framing, spacious feel, luxury real estate cinematography.",

  kitchen:
    "Camera tracks slowly along the kitchen countertops from left to right. Maintains consistent distance, showcasing cabinetry, appliances, and workspace. Clean lines, bright lighting, professional real estate style.",

  "dining-room":
    "Camera slowly pulls back to reveal the dining area at eye level. Steady backward motion shows table setting and connection to adjacent spaces. Warm ambient lighting, elegant atmosphere, professional cinematography.",

  bedroom:
    "Camera tracks gently across the bedroom at medium distance. Smooth horizontal movement emphasizes spaciousness and natural light from windows. Calm atmosphere, soft lighting, professional real estate style.",

  bathroom:
    "Camera pushes forward slowly into the bathroom space. Steady motion reveals fixtures, finishes, and spa-like features. Bright, clean lighting, eye-level framing, professional real estate cinematography.",

  office:
    "Camera tracks right across the office space at eye level. Steady movement showcases desk area, natural window light, and organized environment. Clean, modern style, professional real estate cinematography.",

  "exterior-back":
    "Camera slowly tracks left to right across the backyard at medium distance. Steady movement reveals outdoor living space, landscaping, and amenities. Golden hour lighting style, expansive view, professional cinematography.",

  other:
    "Camera tracks slowly across the space at medium distance. Steady horizontal movement reveals room features and natural lighting. Eye-level framing, professional real estate cinematography style.",
}

// Get motion prompt for a room type
export function getMotionPrompt(roomType: VideoRoomType): string {
  return DEFAULT_MOTION_PROMPTS[roomType] ?? DEFAULT_MOTION_PROMPTS.other
}

// Generate a custom motion prompt with room-specific base + user additions
export function generateMotionPrompt(
  roomType: VideoRoomType,
  customAdditions?: string
): string {
  const basePrompt = getMotionPrompt(roomType)

  if (!customAdditions?.trim()) {
    return basePrompt
  }

  return `${basePrompt} ${customAdditions.trim()}`
}

// Common negative prompts to avoid issues
export const DEFAULT_NEGATIVE_PROMPT =
  "blurry, low resolution, distorted, shaky camera, fast movement, jerky motion, overexposed, underexposed, watermark, text overlay"

/**
 * Prompt enhancement tips for real estate videos
 * Based on Kling 2.6 Pro Prompt Guide best practices
 * @see https://fal.ai/learn/devs/kling-2-6-pro-prompt-guide
 */
export const PROMPT_TIPS = [
  "Use 'camera tracks left/right' for horizontal movement",
  "Use 'camera pushes forward' for walking/entering effect",
  "Use 'camera pulls back' to reveal a space",
  "Specify 'eye-level framing' for natural perspective",
  "Add 'steady movement' or 'smooth motion' for stability",
  "Avoid combining multiple camera movements (e.g., 'pan while zooming')",
  "Include 'professional real estate cinematography' for polished style",
]
