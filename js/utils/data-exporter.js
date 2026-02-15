/**
 * Export/Import Functionality
 * Save and load system configurations and results
 */

export class DataExporter {
    /**
     * Export current analysis to JSON
     */
    static exportToJSON(data) {
        const exportData = {
            version: '3.1',
            timestamp: new Date().toISOString(),
            ...data
        };

        const blob = new Blob(
            [JSON.stringify(exportData, null, 2)],
            { type: 'application/json' }
        );

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `control-system-analysis-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    /**
     * Export plot as PNG image
     */
    static async exportPlotAsPNG(plotId, filename = 'plot') {
        const plotDiv = document.getElementById(plotId);
        if (!plotDiv) {
            throw new Error(`Plot element ${plotId} not found`);
        }

        try {
            await Plotly.downloadImage(plotDiv, {
                format: 'png',
                width: 1200,
                height: 800,
                filename: `${filename}-${Date.now()}`
            });
        } catch (error) {
            console.error('Export failed:', error);
            throw new Error('Failed to export plot. Please try again.');
        }
    }

    /**
     * Export plot as SVG (vector graphics)
     */
    static async exportPlotAsSVG(plotId, filename = 'plot') {
        const plotDiv = document.getElementById(plotId);
        if (!plotDiv) {
            throw new Error(`Plot element ${plotId} not found`);
        }

        try {
            await Plotly.downloadImage(plotDiv, {
                format: 'svg',
                width: 1200,
                height: 800,
                filename: `${filename}-${Date.now()}`
            });
        } catch (error) {
            console.error('Export failed:', error);
            throw new Error('Failed to export plot. Please try again.');
        }
    }

    /**
     * Export results table as CSV
     */
    static exportTableAsCSV(tableData, filename = 'results') {
        const rows = tableData.map(row =>
            row.map(cell => `"${cell}"`).join(',')
        );

        const csv = rows.join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename}-${Date.now()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    }

    /**
     * Generate comprehensive PDF report (requires jsPDF)
     */
    static async exportPDFReport(data) {
        // This would require jsPDF library
        // Placeholder for future implementation
        console.warn('PDF export requires jsPDF library');
        alert('PDF export feature coming soon!');
    }

    /**
     * Import configuration from JSON file
     */
    static importFromJSON(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    resolve(data);
                } catch (error) {
                    reject(new Error('Invalid JSON file'));
                }
            };

            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    /**
     * Save to browser localStorage
     */
    static saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('localStorage save failed:', error);
            return false;
        }
    }

    /**
     * Load from browser localStorage
     */
    static loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('localStorage load failed:', error);
            return null;
        }
    }

    /**
     * Clear localStorage data
     */
    static clearLocalStorage(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('localStorage clear failed:', error);
            return false;
        }
    }
}
