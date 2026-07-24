# 🏛️ Monolith Intelligence — Institutional Quantitative Research & Live Track Record

[![Live Website](https://img.shields.com/badge/Website-monolithintelligence.com-2F5233?style=for-the-badge&logo=google-chrome)](https://monolithintelligence.com)
[![Audit Status](https://img.shields.com/badge/Live_Audit-100%25_Transparent-8B6F3E?style=for-the-badge&logo=sqlite)](https://monolithintelligence.com/#performance-section)
[![Publish Schedule](https://img.shields.com/badge/Publish_Schedule-Every_Sunday_8:00_AM_EST-blue?style=for-the-badge&logo=githubactions)](https://github.com/monolith-intelligence-1015/monolith-finance-track-record/actions)
[![License: MIT](https://img.shields.com/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## 📌 Executive Summary

**Monolith Intelligence** is an automated quantitative market research publication. Every Sunday at 8:00 AM EST, our multi-agent quantitative screen system analyzes U.S. exchange equities (NYSE & NASDAQ), generates thematic strategy overlays, and publishes an institutional-grade research report.

Every position call, target price, stop-loss, and avoid recommendation is **continuously audited in real-time** against live market data and benchmarked against the **S&P 500 Index (`^GSPC`)**.

---

## 🎯 Live Track Record & Key Performance Indicators

- 🏆 **Win Rate**: **55.6%**
- 📈 **Alpha vs. S&P 500**: **+6.23%**
- ⏳ **Live Audit Window**: Continuous Weekly Cohorts
- 🎯 **Targets Hit**: **1** | 🛑 **Stop Loss Hit**: **0**

---

## 📖 Public Transparency & Immutable Commit History

We believe financial research requires **uncompromising accountability**. 

Every weekly recommendation in this repository is committed to Git **before the Monday market open**. Anyone can inspect `git log reports/` to verify timestamped proof that recommendations were published before market movements occurred.

```bash
# Verify timestamped publication history
git log --oneline reports/
```

---

## 🧠 Quantitative Methodologies

Our screening framework evaluates equities across three distinct thematic overlays:

1. **Strategy 1: High Yield & Value Anchor** — Defensive cash flow generators with low P/E multiples and covered dividend yields.
2. **Strategy 2: Growth Velocity** — High-momentum enterprise market leaders with accelerating earnings and high ROE.
3. **Strategy 3: Fortress Quality & Capital Protection** — AAA-balance-sheet anchors with persistent gross margin expansion and resilient return on invested capital (ROIC).

*Read our full mathematical framework in [METHODOLOGY.md](METHODOLOGY.md).*

---

## 📂 Repository Structure

```
├── .github/workflows/
│   └── sunday_weekly_publish.yml    # Automated Sunday 8:00 AM EST GitHub Action
├── index.html                       # Live institutional landing page
├── reports/                         # Immutable weekly markdown research reports
│   └── Institutional_Report_YYYY-MM-DD.md
├── data/
│   ├── track_record.sqlite          # SQLite accountability database
│   └── subscribers.sqlite           # Subscriber ledger
├── src/
│   ├── market_research_agent.py     # Quantitative screening engine
│   ├── performance_tracker.py       # Accountability audit & S&P 500 baseline engine
│   ├── update_weekly_landing.py     # HTML renderer & Chart.js pre-processor
│   └── email_weekly_report.py       # Automated subscriber email dispatcher
├── netlify/
│   └── functions/subscribe.js       # Netlify serverless email verification API
├── netlify.toml                     # Netlify security headers & API redirects
├── METHODOLOGY.md                   # Quantitative screening rules
├── TRACK_RECORD.md                  # Detailed audit log
└── DISCLAIMER.md                    # Regulatory publisher's exemption compliance
```

---

## ⚖️ Legal & Regulatory Disclaimer

*Monolith Intelligence is a general interest, broad-market financial news publication operating under the **Publisher's Exemption** of Section 202(a)(11)(D) of the U.S. Investment Advisers Act of 1940. We do not provide personalized financial, investment, or legal advice.*

*Read the full legal disclaimer in [DISCLAIMER.md](DISCLAIMER.md).*

---

## 📩 Subscribe to Sunday Reports

Get weekly institutional research reports delivered directly to your inbox every Sunday morning:
👉 **[Subscribe at monolithintelligence.com](https://monolithintelligence.com)**
