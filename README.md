# X Post Link Validator

## 中文

校验 JSON 文件中 X 帖子链接的格式，把结果写入另一个目录。需要 Node.js 22.18 或更新版本。在项目根目录用 PowerShell 运行以下命令，然后打开 `out/POST.json`。

```powershell
$env:MAKEFUN_BOT_DIR = "examples"
$env:MAKEFUN_OUTPUT_DIR = "out"
node main.ts
```

默认使用中文提示。设置 `MAKEFUN_UI_LANG=en` 可使用英文。

## English

Validate the formatting of an X post URL written in JSON. Requires Node.js 22.18 or newer. On macOS or Linux, run `MAKEFUN_BOT_DIR=examples MAKEFUN_OUTPUT_DIR=out node main.ts` from the repository root. The validated JSON is written to `out/POST.json`. The URL in the example is illustrative.

Set `MAKEFUN_UI_LANG=en` for English messages.

## 许可证 / License

MIT. See [LICENSE](LICENSE).
