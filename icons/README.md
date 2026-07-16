Place marker icon files in this folder.

The webpage looks for files named after the `icon_type` value in `data.json`.
For example, `icon_type: "portal"` will try:

- `icons/portal.webp`
- `icons/portal.png`
- `icons/portal.svg`
- `icons/portal.jpg`
- `icons/portal.jpeg`

If no matching file exists, the marker falls back to the original red dot.
