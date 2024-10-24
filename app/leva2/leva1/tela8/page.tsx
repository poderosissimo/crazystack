import { ReportButton } from './report-button'
import { FlaggedContentIndicator } from './flagged-content-indicator'
import { ModerationDashboard } from './moderation-dashboard'

export default function ModerationSystemDemo() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Yahoo Answers Clone - Moderation System</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Question</h2>
        <div className="bg-card p-4 rounded-lg shadow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium">How do I bake a cake?</h3>
            <ReportButton contentType="question" contentId="q1" />
          </div>
          <p className="text-muted-foreground mb-2">I've never baked before and want to try making a simple cake. Any tips?</p>
          <FlaggedContentIndicator flagCount={2} />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Answer</h2>
        <div className="bg-card p-4 rounded-lg shadow">
          <div className="flex justify-between items-start mb-2">
            <p>Start with a basic recipe, make sure to measure ingredients accurately, and don't overmix the batter. Preheat the oven and use the right pan size. Good luck!</p>
            <ReportButton contentType="answer" contentId="a1" />
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Moderation Dashboard</h2>
        <ModerationDashboard />
      </section>
    </div>
  )
}