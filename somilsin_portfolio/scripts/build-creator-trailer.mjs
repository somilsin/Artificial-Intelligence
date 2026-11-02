import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.resolve(root, "../my-creator-portfolio/assets");
const media = path.join(root, "public/media");
const work = path.join(root, "dist/trailer-work");
fs.mkdirSync(work, { recursive: true });
fs.mkdirSync(media, { recursive: true });
const font = process.env.CREATOR_TRAILER_FONT || "C:/Windows/Fonts/georgia.ttf";
fs.copyFileSync(font, path.join(work, "font.ttf"));
const scenes = [
  ["solitude", "A world", "WORTH FEELING"],
  ["connection", "Connection", "STORIES THAT CONNECT"],
  ["magnetar", "Magnetar", "COSMIC PERSPECTIVES"],
  ["aurora", "Aurora", "A LITTLE WONDER"],
  ["courage", "Courage", "ROOM FOR FEELING"],
  ["rebirth", "Rebirth", "EXPLORE MY CREATOR PORTFOLIO"],
];
const run = (args) => execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args], { cwd: work, stdio: "inherit" });
for (const [slug, title, label] of scenes) {
  const filter = "[0:v]split=2[bg][fg];[bg]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,gblur=sigma=35,eq=brightness=-0.40:saturation=0.4[back];[fg]scale=-2:640[front];[back][front]overlay=(W-w)/2:(H-h)/2," +
    "drawtext=fontfile=font.ttf:text='YoursTrulyHQ':fontsize=32:fontcolor=0xf5eee0:x=64:y=58," +
    `drawtext=fontfile=font.ttf:text='${title}':fontsize=44:fontcolor=0xf5eee0:x=64:y=540,` +
    `drawtext=fontfile=font.ttf:text='${label}':fontsize=17:fontcolor=0xd8c49e:x=64:y=605,` +
    "drawtext=fontfile=font.ttf:text='VISUAL STORIES BY SOMIL SINGH':fontsize=15:fontcolor=0xf5eee0:x=64:y=665," +
    "fade=t=in:st=0:d=0.3,fade=t=out:st=3.7:d=0.3,setsar=1";
  const input = slug === "solitude" ? ["-loop", "1", "-i", path.join(assets, "solitude-art.jpg")] : ["-i", path.join(assets, `${slug}.mp4`)];
  run([...input, "-t", "4", "-filter_complex", filter, "-an", "-r", "24", "-c:v", "libx264", "-preset", "fast", "-crf", "23", "-pix_fmt", "yuv420p", `${slug}.mp4`]);
}
fs.writeFileSync(path.join(work, "concat.txt"), scenes.map(([slug]) => `file '${slug}.mp4'`).join("\n"));
run(["-f", "concat", "-safe", "0", "-i", "concat.txt", "-c", "copy", "-movflags", "+faststart", path.join(media, "creator-trailer.mp4")]);
run(["-ss", "2", "-i", path.join(media, "creator-trailer.mp4"), "-frames:v", "1", "-q:v", "2", path.join(media, "creator-trailer-poster.jpg")]);
fs.writeFileSync(path.join(media, "creator-trailer-transcript.txt"), "YoursTrulyHQ. Visual stories by Somil Singh.\n\n24 second silent montage using existing reel excerpts.\n" + scenes.map(([, title, label], i) => `${i * 4}–${(i + 1) * 4} seconds: ${title}. ${label}.`).join("\n") + "\n\nDigitally created visuals with generative assistance.\nExplore the stories, AI explainers and collaboration details at https://somilsin.github.io/Artificial-Intelligence/my-creator-portfolio/\n");
const stamp = (sec) => `00:00:${String(sec).padStart(2, "0")}.000`;
fs.writeFileSync(path.join(media, "creator-trailer.vtt"), "WEBVTT\n\n" + scenes.map(([, title, label], i) => `${stamp(i * 4)} --> ${stamp((i + 1) * 4)}\nYoursTrulyHQ. ${title}. ${label}.\n`).join("\n"));
console.log("Creator trailer, poster, captions and transcript generated.");
