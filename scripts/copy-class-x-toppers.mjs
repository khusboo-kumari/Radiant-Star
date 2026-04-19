/**
 * Why: Cursor chat assets live under `.cursor/projects/.../assets/` with long names; the site expects short paths under `public/board-toppers/class-x-2026/`.
 * What: Copies the three official Class X 2025–26 topper PNGs into the public folder with stable filenames.
 * Where: Run manually from repo root: `node scripts/copy-class-x-toppers.mjs`
 * When: After new topper images are generated in chat, or on a fresh clone before deploy.
 * Who: Maintainers.
 * How: `fs.copyFileSync` from known source basenames to `public/board-toppers/class-x-2026/*.png`.
 */
import fs from "node:fs";
import path from "node:path";

const assetsDir =
  "C:\\Users\\khusboo kumari\\.cursor\\projects\\c-Users-khusboo-kumari-Desktop-Radiant\\assets";
const destDir = path.join(process.cwd(), "public", "board-toppers", "class-x-2026");

const pairs = [
  [
    "c__Users_khusboo_kumari_AppData_Roaming_Cursor_User_workspaceStorage_1a7f186220f61413ae5cf7cc31c34749_images_ChatGPT_Image_Apr_19__2026__09_45_01_PM-6c6c49e8-9f6e-4bde-a92d-13f26ca4dafa.png",
    "anmol-basnet.png",
  ],
  [
    "c__Users_khusboo_kumari_AppData_Roaming_Cursor_User_workspaceStorage_1a7f186220f61413ae5cf7cc31c34749_images_ChatGPT_Image_Apr_19__2026__09_46_17_PM-00a93f71-6d18-4785-b813-2fe24f916aff.png",
    "neha-oli.png",
  ],
  [
    "c__Users_khusboo_kumari_AppData_Roaming_Cursor_User_workspaceStorage_1a7f186220f61413ae5cf7cc31c34749_images_ChatGPT_Image_Apr_19__2026__09_48_10_PM-cd7ca341-6007-47b9-ac26-9e61badc8f07.png",
    "khusi-basnet.png",
  ],
];

fs.mkdirSync(destDir, { recursive: true });
for (const [srcName, destName] of pairs) {
  const from = path.join(assetsDir, srcName);
  const to = path.join(destDir, destName);
  if (!fs.existsSync(from)) {
    console.error("Missing source:", from);
    process.exitCode = 1;
    continue;
  }
  fs.copyFileSync(from, to);
  console.log("Copied", destName);
}
