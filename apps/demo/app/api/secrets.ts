// Read from environment variables for production, with fallbacks for local development
export const API_KEY =
  process.env.LIVEAVATAR_API_KEY || "e6aa1ec7-95e4-4d93-84a1-e0f9d868b662";
export const API_URL =
  process.env.LIVEAVATAR_API_URL || "https://api.liveavatar.com";
export const AVATAR_ID =
  process.env.LIVEAVATAR_AVATAR_ID || "dd73ea75-1218-4ef3-92ce-606d5f7fbc0a";

// FULL MODE Customizations
export const VOICE_ID =
  process.env.LIVEAVATAR_VOICE_ID || "c2527536-6d1f-4412-a643-53a3497dada9";
export const CONTEXT_ID =
  process.env.LIVEAVATAR_CONTEXT_ID || "4c63e4c4-2b05-4ee6-864f-7f4f5851bdfc";
export const LANGUAGE = process.env.LIVEAVATAR_LANGUAGE || "en";

// CUSTOM MODE Customizations
export const ELEVENLABS_API_KEY =
  process.env.ELEVENLABS_API_KEY || "YOUR_ELEVENLABS_API_KEY";
export const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY || "YOUR_OPENAI_API_KEY";
