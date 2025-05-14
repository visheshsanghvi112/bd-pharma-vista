
/**
 * Utility functions for accessibility monitoring and improvements
 */

interface AccessibilityIssue {
  element: HTMLElement;
  issue: string;
  severity: 'high' | 'medium' | 'low';
  suggestion: string;
}

/**
 * Check for common accessibility issues in the DOM
 * @returns Array of accessibility issues
 */
export const checkAccessibility = (): AccessibilityIssue[] => {
  const issues: AccessibilityIssue[] = [];
  
  if (typeof document === 'undefined') {
    return issues;
  }
  
  // Check for images without alt text
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.hasAttribute('alt')) {
      issues.push({
        element: img as HTMLElement,
        issue: 'Image missing alt text',
        severity: 'high',
        suggestion: 'Add descriptive alt text to the image'
      });
    }
  });
  
  // Check for buttons without accessible names
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (!button.textContent && !button.getAttribute('aria-label') && !button.getAttribute('title')) {
      issues.push({
        element: button as HTMLElement,
        issue: 'Button without accessible name',
        severity: 'high',
        suggestion: 'Add text content, aria-label, or title attribute'
      });
    }
  });
  
  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousHeadingLevel = 0;
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.substring(1));
    
    if (previousHeadingLevel > 0 && level > previousHeadingLevel + 1) {
      issues.push({
        element: heading as HTMLElement,
        issue: `Skipped heading level: h${previousHeadingLevel} to h${level}`,
        severity: 'medium',
        suggestion: `Use proper heading hierarchy, don't skip levels`
      });
    }
    
    previousHeadingLevel = level;
  });
  
  return issues;
};

/**
 * Report accessibility issues to console (development only)
 */
export const reportAccessibilityIssues = (): void => {
  if (process.env.NODE_ENV !== 'production') {
    const issues = checkAccessibility();
    
    if (issues.length > 0) {
      console.group('Accessibility Issues');
      issues.forEach(issue => {
        console.log(`${issue.severity.toUpperCase()}: ${issue.issue}`);
        console.log(`Suggestion: ${issue.suggestion}`);
        console.log('Element:', issue.element);
        console.log('---');
      });
      console.groupEnd();
    } else {
      console.log('No accessibility issues detected.');
    }
  }
};

/**
 * Initialize accessibility monitoring
 */
export const initializeAccessibilityMonitoring = (): void => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        reportAccessibilityIssues();
      }, 2000);
    });
  }
};
