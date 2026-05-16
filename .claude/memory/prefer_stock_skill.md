---
name: prefer-stock-analysis-skill
description: 股票分析请求默认使用 stock-analysis-main skill
metadata:
  type: feedback
---

When the user says "分析XXX股票" or any stock analysis request, default to using the `stock-analysis-main` skill without asking.

**Why:** User explicitly stated this preference — they want stock analysis routed through the dedicated skill every time.

**How to apply:** On any stock analysis request (分析股票, analyze stock, etc.), invoke Skill with "stock-analysis-main" immediately. Do not ask for confirmation unless the request is ambiguous.
