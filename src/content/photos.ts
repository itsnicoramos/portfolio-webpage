// The photography gallery reads from this list. To add a photo:
//   1. Put the original file in public/photography/ (JPEG or PNG, long edge
//      2400px or less is plenty; next/image serves AVIF/WebP at the right size).
//   2. Add an entry below with its real pixel width and height so the layout
//      never shifts, and alt text that describes what is in the frame.
// While this list is empty the section shows an honest "in progress" state.

export type Photo = {
  src: `/photography/${string}`
  alt: string
  width: number
  height: number
  caption?: string
}

export const photos: readonly Photo[] = []
