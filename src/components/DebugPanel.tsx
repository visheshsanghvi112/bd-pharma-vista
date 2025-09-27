import { useState, useEffect } from 'react';
import debugLogger from '@/lib/debug-logger';

const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const updateLogs = () => {
      setLogs(debugLogger.getRecentLogs(20));
    };

    // Update logs every second
    const interval = setInterval(updateLogs, 1000);
    updateLogs(); // Initial load

    return () => clearInterval(interval);
  }, []);

  const downloadLogs = () => {
    debugLogger.downloadLogs();
  };

  const clearLogs = () => {
    debugLogger.clearLogs();
    setLogs([]);
  };

  // Only show in development mode
  if (import.meta.env.PROD) {
    return null; // Don't show in production
  }

  return (
    <>
      {/* Debug Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        title="Debug Panel"
      >
        🐛
      </button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-96 h-96 bg-black text-white p-4 rounded-lg shadow-2xl overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-bold">Debug Logs</h3>
            <div className="flex gap-2">
              <button
                onClick={downloadLogs}
                className="text-xs bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
              >
                Download
              </button>
              <button
                onClick={clearLogs}
                className="text-xs bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs bg-gray-500 px-2 py-1 rounded hover:bg-gray-600"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto text-xs font-mono">
            {logs.length === 0 ? (
              <div className="text-gray-400">No logs yet...</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1">
                  <span className={`text-xs ${
                    log.level === 'error' ? 'text-red-400' :
                    log.level === 'warn' ? 'text-yellow-400' :
                    log.level === 'info' ? 'text-blue-400' :
                    'text-gray-400'
                  }`}>
                    [{log.level.toUpperCase()}]
                  </span>
                  <span className="text-gray-300 ml-1">
                    {log.timestamp.split('T')[1].split('.')[0]}
                  </span>
                  <span className="text-white ml-2">
                    {log.component ? `[${log.component}] ` : ''}{log.message}
                  </span>
                  {log.data && (
                    <div className="text-gray-400 ml-4 text-xs">
                      {JSON.stringify(log.data, null, 2)}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DebugPanel;
