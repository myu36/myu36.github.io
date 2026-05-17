---
name: myu36-stock-nav-patterns
description: Coding patterns from myu36.github.io — 个股深度研究系统导航站
version: 1.0.0
source: local-git-analysis
analyzed_commits: 15
---

# 个股深度研究系统 · 导航站

## Commit Conventions

This project uses **unified short messages**:
- `update` — All changes use a single "update" prefix (no conventional commits)
- `Initial commit` — First commit

## Code Architecture

```
myu36.github.io/
├── index.html            # 导航首页（自包含，CSS 内联）
├── favicon.svg           # 网站图标
├── CLAUDE.md             # 项目指令（股票分析归档流程）
├── {CODE.SH.SZ}/         # 个股报告目录
│   └── {yyyymmdd}.html   # 单日深度研报（自包含 HTML）
├── 603629.SH/            # 示例：利通电子
├── 002929.SZ/            # 示例：润建股份
├── 002837.SZ/            # 示例：英维克
├── 002897.SZ/            # 示例：意华股份
└── 000062.SZ/            # 示例：深圳华强
```

### Key Architecture Decisions

- **index.html** is fully self-contained with inline `<style>` — no external CSS/JS files
- **Stock reports** (`{CODE.SH/SZ}/{yyyymmdd}.html`) are also self-contained, using CDN-loaded ECharts + MathJax
- **Dark theme** with CSS custom properties, gold accent color (`#d4a853`)

## Design System (index.html)

### CSS Variables
```css
--bg: #0c0f15; --card: #1a1c24; --border: #2a2d3a;
--gold: #d4a853; --gold-light: #e3c26d; --red: #f55656;
--text: #e8e9ec; --text-sec: #b0b3be; --text-muted: #7a7d8a;
--radius: 10px; --transition: 0.2s ease;
```

### Components
- **Stock card**: Card with icon (first Chinese character), name, code, date pills, arrow
- **Date pill**: `.date-pill` — pill-shaped badge, `.latest` variant for highlighted entry
- **Nav badge**: `.badge` — gradient red background for version indicator

### Interaction Patterns
- Cards are clickable via `onclick="location.href='...'"`
- Date pills stop event propagation (`event.stopPropagation()`)
- Hover: gold border glow, slight lift (`translateY(-1px)`)

## Workflows

### Adding a New Stock Report
1. Save report HTML to `{CODE.SH.SZ}/{yyyymmdd.html}`
2. If stock is new, add a stock card to `index.html`:
   - Icon: first Chinese character of stock name
   - Name: full Chinese stock name
   - Code: `{CODE}.{SH|SZ}`
3. If stock exists, add a new date pill to existing card
4. Mark the latest date pill with `class="date-pill latest"`

### Stock Report Self-Contained HTML
- ECharts loaded from CDN: `https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js`
- MathJax loaded from CDN for math rendering
- Light/dark mode toggle via `.light-mode` class on body

## Stock Directory Naming

```
{5 or 6-digit code}.{SH|SZ}/{yyyymmdd.html}
```

- Code format: 6-digit for SH stocks, 6-digit for SZ stocks
- Exchange suffix: `.SH` for Shanghai, `.SZ` for Shenzhen
- Date format: `yyyymmdd` (e.g., `20260517.html`)

## Testing Patterns

No tests present in this repository (static site).

## Project Configuration

- **CLAUDE.md**: Contains stock analysis archive workflow instructions
- **No package.json**: Pure static site, no build step
- **No CI/CD**: Static HTML hosted directly
