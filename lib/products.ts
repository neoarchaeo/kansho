export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  accessLabel: string;
  title: string;
  description: string;
  specs: ProductSpec[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "suitchi",
    accessLabel: "SUITCHI_干渉_WiFi_Bluetooth_Network_Disruptor",
    title: "SUITCHI_干渉_Switch_WiFi_Bluetooth_Network_Disruptor",
    description:
      "SUITCHI is a portable emitter engineered for selective network severance. It scans available WiFi and Bluetooth bands within range and transmits persistent deauthentication frames, forcing connected devices to disconnect and preventing re-association. Activation requires a single button press; deactivation is equally immediate. Operational battery life: approximately 2 hours under continuous use. Effective range: up to 30 feet indoors, extending to 90 feet outdoors in unobstructed conditions. Designed for environments where temporary denial of wireless connectivity is required.",
    specs: [
      { label: "Operational range", value: "30ft indoor / 90ft outdoor" },
      { label: "Battery life", value: "~2 hours continuous" },
      { label: "Activation", value: "Single button press" },
      { label: "Targets", value: "WiFi (2.4/5GHz), Bluetooth" },
    ],
    images: [
      "/images/suitchi-1.jpg",
      "/images/suitchi-2.svg",
      "/images/suitchi-3.svg",
      "/images/suitchi-4.svg",
    ],
  },
  {
    id: "nioi",
    accessLabel: "NIOI_匂い_WiFi_Bluetooth_Locator",
    title: "NIOI_匂い_Smell_WiFi_Bluetooth_Locator",
    description:
      "NIOI functions as a handheld detection tool for identifying active WiFi and Bluetooth transmitters in the immediate vicinity. Upon activation (single button press), it sweeps relevant spectra and provides real-time audio feedback: beep intervals shorten proportionally with increasing signal proximity, enabling directional sweeping of a space. Battery life: approximately 6 hours of continuous operation. Detection range: up to 30 feet indoors. Intended for systematic identification of potential surveillance or unauthorized transmitting devices.",
    specs: [
      { label: "Detection range", value: "30ft indoor" },
      { label: "Battery life", value: "~6 hours continuous" },
      { label: "Feedback", value: "Audio proximity beeping" },
      { label: "Targets", value: "WiFi, Bluetooth transmitters" },
    ],
    images: [
      "/images/nioi-1.svg",
      "/images/nioi-2.svg",
      "/images/nioi-3.svg",
      "/images/nioi-4.svg",
    ],
  },
  {
    id: "kagi",
    accessLabel: "KAGI_鍵_Bogota_Rake_Universal_Lockpick_Set",
    title: "KAGI_鍵_Key_Bogota_Rake_Universal_Lockpick_Set",
    description:
      "KAGI comprises a compact set of specialized tools optimized for non-destructive interaction with common pin-tumbler and similar mechanical locks. The rake-style components allow efficient tension and manipulation for rapid access. Designed for discreet carry and deployment in scenarios requiring bypass of standard physical security measures.",
    specs: [
      { label: "Tool type", value: "Bogota rake + tension tools" },
      { label: "Lock compatibility", value: "Pin-tumbler, wafer" },
      { label: "Form factor", value: "Compact carry" },
      { label: "Material", value: "Hardened steel" },
    ],
    images: [
      "/images/kagi-1.svg",
      "/images/kagi-2.svg",
      "/images/kagi-3.svg",
      "/images/kagi-4.svg",
    ],
  },
  {
    id: "obake",
    accessLabel: "OBAKE_おばけ_IR_Signature_Reduction_Poncho",
    title: "OBAKE_おばけ_Ghost_IR_Signature_Reduction_Poncho",
    description:
      "OBAKE integrates high-reflectivity thermal suppression material into a military-surplus-style poncho with reinforced grommets and seams. It achieves up to 80% reduction in infrared signature at typical observation distances while retaining full utility as weather protection, shelter, or concealment aid. Suitable for operations where minimization of thermal detection is essential.",
    specs: [
      { label: "IR suppression", value: "Up to 80%" },
      { label: "Material", value: "Thermal-reflective fabric" },
      {
        label: "Construction",
        value: "Reinforced grommets, weatherproof seams",
      },
      {
        label: "Multi-use",
        value: "Weather protection, shelter, concealment",
      },
    ],
    images: [
      "/images/obake-1.svg",
      "/images/obake-2.svg",
      "/images/obake-3.svg",
      "/images/obake-4.svg",
    ],
  },
  {
    id: "noizu",
    accessLabel: "NOIZU_ノイズ_Acoustic_Privacy_Emitter",
    title: "NOIZU_ノイズ_Noise_Acoustic_Privacy_Emitter",
    description:
      "NOIZU generates a targeted broad-spectrum audio field from an integrated speaker, rendering nearby microphone-equipped devices (including commercial smartphones) incapable of capturing intelligible spoken content. The emitted noise masks human speech effectively against standard recording and post-processing techniques. Activation is immediate; designed for use in confined or sensitive conversational environments requiring audio obfuscation.",
    specs: [
      { label: "Coverage", value: "~10ft radius" },
      {
        label: "Effectiveness",
        value: "Masks speech against recording/processing",
      },
      { label: "Activation", value: "Immediate, single button" },
      {
        label: "Use case",
        value: "Sensitive conversations, privacy protection",
      },
    ],
    images: [
      "/images/noizu-1.svg",
      "/images/noizu-2.svg",
      "/images/noizu-3.svg",
      "/images/noizu-4.svg",
    ],
  },
];

export const classifiedProduct = {
  id: "shippo",
  title: "SHIPPO_しっぽ_Tail_[PROTOTYPE]",
  description:
    "Restricted Access Sector. SHIPPO designates the secure development portal for prototypes and assets under active evaluation. This multi-functional surveillance detection and countermeasure platform integrates electromagnetic spectrum analysis, GPS tracking detection, and cellular network monitoring into a unified handheld interface. Current development status: Alpha testing phase. Estimated public release: Q4 2026.",
  specs: [
    { label: "EM spectrum", value: "10MHz - 6GHz continuous sweep" },
    {
      label: "GPS tracker detection",
      value: "Passive RF signature analysis",
    },
    { label: "Cellular monitoring", value: "2G/3G/4G/5G band scanning" },
    { label: "Status", value: "Alpha prototype" },
  ],
};
