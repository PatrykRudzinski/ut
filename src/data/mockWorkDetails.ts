export type WorkDetail = {
  workSlug: string
  title: string
  description: string
  gallery: string[]
}

export const MOCK_WORK_DETAILS: Record<string, WorkDetail> = {
  'morning-light': {
    workSlug: 'morning-light',
    title: 'Morning Light',
    description:
      'This series follows daylight as it moves through ordinary rooms: thin curtains filter the sun into slow gradients, dust hangs in the beam, and shadows lengthen at a pace you can almost hear. Nothing is staged for drama—the subject is patience, the small shift between one minute and the next, and the way silence feels different when the light is soft.',
    gallery: [
      'https://picsum.photos/seed/ml1/1400/900',
      'https://picsum.photos/seed/ml2/1400/1000',
      'https://picsum.photos/seed/ml3/1400/850',
      'https://picsum.photos/seed/ml4/1400/950',
      'https://picsum.photos/seed/ml5/1400/780',
      'https://picsum.photos/seed/ml6/1400/1100',
      'https://picsum.photos/seed/ml7/1400/920',
      'https://picsum.photos/seed/ml8/1400/880',
    ],
  },
  'urban-lines': {
    workSlug: 'urban-lines',
    title: 'Urban Lines',
    description:
      'Walking the same streets at different hours, I looked for rhythm in concrete and glass: handrails, rooflines, the negative space between towers. The images lean on contrast and edge rather than spectacle—fragments that suggest a city without showing all of it. They are less about place names than about repetition, interruption, and the geometry we learn to ignore until it fills the frame.',
    gallery: [
      'https://picsum.photos/seed/ul1/1400/933',
      'https://picsum.photos/seed/ul2/1400/900',
      'https://picsum.photos/seed/ul3/1400/1000',
      'https://picsum.photos/seed/ul4/1400/850',
      'https://picsum.photos/seed/ul5/1400/1050',
      'https://picsum.photos/seed/ul6/1400/950',
      'https://picsum.photos/seed/ul7/1400/890',
    ],
  },
  'coastal-study': {
    workSlug: 'coastal-study',
    title: 'Coastal Study',
    description:
      'Tide and wind redraw the shore every day; these pictures sit in that constant revision. I worked with a long horizon, heavy air, and the pale overlap where wet sand meets foam. Color stays restrained so texture and mass can lead—salt crust, dragged pebbles, the slow collapse of a wave. The coast here is not a postcard; it is weather, patience, and the small violence of water meeting land.',
    gallery: [
      'https://picsum.photos/seed/cs1/1400/1050',
      'https://picsum.photos/seed/cs2/1400/900',
      'https://picsum.photos/seed/cs3/1400/900',
      'https://picsum.photos/seed/cs4/1400/1000',
      'https://picsum.photos/seed/cs5/1400/860',
      'https://picsum.photos/seed/cs6/1400/980',
      'https://picsum.photos/seed/cs7/1400/1020',
      'https://picsum.photos/seed/cs8/1400/880',
    ],
  },
  'still-waters': {
    workSlug: 'still-waters',
    title: 'Still Waters',
    description:
      'Lakes and slow rivers when the wind drops became a practice in almost-nothing: a plane of blue-gray, a fragile line of far trees, an occasional ripple as proof of life. I wanted the frame to feel held open—room for the eye to rest without a story forced in front of it. The sequence is quiet on purpose; if something breaks the surface, it matters more because the rest is so still.',
    gallery: [
      'https://picsum.photos/seed/sw1/1400/880',
      'https://picsum.photos/seed/sw2/1400/920',
      'https://picsum.photos/seed/sw3/1400/1000',
      'https://picsum.photos/seed/sw4/1400/900',
      'https://picsum.photos/seed/sw5/1400/950',
      'https://picsum.photos/seed/sw6/1400/870',
      'https://picsum.photos/seed/sw7/1400/940',
    ],
  },
  'field-notes': {
    workSlug: 'field-notes',
    title: 'Field Notes',
    description:
      'These frames come from hours on foot—hedgerows, stubble fields, paths that exist only on local maps. I was less interested in the grand view than in the patchwork at knee height: crushed grass, late light on seed heads, mud drying in ridges. The work reads like a notebook: irregular, specific, a little rough at the edges. Order comes from returning to the same kinds of places until they start to repeat in memory.',
    gallery: [
      'https://picsum.photos/seed/fn1/1400/1000',
      'https://picsum.photos/seed/fn2/1400/900',
      'https://picsum.photos/seed/fn3/1400/1000',
      'https://picsum.photos/seed/fn4/1400/933',
      'https://picsum.photos/seed/fn5/1400/880',
      'https://picsum.photos/seed/fn6/1400/1020',
      'https://picsum.photos/seed/fn7/1400/960',
      'https://picsum.photos/seed/fn8/1400/910',
    ],
  },
  'winter-frame': {
    workSlug: 'winter-frame',
    title: 'Winter Frame',
    description:
      'Winter strips the landscape down to structure—branches scribble against sky, snow hides detail until distance reads as flat bands, and the sun stays low enough to feel personal. I chased that reduced vocabulary: black lines on white-gray, a fence swallowed halfway, the moment before a footprint ruins a perfect drift. Cold in these images is light and contrast more than weather report; it is the clearest time of year to see shape.',
    gallery: [
      'https://picsum.photos/seed/wf1/1400/900',
      'https://picsum.photos/seed/wf2/1400/1050',
      'https://picsum.photos/seed/wf3/1400/920',
      'https://picsum.photos/seed/wf4/1400/980',
      'https://picsum.photos/seed/wf5/1400/860',
      'https://picsum.photos/seed/wf6/1400/1000',
      'https://picsum.photos/seed/wf7/1400/940',
    ],
  },
  'studio-portrait': {
    workSlug: 'studio-portrait',
    title: 'Studio Portrait',
    description:
      'A small room, one window, and a simple agreement between sitter and camera. I kept the setup plain so posture and breath would carry the image—how someone holds their hands when they forget the lens, the half-second before they settle. Light is directional but never theatrical; shadows describe the face instead of decorating it. The portrait is as much about the agreement to be seen as it is about likeness.',
    gallery: [
      'https://picsum.photos/seed/sp1/1400/1000',
      'https://picsum.photos/seed/sp2/1400/900',
      'https://picsum.photos/seed/sp3/1400/1000',
      'https://picsum.photos/seed/sp4/1400/950',
      'https://picsum.photos/seed/sp5/1400/880',
      'https://picsum.photos/seed/sp6/1400/1020',
      'https://picsum.photos/seed/sp7/1400/930',
      'https://picsum.photos/seed/sp8/1400/970',
    ],
  },
}

export function getWorkDetail(
  slug: string | undefined,
): WorkDetail | undefined {
  if (!slug) return undefined
  return MOCK_WORK_DETAILS[slug]
}
