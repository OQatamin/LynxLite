// ===== SIMPLE FEEDBACK STORAGE SYSTEM WITH GOOGLE SHEETS INTEGRATION =====

class FeedbackStorage {
  constructor() {
    this.storageKey = 'lynx-dashboard-feedback';
    this.feedback = this.loadFeedback();
    this.sheetDbApiUrl = 'https://sheetdb.io/api/v1/chidcl1dgojd4';
    this.googleSheetUrl = 'https://docs.google.com/spreadsheets/d/1S7MN1U67Uq-yHBog2WitJxGEGuJoVGanG7kk-4kzrg4/edit#gid=0';
  }

  // Load feedback from localStorage
  loadFeedback() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading feedback:', error);
      return [];
    }
  }

  // Save feedback to localStorage and Google Sheets
  async saveFeedback(feedbackData) {
    try {
      // Add to local storage first
      this.feedback.push(feedbackData);
      localStorage.setItem(this.storageKey, JSON.stringify(this.feedback));
      
      // Submit to Google Sheets via SheetDB
      const success = await this.submitToGoogleSheets(feedbackData);
      if (success) {
        console.log('Feedback saved locally and submitted to Google Sheets');
        return true;
      } else {
        console.warn('Feedback saved locally but failed to submit to Google Sheets');
        return true; // Still return true since local save succeeded
      }
    } catch (error) {
      console.error('Error saving feedback:', error);
      return false;
    }
  }

  // Get all feedback
  getAllFeedback() {
    return this.feedback;
  }

  // Export feedback to JSON file
  exportFeedback() {
    const dataStr = JSON.stringify(this.feedback, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `feedback-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  // Submit feedback to Google Sheets via SheetDB.io
  async submitToGoogleSheets(feedbackData) {
    try {
      // Format data for SheetDB (column names must match your Google Sheet headers exactly)
      const sheetData = {
        Name: feedbackData.name,
        Feedback: feedbackData.note
      };
      
      const response = await fetch(this.sheetDbApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });
      
      if (response.ok) {
        console.log('Successfully submitted to Google Sheets');
        return true;
      } else {
        console.error('Failed to submit to Google Sheets:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  }

  // Clear all feedback
  clearAllFeedback() {
    this.feedback = [];
    localStorage.removeItem(this.storageKey);
  }
}

// Create global instance
window.feedbackStorage = new FeedbackStorage();
