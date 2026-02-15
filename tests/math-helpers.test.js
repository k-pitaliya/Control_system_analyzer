/**
 * Unit Tests for Math Helpers
 */

import { describe, it, expect } from 'vitest';
import { MathHelpers } from '../js/utils/math-helpers.js';

describe('MathHelpers - Complex Number Operations', () => {
    describe('complexAdd', () => {
        it('should add two complex numbers correctly', () => {
            const a = { real: 3, imag: 4 };
            const b = { real: 1, imag: 2 };
            const result = MathHelpers.complexAdd(a, b);

            expect(result.real).toBe(4);
            expect(result.imag).toBe(6);
        });

        it('should handle zero imaginary parts', () => {
            const a = { real: 5, imag: 0 };
            const b = { real: 3, imag: 0 };
            const result = MathHelpers.complexAdd(a, b);

            expect(result.real).toBe(8);
            expect(result.imag).toBe(0);
        });
    });

    describe('complexMultiply', () => {
        it('should multiply two complex numbers correctly', () => {
            const a = { real: 2, imag: 3 };
            const b = { real: 4, imag: 5 };
            // (2+3i)(4+5i) = 8+10i+12i+15i² = 8+22i-15 = -7+22i
            const result = MathHelpers.complexMultiply(a, b);

            expect(result.real).toBe(-7);
            expect(result.imag).toBe(22);
        });

        it('should handle multiplication by real number', () => {
            const a = { real: 3, imag: 4 };
            const b = { real: 2, imag: 0 };
            const result = MathHelpers.complexMultiply(a, b);

            expect(result.real).toBe(6);
            expect(result.imag).toBe(8);
        });
    });

    describe('complexDivide', () => {
        it('should divide two complex numbers correctly', () => {
            const a = { real: 1, imag: 2 };
            const b = { real: 3, imag: 4 };
            // (1+2i)/(3+4i) = (1+2i)(3-4i)/(9+16) = (3-4i+6i-8i²)/25 = (11+2i)/25
            const result = MathHelpers.complexDivide(a, b);

            expect(result.real).toBeCloseTo(0.44);
            expect(result.imag).toBeCloseTo(0.08);
        });

        it('should handle division by zero gracefully', () => {
            const a = { real: 1, imag: 2 };
            const b = { real: 0, imag: 0 };
            const result = MathHelpers.complexDivide(a, b);

            expect(result.real).toBe(0);
            expect(result.imag).toBe(0);
        });
    });

    describe('complexMagnitude', () => {
        it('should calculate magnitude correctly', () => {
            const c = { real: 3, imag: 4 };
            const magnitude = MathHelpers.complexMagnitude(c);

            expect(magnitude).toBe(5); // √(3²+4²) = 5
        });

        it('should handle zero magnitude', () => {
            const c = { real: 0, imag: 0 };
            const magnitude = MathHelpers.complexMagnitude(c);

            expect(magnitude).toBe(0);
        });
    });

    describe('complexPhase', () => {
        it('should calculate phase correctly for first quadrant', () => {
            const c = { real: 1, imag: 1 };
            const phase = MathHelpers.complexPhase(c);

            expect(phase).toBeCloseTo(Math.PI / 4); // 45 degrees
        });

        it('should calculate phase correctly for second quadrant', () => {
            const c = { real: -1, imag: 1 };
            const phase = MathHelpers.complexPhase(c);

            expect(phase).toBeCloseTo(3 * Math.PI / 4); // 135 degrees
        });
    });
});

describe('MathHelpers - Polynomial Operations', () => {
    describe('parseCoeffs', () => {
        it('should parse comma-separated coefficients', () => {
            const result = MathHelpers.parseCoeffs('1, 2, 3, 4');
            expect(result).toEqual([1, 2, 3, 4]);
        });

        it('should handle spaces and decimals', () => {
            const result = MathHelpers.parseCoeffs('1.5, -2.3, 0, 4.7');
            expect(result).toEqual([1.5, -2.3, 0, 4.7]);
        });

        it('should filter out invalid values', () => {
            const result = MathHelpers.parseCoeffs('1, abc, 3');
            expect(result).toEqual([1, 3]);
        });
    });

    describe('polynomialToString', () => {
        it('should format polynomial correctly', () => {
            const coeffs = [1, -3, 2]; // s² - 3s + 2
            const result = MathHelpers.polynomialToString(coeffs, 's');

            expect(result).toContain('s^2');
            expect(result).toContain('3');
            expect(result).toContain('2');
        });

        it('should handle zero coefficients', () => {
            const coeffs = [1, 0, 2]; // s² + 2
            const result = MathHelpers.polynomialToString(coeffs, 's');

            expect(result).toContain('s^2');
            expect(result).toContain('2');
            // The result is "s^2 + 2.000" which contains '0' in "2.000"
            // Check that middle term with zero coefficient is skipped
            expect(result).not.toMatch(/\s[+\-]\s*0\.0*\s/);
        });
    });

    describe('evaluatePolynomial', () => {
        it('should evaluate polynomial at real point', () => {
            const coeffs = [1, -3, 2]; // x² - 3x + 2
            const x = { real: 2, imag: 0 };
            const result = MathHelpers.evaluatePolynomial(coeffs, x);
            // 2² - 3(2) + 2 = 4 - 6 + 2 = 0

            expect(result.real).toBeCloseTo(0);
            expect(result.imag).toBeCloseTo(0);
        });

        it('should evaluate polynomial at complex point', () => {
            const coeffs = [1, 0, 1]; // x² + 1
            const x = { real: 0, imag: 1 }; // i
            const result = MathHelpers.evaluatePolynomial(coeffs, x);
            // i² + 1 = -1 + 1 = 0

            expect(result.real).toBeCloseTo(0);
            expect(result.imag).toBeCloseTo(0);
        });
    });
});

describe('MathHelpers - Utility Functions', () => {
    describe('approximatelyEquals', () => {
        it('should return true for nearly equal numbers', () => {
            // Default tolerance is 1e-8, so 1e-9 difference should pass
            expect(MathHelpers.approximatelyEquals(1.000000001, 1.0)).toBe(true);
        });

        it('should return false for different numbers', () => {
            expect(MathHelpers.approximatelyEquals(1.1, 1.0)).toBe(false);
        });

        it('should respect custom tolerance', () => {
            expect(MathHelpers.approximatelyEquals(1.01, 1.0, 0.1)).toBe(true);
            expect(MathHelpers.approximatelyEquals(1.01, 1.0, 0.001)).toBe(false);
        });
    });

    describe('createTimeArray', () => {
        it('should create array with correct length', () => {
            const t = MathHelpers.createTimeArray(10, 0.1);
            expect(t.length).toBe(101); // 0 to 10 in steps of 0.1
        });

        it('should have correct start and end values', () => {
            const t = MathHelpers.createTimeArray(5, 0.5);
            expect(t[0]).toBe(0);
            expect(t[t.length - 1]).toBeCloseTo(5);
        });
    });

    describe('createFrequencyArray', () => {
        it('should create logarithmic array', () => {
            const freq = MathHelpers.createFrequencyArray(0.1, 100, 10);

            expect(freq[0]).toBeCloseTo(0.1);
            expect(freq[freq.length - 1]).toBeCloseTo(100);
            expect(freq.length).toBeGreaterThan(2);
        });

        it('should handle invalid inputs gracefully', () => {
            const freq = MathHelpers.createFrequencyArray(-1, 100);
            expect(freq[0]).toBeGreaterThan(0);
        });
    });
});
