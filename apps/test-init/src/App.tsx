export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">DGA-UI Test</h1>
        <p className="text-muted-foreground">
          Run <code className="bg-muted px-2 py-1 rounded">pnpm test:init</code>{" "}
          to test initialization
        </p>

        {/* Color Swatches */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Color Test</h2>

          <div className="grid grid-cols-5 gap-2">
            <div
              className="h-12 bg-dga-primary-100 rounded"
              title="primary-100"
            />
            <div
              className="h-12 bg-dga-primary-300 rounded"
              title="primary-300"
            />
            <div
              className="h-12 bg-dga-primary-500 rounded"
              title="primary-500"
            />
            <div
              className="h-12 bg-dga-primary-700 rounded"
              title="primary-700"
            />
            <div
              className="h-12 bg-dga-primary-900 rounded"
              title="primary-900"
            />
          </div>

          <div className="grid grid-cols-5 gap-2">
            <div className="h-12 bg-dga-gold-100 rounded" title="gold-100" />
            <div className="h-12 bg-dga-gold-300 rounded" title="gold-300" />
            <div className="h-12 bg-dga-gold-500 rounded" title="gold-500" />
            <div className="h-12 bg-dga-gold-700 rounded" title="gold-700" />
            <div className="h-12 bg-dga-gold-900 rounded" title="gold-900" />
          </div>

          <div className="grid grid-cols-5 gap-2">
            <div
              className="h-12 bg-dga-lavender-100 rounded"
              title="lavender-100"
            />
            <div
              className="h-12 bg-dga-lavender-300 rounded"
              title="lavender-300"
            />
            <div
              className="h-12 bg-dga-lavender-500 rounded"
              title="lavender-500"
            />
            <div
              className="h-12 bg-dga-lavender-700 rounded"
              title="lavender-700"
            />
            <div
              className="h-12 bg-dga-lavender-900 rounded"
              title="lavender-900"
            />
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Semantic Colors</h2>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              Primary
            </div>
            <div className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
              Secondary
            </div>
            <div className="px-4 py-2 bg-accent text-accent-foreground rounded-lg">
              Accent
            </div>
            <div className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg">
              Destructive
            </div>
          </div>
        </div>

        {/* Shadow Test */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Shadow Test</h2>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-card shadow-sm rounded-lg flex items-center justify-center text-sm">
              sm
            </div>
            <div className="w-20 h-20 bg-card shadow-md rounded-lg flex items-center justify-center text-sm">
              md
            </div>
            <div className="w-20 h-20 bg-card shadow-lg rounded-lg flex items-center justify-center text-sm">
              lg
            </div>
            <div className="w-20 h-20 bg-card shadow-xl rounded-lg flex items-center justify-center text-sm">
              xl
            </div>
          </div>
        </div>

        {/* Button placeholder - add after running test:add */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Components</h2>
          <p className="text-muted-foreground">
            Run{" "}
            <code className="bg-muted px-2 py-1 rounded">pnpm test:add</code>{" "}
            then import Button
          </p>
          {/* <Button>Test Button</Button> */}
        </div>
      </div>
    </div>
  )
}
