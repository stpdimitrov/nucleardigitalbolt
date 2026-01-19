export interface Project {
  slug: string;
  title: string;
  client: string;
  description: string;
  serviceProvided: string;
  date: string;
  coverImage: string;
  heroVideo?: string;
  finalVideo?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}

export interface Blog {
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  publishedDate: string;
  tag: string;
  readTime: string;
}

export const projects: Project[] = [
  {
    slug: 'auralis',
    title: 'Auralis',
    client: 'Auralis Inc.',
    description: 'A cinematic brand film showcasing innovation in sustainable technology through stunning visual storytelling.',
    serviceProvided: 'Brand Film Production',
    date: '2024-01',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Auralis needed to position themselves as leaders in sustainable technology while maintaining an approachable, human-centered brand identity.',
    solution: 'We crafted a cinematic narrative that balanced technical innovation with emotional resonance, using natural lighting and organic compositions.',
    results: [
      '300% increase in brand awareness',
      'Featured in 15+ industry publications',
      '2M+ organic video views'
    ]
  },
  {
    slug: 'echo-frames',
    title: 'Echo Frames',
    client: 'Echo Corp.',
    description: 'A dynamic product launch video highlighting cutting-edge smart eyewear technology with sleek cinematography.',
    serviceProvided: 'Product Video',
    date: '2024-02',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Launch a new smart eyewear product in a saturated market dominated by tech giants.',
    solution: 'Created a visually striking product video that emphasized lifestyle integration over technical specs.',
    results: [
      '50K+ pre-orders in first week',
      '4.5M video views across platforms',
      'Finalist for Best Product Launch Video'
    ]
  },
  {
    slug: 'lumen-brew',
    title: 'Lumen Brew',
    client: 'Lumen Coffee',
    description: 'An artisanal coffee brand story told through warm, intimate cinematography and authentic moments.',
    serviceProvided: 'Brand Story',
    date: '2023-11',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Differentiate a small-batch coffee roaster in a competitive specialty coffee market.',
    solution: 'Documentary-style storytelling that captured the craft, passion, and community behind the brand.',
    results: [
      'Retail partnerships increased by 200%',
      'Average watch time: 92%',
      'Social engagement up 450%'
    ]
  },
  {
    slug: 'noir-threads',
    title: 'Noir Threads',
    client: 'Noir Fashion',
    description: 'High-fashion commercial blending editorial aesthetics with dynamic motion and bold visual choices.',
    serviceProvided: 'Fashion Commercial',
    date: '2023-12',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Create a fashion film that breaks through social media noise during peak holiday season.',
    solution: 'Bold, high-contrast visuals with rapid editing and a pulsing soundtrack that commanded attention.',
    results: [
      'Holiday sales up 180%',
      '8M impressions in 2 weeks',
      'Featured in Vogue\'s "Best Fashion Films"'
    ]
  },
  {
    slug: 'pulse-drive',
    title: 'Pulse Drive',
    client: 'Pulse Auto',
    description: 'Automotive showcase combining performance cinematography with elegant reveal sequences.',
    serviceProvided: 'Automotive Video',
    date: '2024-01',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Launch a new electric vehicle line that appeals to both performance enthusiasts and eco-conscious buyers.',
    solution: 'Cinematic vehicle choreography shot in dramatic landscapes, emphasizing both power and sustainability.',
    results: [
      'Showroom traffic increased 250%',
      'Won Gold at Automotive Video Awards',
      'Test drive requests up 400%'
    ]
  },
  {
    slug: 'terra-glow',
    title: 'Terra Glow',
    client: 'Terra Beauty',
    description: 'Luxury skincare campaign featuring ethereal visuals and careful attention to texture and light.',
    serviceProvided: 'Beauty Commercial',
    date: '2023-10',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Position a new skincare line as premium without appearing unattainable.',
    solution: 'Soft, dreamlike cinematography with macro product shots that emphasized natural beauty and self-care.',
    results: [
      'Product line sold out in 3 days',
      'Influencer partnership requests up 600%',
      'Brand perception score increased 45%'
    ]
  },
  {
    slug: 'waveline',
    title: 'Waveline',
    client: 'Waveline Tech',
    description: 'Tech startup explainer video combining motion graphics with live-action storytelling.',
    serviceProvided: 'Explainer Video',
    date: '2023-09',
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    challenge: 'Explain complex SaaS platform in under 90 seconds while maintaining viewer engagement.',
    solution: 'Hybrid approach blending animated UI demonstrations with customer success stories.',
    results: [
      'Conversion rate up 75%',
      'Average session duration increased 3.5x',
      'Shared by 200+ industry leaders'
    ]
  }
];

export const blogs: Blog[] = [
  {
    slug: 'why-cinematic-storytelling-matters-in-modern-video-production',
    title: 'Why Cinematic Storytelling Matters in Modern Video Production',
    description: 'Exploring how cinematic techniques elevate brand narratives and create lasting emotional connections with audiences.',
    content: `
# Why Cinematic Storytelling Matters in Modern Video Production

In today's saturated digital landscape, brands are competing for attention in an endless scroll of content. The difference between a video that gets scrolled past and one that stops thumbs mid-swipe? Cinematic storytelling.

## What Makes Storytelling "Cinematic"?

Cinematic storytelling isn't just about high production value—though that certainly helps. It's about crafting a narrative that engages viewers emotionally, using visual language that transcends mere information delivery.

### Key Elements:
- **Visual Composition**: Every frame tells part of the story
- **Emotional Arc**: Taking viewers on a journey
- **Sound Design**: Creating atmosphere and mood
- **Color Grading**: Establishing visual identity and tone

## Why It Matters for Brands

Brands that embrace cinematic storytelling see measurable results:

1. **Higher Engagement**: Viewers watch longer and engage more deeply
2. **Better Recall**: Emotional stories stick in memory
3. **Stronger Connection**: Audiences feel aligned with brand values
4. **Competitive Edge**: Stand out in a sea of generic content

## The Production Difference

Working with a production team that understands cinematic language means every decision—from lighting to lens choice—serves the story. It's the difference between documenting and creating an experience.

At Flixen, we believe every brand has a story worth telling cinematically. The question isn't whether you can afford cinematic production—it's whether you can afford not to.
    `,
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    publishedDate: '2024-01-15',
    tag: 'Production',
    readTime: '5 min read'
  },
  {
    slug: 'how-visual-storytelling-transforms-brands-through-creative-direction',
    title: 'How Visual Storytelling Transforms Brands Through Creative Direction',
    description: 'Discover the power of strategic creative direction in building memorable brand identities through visual content.',
    content: `
# How Visual Storytelling Transforms Brands Through Creative Direction

Creative direction is the invisible hand that guides every visual decision in your brand's story. It's what separates a collection of shots from a cohesive narrative that resonates.

## What Is Creative Direction?

Creative direction is the strategic vision that unifies all visual elements:

- Color palettes that evoke specific emotions
- Composition choices that guide viewer attention
- Pacing that matches your brand's personality
- Visual metaphors that communicate values

## The Transformation Process

### Before Creative Direction:
- Disconnected visuals
- Unclear brand identity
- Generic content that blends in

### After Creative Direction:
- Cohesive visual language
- Strong brand recognition
- Content that stands out and connects

## Real Impact

Brands with strong creative direction see:
- 3x higher brand recall
- 2.5x more social shares
- 60% increase in perceived brand value

## Our Approach

At Flixen, creative direction starts in pre-production and influences every decision through post. We don't just capture footage—we craft visual experiences that transform how audiences perceive your brand.

The result? Content that doesn't just look good—it does good for your business.
    `,
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    publishedDate: '2024-01-10',
    tag: 'Creative',
    readTime: '4 min read'
  },
  {
    slug: 'behind-the-scenes-of-crafting-cinematic-visual-experiences',
    title: 'Behind the Scenes of Crafting Cinematic Visual Experiences',
    description: 'A look into our production process and the decisions that create cinematic magic.',
    content: `
# Behind the Scenes of Crafting Cinematic Visual Experiences

Ever wondered what goes into creating those stunning cinematic videos? Pull back the curtain with us as we share our process.

## Pre-Production: Where Magic Begins

The best videos are won in pre-production:

### Discovery
- Understanding brand DNA
- Identifying target audience
- Defining success metrics

### Creative Development
- Mood boards and visual references
- Storyboard creation
- Location scouting
- Casting decisions

### Technical Planning
- Equipment selection
- Lighting design
- Shot lists and schedules

## Production: Execution Excellence

On set, every detail matters:

- **Lighting**: We often spend 30 minutes lighting a single shot
- **Camera Movement**: Motivated movement that serves the story
- **Performance**: Directing talent to authentic moments
- **Problem Solving**: Adapting to challenges while maintaining vision

## Post-Production: Refining the Vision

The edit bay is where everything comes together:

### Editing
- Pacing that matches emotional beats
- Transitions that feel invisible yet intentional

### Color Grading
- Establishing consistent look and feel
- Enhancing mood and atmosphere

### Sound Design
- Music selection that amplifies emotion
- Sound effects that create immersion

## The Flixen Difference

We obsess over details others overlook. A slight adjustment in color temperature, a subtle sound effect, the perfect moment to cut—these "invisible" choices create the cinematic feeling that stops scrolls and starts conversations.

Ready to see what we can create together?
    `,
    coverImage: 'https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png',
    publishedDate: '2024-01-05',
    tag: 'Behind the Scenes',
    readTime: '6 min read'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find(blog => blog.slug === slug);
}
