"use client"

import {
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelForm,
  FloatingPanelLabel,
  FloatingPanelRoot,
  FloatingPanelSubmitButton,
  FloatingPanelTextarea,
  FloatingPanelTrigger,
} from "@/components/FloatingPanel"
export default function FloatingPanelDemo() {
  const handleSubmit = (note: string) => {
    console.log('Submitted note:', note)
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Headless Composable FloatingPanel Demo</h1>
      <FloatingPanelRoot>
        <FloatingPanelTrigger>
          Add Note
          </FloatingPanelTrigger>
        <FloatingPanelContent>
          <FloatingPanelForm onSubmit={handleSubmit}>
            <FloatingPanelLabel htmlFor="note-input">Add Note</FloatingPanelLabel>
            <FloatingPanelTextarea id="note-input" />
            <FloatingPanelFooter>
              <FloatingPanelCloseButton />
              <FloatingPanelSubmitButton />
            </FloatingPanelFooter>
          </FloatingPanelForm>
        </FloatingPanelContent>
      </FloatingPanelRoot>
    </div>
  )
}
