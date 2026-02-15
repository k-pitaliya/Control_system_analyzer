/**
 * Configuration Constants
 * Centralized configuration for the analyzer
 */

export const CONFIG = {
    // Numerical tolerances
    TOLERANCE: {
        ZERO: 1e-12,
        EQUALITY: 1e-8,
        CONVERGENCE: 1e-10,
        SETTLING: 0.02  // 2% settling criterion
    },

    // Simulation parameters
    SIMULATION: {
        DEFAULT_END_TIME: 15,
        DEFAULT_STEP_SIZE: 0.05,
        MIN_POINTS: 2,
        MAX_ITERATIONS: 100
    },

    // Frequency analysis
    FREQUENCY: {
        DEFAULT_MIN: 0.1,
        DEFAULT_MAX: 1000,
        POINTS_PER_DECADE: 50,
        MIN_FREQ_LIMIT: 0.01
    },

    // Root locus
    ROOT_LOCUS: {
        DEFAULT_K_MIN: 0,
        DEFAULT_K_MAX: 100,
        DEFAULT_STEPS: 200,
        MATCH_THRESHOLD_FACTOR: 0.5
    },

    // Plot dimensions
    PLOT: {
        MIN_HEIGHT: {
            TIME: 420,
            FREQ: 520,
            PZ: 360
        }
    },

    // Colors (matching CSS variables)
    COLORS: {
        PRIMARY: '#8b5cf6',
        PRIMARY_LIGHT: '#a78bfa',
        PRIMARY_DARK: '#7c3aed',
        GRADIENT: ['#6366f1', '#8b5cf6', '#a855f7'],

        // Status colors
        STABLE: '#4ade80',
        UNSTABLE: '#f87171',
        MARGINAL: '#fbbf24',

        // Plot colors
        PLOT_PALETTE: ['#1d4ed8', '#0ea5a4', '#7c3aed', '#ef4444', '#f59e0b', '#059669'],

        // Background
        BG_DARK: '#0f0f1a',
        BG_CARD: 'rgba(22, 22, 35, 0.85)',

        // Text
        TEXT_PRIMARY: '#f1f5f9',
        TEXT_SECONDARY: '#94a3b8',
        TEXT_MUTED: '#64748b'
    },

    // System types
    SYSTEM_ORDER: {
        FIRST: 'first',
        SECOND: 'second',
        HIGHER: 'higher'
    },

    // Input types
    INPUT_TYPE: {
        STEP: 'step',
        RAMP: 'ramp',
        PARABOLIC: 'parabolic',
        IMPULSE: 'impulse',
        SINUSOIDAL: 'sinusoidal'
    },

    // Plot types
    PLOT_TYPE: {
        BODE: 'bode',
        NYQUIST: 'nyquist',
        POLAR: 'polar',
        ROOT_LOCUS: 'root-locus'
    },

    // Damping categories
    DAMPING: {
        UNDERDAMPED: 'underdamped',    // ζ < 1
        CRITICALLY_DAMPED: 'critical',  // ζ = 1
        OVERDAMPED: 'overdamped'        // ζ > 1
    },

    // Stability margins thresholds
    STABILITY_MARGINS: {
        GOOD_PM: 45,      // degrees
        ACCEPTABLE_PM: 30, // degrees
        GOOD_GM: 6        // dB
    },

    // UI timing
    UI: {
        DEBOUNCE_DELAY: 80,
        ZPK_UPDATE_DELAY: 120,
        ANIMATION_DURATION: 400
    },

    // Error messages
    ERRORS: {
        INVALID_COEFFS: 'Invalid coefficient format. Please use comma-separated numbers.',
        COMPUTATION_FAILED: 'Computation failed. Please check your inputs.',
        NO_ROOTS_FOUND: 'Could not find polynomial roots.',
        UNSTABLE_SYSTEM: 'Warning: System appears to be unstable.'
    }
};

// Freeze to prevent modifications
Object.freeze(CONFIG);
