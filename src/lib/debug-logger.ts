/**
 * Debug Logger for BD Pharma Vista
 * Collects all logs and errors for debugging
 */

interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  data?: any;
  component?: string;
  url?: string;
}

class DebugLogger {
  private logs: LogEntry[] = [];
  private maxLogs = 1000; // Limit logs to prevent memory issues

  constructor() {
    this.setupGlobalErrorHandling();
    // Removed console interception to avoid recursion
  }

  private setupGlobalErrorHandling() {
    // Capture unhandled errors
    window.addEventListener('error', (event) => {
      this.log('error', 'Unhandled Error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack
      });
    });

    // Capture unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.log('error', 'Unhandled Promise Rejection', {
        reason: event.reason,
        promise: event.promise
      });
    });

    // Capture React errors
    window.addEventListener('error', (event) => {
      if (event.error?.componentStack) {
        this.log('error', 'React Component Error', {
          message: event.message,
          componentStack: event.error.componentStack,
          error: event.error
        });
      }
    });
  }


  private logInternal(level: LogEntry['level'], message: string, data?: any, component?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      component,
      url: window.location.href
    };

    this.logs.push(entry);

    // Keep only the latest logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }
  }

  public log(level: LogEntry['level'], message: string, data?: any, component?: string) {
    this.logInternal(level, message, data, component);
    // Removed console.log to avoid recursion
  }

  public getLogs(): LogEntry[] {
    return [...this.logs];
  }

  public getLogsByLevel(level: LogEntry['level']): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  public getRecentLogs(count: number = 50): LogEntry[] {
    return this.logs.slice(-count);
  }

  public clearLogs(): void {
    this.logs = [];
  }

  public exportLogs(): string {
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      logs: this.logs
    }, null, 2);
  }

  public downloadLogs(): void {
    const logs = this.exportLogs();
    const blob = new Blob([logs], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bd-pharma-debug-logs-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Component-specific logging
  public logComponent(component: string, message: string, data?: any) {
    this.log('debug', message, data, component);
  }

  public logError(component: string, message: string, error: any) {
    this.log('error', message, {
      error: error?.message || error,
      stack: error?.stack,
      component
    }, component);
  }

  public logRender(component: string, props?: any) {
    this.log('debug', `${component} rendered`, props, component);
  }

  public logMount(component: string) {
    this.log('info', `${component} mounted`, undefined, component);
  }

  public logUnmount(component: string) {
    this.log('info', `${component} unmounted`, undefined, component);
  }
}

// Create global instance
const debugLogger = new DebugLogger();

// Make it available globally for debugging
(window as any).debugLogger = debugLogger;

export default debugLogger;
