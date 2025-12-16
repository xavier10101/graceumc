export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Calendar</h1>
      
      {/* December 2025 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6 pb-3 border-b-2" style={{ borderColor: "var(--brand-red)" }}>
          December 2025
        </h2>
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Wed 12/24: Christmas Eve Service - 6pm</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Mon 12/29: Wood Carvers - 5pm</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Tue 12/30: Cub Scouts & Boy Scouts - 6:30pm</p>
          </div>
        </div>
      </div>

      {/* January 2026 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6 pb-3 border-b-2" style={{ borderColor: "var(--brand-red)" }}>
          January 2026
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 italic">Coming Soon</p>
        </div>
      </div>

      {/* February 2026 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6 pb-3 border-b-2" style={{ borderColor: "var(--brand-red)" }}>
          February 2026
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 italic">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

