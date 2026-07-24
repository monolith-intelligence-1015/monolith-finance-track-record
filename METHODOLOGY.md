# 🧠 Monolith Intelligence — Quantitative Screening Methodology

## Overview

Monolith Intelligence employs an automated multi-factor screening process designed to evaluate equities across U.S. exchanges (NYSE & NASDAQ). The screening pipeline combines quantitative factor filters with thematic strategy allocation overlays.

---

## 📊 Core Screening Factors

Our quantitative engine evaluates equities across five fundamental dimensions:

1. **Valuation Metrics**: Trailing Twelve Month (TTM) P/E, Forward P/E, EV/EBITDA, and Price-to-Free-Cash-Flow (P/FCF).
2. **Quality & Profitability**: Return on Equity (ROE), Return on Invested Capital (ROIC), and Operating Margins.
3. **Financial Strength**: Net Debt to EBITDA, Interest Coverage Ratio, and Debt-to-Equity balance sheet health.
4. **Growth & Momentum**: Quarterly EPS Growth Year-over-Year, Revenue Acceleration, and Relative Strength Index (RSI).
5. **Dividend Durability**: Dividend Yield, Free Cash Flow Dividend Payout Ratio, and 5-Year Dividend CAGR.

---

## 🎯 Thematic Strategy Overlays

Equities passing initial factor screens are categorized into three distinct strategy overlays:

### Strategy 1: High Yield & Value Anchor
- **Target Profile**: Defensive market leaders offering attractive dividend yields backed by strong free cash flows.
- **Screening Rules**:
  - Trailing P/E < 15.0x (or below 5-year historical average)
  - Dividend Yield > 3.0%
  - FCF Payout Ratio < 65.0%
  - ROE > 15.0%

### Strategy 2: Growth Velocity
- **Target Profile**: Market leaders benefiting from secular growth themes (Enterprise AI, Cloud Infrastructure, High-Performance Computing).
- **Screening Rules**:
  - Quarterly EPS Growth YoY > 25.0%
  - ROE > 30.0%
  - Forward P/E to Growth (PEG Ratio) < 1.8x
  - Sustained revenue acceleration over 4 consecutive quarters

### Strategy 3: Fortress Quality & Capital Protection
- **Target Profile**: AAA-balance-sheet stalwarts with strong economic moats capable of compounding through all market environments.
- **Screening Rules**:
  - Credit Rating: Investment Grade (BBB+ or higher)
  - ROIC > 20.0%
  - Gross Margins > 45.0%
  - Positive Free Cash Flow generation in 10 consecutive years

---

## 🛡️ Risk Trap & Avoid Classification

To protect capital, our screening engine explicitly flags **Avoid Candidates**:
- Unprofitable companies with high cash burn rates
- Net Debt / EBITDA > 4.5x with upcoming debt maturities
- Structural revenue declines exceeding -10% YoY
- Excessive dilution (>5% annual share count expansion)

---

## ⚖️ Continuous Live Performance Audit

- **Baseline Entry**: Recorded at Friday closing price prior to Sunday report publication.
- **Benchmarking**: Continuously compared against the S&P 500 Index (`^GSPC`).
- **Target & Stop-Loss Rules**: Volatility-adjusted stop-loss thresholds and multi-month duration targets.
