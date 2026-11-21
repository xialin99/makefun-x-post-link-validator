# X 帖子链接校验器 / X Post Link Validator

## 中文

### 第一次使用

安装 [Node.js 的 LTS 长期支持版](https://nodejs.org/en/download)（22.18 或更新）。

1. 在仓库页面点 **Code → Download ZIP**，下载并解压。打开解压后含有 `main.ts` 的文件夹。
2. 在 Windows 文件资源管理器地址栏输入 `powershell` 后按回车。把下面的命令复制到打开的窗口并回车。

```powershell
$env:MAKEFUN_BOT_DIR = 'examples'
$env:MAKEFUN_OUTPUT_DIR = 'out'
node main.ts
```

打开 `out/POST.json` 查看格式校验后的示例链接。换成自己的链接时，可将 `examples/POST.json` 里的 `url` 替换成对应的 X 帖子地址。

校验 JSON 文件中 X 帖子链接的格式，把结果写入另一个目录。需要 Node.js 22.18 或更新版本。在项目根目录用 PowerShell 运行以下命令，然后打开 `out/POST.json`。

```powershell
$env:MAKEFUN_BOT_DIR = "examples"
$env:MAKEFUN_OUTPUT_DIR = "out"
node main.ts
```

默认使用中文提示。设置 `MAKEFUN_UI_LANG=en` 可使用英文。

## English

### First use

Install the [Node.js LTS release](https://nodejs.org/en/download), version 22.18 or newer.

1. Choose **Code → Download ZIP**, extract it, then open the extracted project folder.
2. On Windows, type `powershell` in the File Explorer address bar and press Enter. Run the commands below.

```powershell
$env:MAKEFUN_BOT_DIR = 'examples'
$env:MAKEFUN_OUTPUT_DIR = 'out'
node main.ts
```

打开 `out/POST.json` 查看格式校验后的示例链接。换成自己的链接时，可将 `examples/POST.json` 里的 `url` 替换成对应的 X 帖子地址。 macOS or Linux users can use the shell example further down.

Validate the formatting of an X post URL written in JSON. Requires Node.js 22.18 or newer. On macOS or Linux, run `MAKEFUN_BOT_DIR=examples MAKEFUN_OUTPUT_DIR=out node main.ts` from the repository root. The validated JSON is written to `out/POST.json`. The URL in the example is illustrative.

Set `MAKEFUN_UI_LANG=en` for English messages.

## 许可证 / License

MIT. See [LICENSE](LICENSE).
