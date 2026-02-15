/**
 * Polynomial Root Finding Algorithms
 * Includes analytical and numerical methods
 */

import { MathHelpers } from './math-helpers.js';

export class RootFinder {
    /**
     * Find roots of polynomial with given coefficients
     * Automatically selects best method based on degree
     */
    static findRoots(coeffs) {
        // Remove leading zeros
        while (coeffs.length > 0 && Math.abs(coeffs[0]) < 1e-12) {
            coeffs = coeffs.slice(1);
        }

        if (coeffs.length === 0) return [];
        if (coeffs.length === 1) return [];
        if (coeffs.length === 2) return this.solveLinear(coeffs);
        if (coeffs.length === 3) return this.solveQuadratic(coeffs);

        // For higher-order polynomials, use Durand-Kerner
        return this.durandKerner(coeffs);
    }

    /**
     * Solve linear equation: ax + b = 0
     */
    static solveLinear(coeffs) {
        const [a, b] = coeffs;
        if (Math.abs(a) < 1e-12) return [];
        return [{ re: -b / a, im: 0 }];
    }

    /**
     * Solve quadratic equation: ax² + bx + c = 0
     */
    static solveQuadratic(coeffs) {
        const [a, b, c] = coeffs;
        const discriminant = b * b - 4 * a * c;

        if (discriminant >= 0) {
            const sqrtD = Math.sqrt(discriminant);
            return [
                { re: (-b + sqrtD) / (2 * a), im: 0 },
                { re: (-b - sqrtD) / (2 * a), im: 0 }
            ];
        } else {
            const real = -b / (2 * a);
            const imag = Math.sqrt(-discriminant) / (2 * a);
            return [
                { re: real, im: imag },
                { re: real, im: -imag }
            ];
        }
    }

    /**
     * Durand-Kerner iterative method for polynomial roots
     * Efficient for higher-order polynomials
     */
    static durandKerner(coeffs, maxIterations = 100, tolerance = 1e-10) {
        const n = coeffs.length - 1;
        if (n <= 0) return [];

        // Normalize polynomial (make leading coefficient 1)
        const a0 = coeffs[0];
        if (Math.abs(a0) < 1e-12) return [];
        const normalized = coeffs.map(c => c / a0);

        // Initial guesses: equally spaced on a circle
        const roots = [];
        const radius = Math.max(1, Math.abs(normalized[normalized.length - 1]));

        for (let i = 0; i < n; i++) {
            const angle = (2 * Math.PI * i) / n;
            roots.push({
                real: radius * Math.cos(angle),
                imag: radius * Math.sin(angle)
            });
        }

        // Iterate using Durand-Kerner formula
        for (let iter = 0; iter < maxIterations; iter++) {
            let maxChange = 0;
            const newRoots = [];

            for (let i = 0; i < n; i++) {
                const r = {
                    real: roots[i].real || roots[i].re || 0,
                    imag: roots[i].imag || roots[i].im || 0
                };

                let numerator = MathHelpers.evaluatePolynomial(normalized, r);
                let denominator = { real: 1, imag: 0 };

                for (let j = 0; j < n; j++) {
                    if (i !== j) {
                        const rj = {
                            real: roots[j].real || roots[j].re || 0,
                            imag: roots[j].imag || roots[j].im || 0
                        };
                        const diff = MathHelpers.complexSubtract(r, rj);
                        denominator = MathHelpers.complexMultiply(denominator, diff);
                    }
                }

                const correction = MathHelpers.complexDivide(numerator, denominator);
                const newRoot = MathHelpers.complexSubtract(r, correction);

                const change = MathHelpers.complexMagnitude(correction);
                maxChange = Math.max(maxChange, change);
                newRoots.push(newRoot);
            }

            roots.splice(0, roots.length, ...newRoots);

            if (maxChange < tolerance) break;
        }

        return roots.map(r => ({
            re: r.real || r.re || 0,
            im: r.imag || r.im || 0
        }));
    }

    /**
     * Check if Math.js library is available and working
     */
    static isMathJsAvailable() {
        try {
            return typeof math !== 'undefined' &&
                (math.polynomialRoot || math.roots);
        } catch {
            return false;
        }
    }

    /**
     * Use Math.js if available, otherwise fallback to built-in
     */
    static findRootsWithFallback(coeffs) {
        if (this.isMathJsAvailable()) {
            try {
                const roots = math.polynomialRoot ?
                    math.polynomialRoot(...coeffs.slice(1), coeffs[0]) :
                    math.roots(coeffs);
                return roots.map(r => ({
                    re: r.re || r.real || r,
                    im: r.im || r.imag || 0
                }));
            } catch (e) {
                console.warn('Math.js failed, using fallback:', e);
            }
        }
        return this.findRoots(coeffs);
    }
}
