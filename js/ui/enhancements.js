/**
 * Enhanced UI Components
 * Export buttons, comparison mode, and advanced features
 */

import { DataExporter } from '../utils/data-exporter.js';

export class UIEnhancements {
    /**
     * Add export buttons to plot containers
     */
    static addExportButtons(plotId, plotType = 'plot') {
        const plotDiv = document.getElementById(plotId);
        if (!plotDiv) return;

        // Check if buttons already exist
        if (plotDiv.querySelector('.export-controls')) return;

        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'export-controls';
        controlsDiv.innerHTML = `
      <button class="export-btn export-png" data-plot="${plotId}" title="Export as PNG">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        PNG
      </button>
      <button class="export-btn export-svg" data-plot="${plotId}" title="Export as SVG">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        SVG
      </button>
    `;

        plotDiv.style.position = 'relative';
        plotDiv.appendChild(controlsDiv);

        // Add event listeners
        controlsDiv.querySelector('.export-png').addEventListener('click', async () => {
            try {
                await DataExporter.exportPlotAsPNG(plotId, plotType);
                this.showToast('Plot exported successfully!', 'success');
            } catch (error) {
                this.showToast(error.message, 'error');
            }
        });

        controlsDiv.querySelector('.export-svg').addEventListener('click', async () => {
            try {
                await DataExporter.exportPlotAsSVG(plotId, plotType);
                this.showToast('Plot exported successfully!', 'success');
            } catch (error) {
                this.showToast(error.message, 'error');
            }
        });
    }

    /**
     * Show toast notification
     */
    static showToast(message, type = 'info') {
        // Remove existing toast
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">${this.getToastIcon(type)}</span>
        <span class="toast-message">${message}</span>
      </div>
    `;

        document.body.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /**
     * Get icon for toast type
     */
    static getToastIcon(type) {
        const icons = {
            success: '✓',
            error: '✗',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }

    /**
     * Add comparison mode toggle
     */
    static addComparisonMode(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const comparisonDiv = document.createElement('div');
        comparisonDiv.className = 'comparison-mode-controls';
        comparisonDiv.innerHTML = `
      <label class="comparison-toggle">
        <input type="checkbox" id="enable-comparison">
        <span>Enable Comparison Mode</span>
      </label>
      <div id="comparison-systems" class="hidden">
        <button class="secondary-btn" id="add-system">+ Add System</button>
        <div id="system-list"></div>
      </div>
    `;

        container.insertBefore(comparisonDiv, container.firstChild);

        // Add event listener
        document.getElementById('enable-comparison').addEventListener('change', (e) => {
            const systemsDiv = document.getElementById('comparison-systems');
            if (e.target.checked) {
                systemsDiv.classList.remove('hidden');
            } else {
                systemsDiv.classList.add('hidden');
            }
        });
    }

    /**
     * Add keyboard shortcuts help modal
     */
    static addKeyboardShortcuts() {
        const modal = document.createElement('div');
        modal.id = 'shortcuts-modal';
        modal.className = 'modal hidden';
        modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Keyboard Shortcuts</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="shortcut-list">
            <div class="shortcut-item">
              <kbd>Ctrl</kbd> + <kbd>E</kbd>
              <span>Export current plot</span>
            </div>
            <div class="shortcut-item">
              <kbd>Ctrl</kbd> + <kbd>S</kbd>
              <span>Save configuration</span>
            </div>
            <div class="shortcut-item">
              <kbd>Ctrl</kbd> + <kbd>R</kbd>
              <span>Run analysis</span>
            </div>
            <div class="shortcut-item">
              <kbd>Tab</kbd>
              <span>Switch between tabs</span>
            </div>
            <div class="shortcut-item">
              <kbd>?</kbd>
              <span>Show this help</span>
            </div>
          </div>
        </div>
      </div>
    `;

        document.body.appendChild(modal);

        // Add keyboard listener
        document.addEventListener('keydown', (e) => {
            if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
                this.toggleModal('shortcuts-modal');
            }
        });

        // Close button
        modal.querySelector('.modal-close').addEventListener('click', () => {
            this.toggleModal('shortcuts-modal');
        });
    }

    /**
     * Toggle modal visibility
     */
    static toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.toggle('hidden');
        }
    }

    /**
     * Add loading overlay
     */
    static showLoading(message = 'Computing...') {
        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
      <div class="loading-content">
        <div class="loading-spinner-large"></div>
        <p>${message}</p>
      </div>
    `;
        document.body.appendChild(overlay);
    }

    /**
     * Hide loading overlay
     */
    static hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) overlay.remove();
    }

    /**
     * Add progress bar for long computations
     */
    static updateProgress(percent, message = '') {
        let progressBar = document.getElementById('progress-bar');

        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'progress-bar';
            progressBar.className = 'progress-bar';
            progressBar.innerHTML = `
        <div class="progress-fill"></div>
        <div class="progress-text"></div>
      `;
            document.body.appendChild(progressBar);
        }

        const fill = progressBar.querySelector('.progress-fill');
        const text = progressBar.querySelector('.progress-text');

        fill.style.width = `${percent}%`;
        text.textContent = message || `${Math.round(percent)}%`;

        if (percent >= 100) {
            setTimeout(() => progressBar.remove(), 500);
        }
    }
}
