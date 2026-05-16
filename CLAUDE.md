# stock-analysis 项目指令

## 股票分析完成后的归档

每次股票分析（Phase 3 HTML生成）完成后，立即执行以下归档操作：

1. 从 `c:\Users\Sama\.claude\skills\stock-analysis-main\output\` 中找到生成的 `个股研究-{股票名称}.html` 文件
2. 在当前项目根目录创建归档目录：`{股票名称}{股票代码.SH/SZ}/`
3. 将 HTML 文件重命名为当前日期 `yyyyMMdd.html`（如 `20260516.html`）
4. 复制到该目录中（仅 HTML，不包含 MD）

示例：
```
stock-analysis/利通电子603629.SH/20260516.html
```
