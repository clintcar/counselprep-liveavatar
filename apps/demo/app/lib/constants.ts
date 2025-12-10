export const AVATARS = [
  {
    avatar_id: "0930fd59-c8ad-434d-ad53-b391a1768720",
    name: "Dexter",
  },
  {
    avatar_id: "e9844e6d-847e-4964-a92b-7ecd066f69df",
    name: "Graham",
  },
  {
    avatar_id: "073b60a9-89a8-45aa-8902-c358f64d2852",
    name: "Katya",
  },
  {
    avatar_id: "bf00036b-558a-44b5-b2ff-1e3cec0f4ceb",
    name: "Marianne",
  },
];

export const STT_LANGUAGE_LIST = [
  { label: "Bulgarian", value: "bg", key: "bg" },
  { label: "Chinese", value: "zh", key: "zh" },
  { label: "Czech", value: "cs", key: "cs" },
  { label: "Danish", value: "da", key: "da" },
  { label: "Dutch", value: "nl", key: "nl" },
  { label: "English", value: "en", key: "en" },
  { label: "Finnish", value: "fi", key: "fi" },
  { label: "French", value: "fr", key: "fr" },
  { label: "German", value: "de", key: "de" },
  { label: "Greek", value: "el", key: "el" },
  { label: "Hindi", value: "hi", key: "hi" },
  { label: "Hungarian", value: "hu", key: "hu" },
  { label: "Indonesian", value: "id", key: "id" },
  { label: "Italian", value: "it", key: "it" },
  { label: "Japanese", value: "ja", key: "ja" },
  { label: "Korean", value: "ko", key: "ko" },
  { label: "Malay", value: "ms", key: "ms" },
  { label: "Norwegian", value: "no", key: "no" },
  { label: "Polish", value: "pl", key: "pl" },
  { label: "Portuguese", value: "pt", key: "pt" },
  { label: "Romanian", value: "ro", key: "ro" },
  { label: "Russian", value: "ru", key: "ru" },
  { label: "Slovak", value: "sk", key: "sk" },
  { label: "Spanish", value: "es", key: "es" },
  { label: "Swedish", value: "sv", key: "sv" },
  { label: "Turkish", value: "tr", key: "tr" },
  { label: "Ukrainian", value: "uk", key: "uk" },
  { label: "Vietnamese", value: "vi", key: "vi" },
];

export const VOICE_EMOTIONS = [
  "friendly",
  "calm",
  "excited",
  "professional",
  "casual",
  "cheerful",
  "serious",
  "warm",
] as const;

export type VoiceEmotion = (typeof VOICE_EMOTIONS)[number];
