/**
 * Mathematical Helper Functions
 * Complex number operations and polynomial utilities
 */

export class MathHelpers {
  /**
   * Complex number addition
   */
  static complexAdd(a, b) {
    return { 
      real: (a.real || 0) + (b.real || 0), 
      imag: (a.imag || 0) + (b.imag || 0) 
    };
  }

  /**
   * Complex number multiplication
   */
  static complexMultiply(a, b) {
    const ar = a.real || 0, ai = a.imag || 0;
    const br = b.real || 0, bi = b.imag || 0;
    return { 
      real: ar * br - ai * bi, 
      imag: ar * bi + ai * br 
    };
  }

  /**
   * Complex number division
   */
  static complexDivide(a, b) {
    const denom = b.real * b.real + b.imag * b.imag;
    if (Math.abs(denom) < 1e-10) return { real: 0, imag: 0 };
    return {
      real: (a.real * b.real + a.imag * b.imag) / denom,
      imag: (a.imag * b.real - a.real * b.imag) / denom
    };
  }

  /**
   * Complex number subtraction
   */
  static complexSubtract(a, b) {
    return {
      real: (a.real || a.re || 0) - (b.real || b.re || 0),
      imag: (a.imag || a.im || 0) - (b.imag || b.im || 0)
    };
  }

  /**
   * Complex number magnitude
   */
  static complexMagnitude(c) {
    return Math.sqrt(c.real * c.real + c.imag * c.imag);
  }

  /**
   * Complex number phase (in radians)
   */
  static complexPhase(c) {
    return Math.atan2(c.imag, c.real);
  }

  /**
   * Complex number power
   */
  static complexPower(c, n) {
    if (n === 0) return { real: 1, imag: 0 };
    if (n === 1) return c;

    let result = { real: 1, imag: 0 };
    for (let i = 0; i < n; i++) {
      result = this.complexMultiply(result, c);
    }
    return result;
  }

  /**
   * Check if two numbers are approximately equal
   */
  static approximatelyEquals(a, b, tolerance = 1e-8) {
    return Math.abs(a - b) < tolerance;
  }

  /**
   * Parse coefficient string to array
   */
  static parseCoeffs(str) {
    try {
      return str.split(',')
        .map(s => parseFloat(s.trim()))
        .filter(n => !isNaN(n));
    } catch (e) {
      return [];
    }
  }

  /**
   * Convert polynomial coefficients to string representation
   */
  static polynomialToString(coeffs, variable = 's') {
    const n = coeffs.length - 1;
    let terms = [];
    
    coeffs.forEach((c, i) => {
      if (Math.abs(c) < 1e-10) return;
      const power = n - i;
      let term = '';

      if (c < 0) {
        term += (terms.length === 0 ? '-' : ' - ');
        if (Math.abs(c) !== 1 || power === 0) term += Math.abs(c).toFixed(3);
      } else {
        term += (terms.length === 0 ? '' : ' + ');
        if (Math.abs(c) !== 1 || power === 0) term += c.toFixed(3);
      }

      if (power > 1) term += `${variable}^${power}`;
      else if (power === 1) term += `${variable}`;

      terms.push(term);
    });

    return terms.length ? terms.join('') : '0';
  }

  /**
   * Evaluate polynomial at complex point
   */
  static evaluatePolynomial(coeffs, x) {
    const xComplex = { 
      real: x.real || x.re || 0, 
      imag: x.imag || x.im || 0 
    };
    let result = { real: 0, imag: 0 };
    const n = coeffs.length - 1;

    for (let i = 0; i < coeffs.length; i++) {
      const power = n - i;
      const term = this.complexPower(xComplex, power);
      const scaled = this.complexMultiply({ real: coeffs[i], imag: 0 }, term);
      result = this.complexAdd(result, scaled);
    }

    return result;
  }

  /**
   * Create time array for simulations
   */
  static createTimeArray(endTime = 15, stepSize = 0.05) {
    const points = Math.ceil(endTime / stepSize) + 1;
    return Array.from({ length: points }, (_, i) => i * stepSize);
  }

  /**
   * Create logarithmic frequency array
   */
  static createFrequencyArray(minFreq = 0.1, maxFreq = 1000, pointsPerDecade = 50) {
    minFreq = Number(minFreq) || 0.1;
    maxFreq = Number(maxFreq) || 1000;
    pointsPerDecade = Number(pointsPerDecade) || 50;

    if (minFreq <= 0) minFreq = 0.1;
    if (maxFreq <= minFreq) maxFreq = Math.max(minFreq * 10, minFreq + 1);

    const logMin = Math.log10(minFreq);
    const logMax = Math.log10(maxFreq);
    const totalPoints = Math.max(2, Math.ceil((logMax - logMin) * pointsPerDecade));
    const pts = Math.max(2, totalPoints);

    return Array.from({ length: pts }, (_, i) => {
      const frac = (i / (pts - 1));
      const logFreq = logMin + frac * (logMax - logMin);
      return Math.pow(10, logFreq);
    });
  }
}
