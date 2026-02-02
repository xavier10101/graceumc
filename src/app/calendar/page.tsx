export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Calendar</h1>
      
      {/* January 2026 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6 pb-3 border-b-2" style={{ borderColor: "var(--brand-red)" }}>
          February 2026
        </h2>
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Fri, 2/6: Scout Derby Set-up - 6pm</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Sat, 2/7: Scout Pinewood Derby - 2pm</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Sun, 2/8: Souper Bowl Luncheon - 12pm</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Wed, 2/18: Pancake Supper - 6pm</p>
            <p className="font-medium">Wed, 2/18: Ash Wednesday Service - 7pm</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Fri & Sat, 2/27 & 2/28: Boy Scout Camp</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <p className="font-medium">Sat, 2/28: Church Council Calendar Planning Meeting - 10am</p>
          </div>
        </div>
      </div>

      {/* February 2026 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6 pb-3 border-b-2" style={{ borderColor: "var(--brand-red)" }}>
          March 2026
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 italic">Coming Soon</p>
        </div>
      </div>

      {/* March 2026 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6 pb-3 border-b-2" style={{ borderColor: "var(--brand-red)" }}>
          April 2026
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 italic">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

