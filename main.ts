import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const english = process.env.MAKEFUN_UI_LANG === 'en';
const root = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const inputPath = join(root, 'POST.json');
const input = readFileSync(inputPath, 'utf8');
let post: unknown;
try {
  post = JSON.parse(input);
} catch (error) {
  if (!(error instanceof SyntaxError)) {
    throw error;
  }
  throw new Error(english ? `Invalid JSON in ${inputPath}: ${error.message}` : `${inputPath} 中的 JSON 无效：${error.message}`);
}

const statusUrl = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+(?![\s\S])/;

if (
  post === null ||
  typeof post !== 'object' ||
  !('url' in post) ||
  typeof post.url !== 'string' ||
  !statusUrl.test(post.url)
) {
  throw new Error(english
    ? 'POST.json must contain a url string in the form https://x.com/<handle>/status/<id>'
    : 'POST.json 必须包含 url 字符串，格式为 https://x.com/<用户名>/status/<编号>');
}

mkdirSync(output, { recursive: true });
writeFileSync(join(output, 'POST.json'), JSON.stringify({ url: post.url }) + '\n');
