import Legal from './Legal';

const sections = [
  {
    h: 'Scope',
    p: ['This policy describes how Outfit Amman ("we", "the house") collects, uses and protects the personal information you share when visiting our boutique, using this website, or commissioning garments.'],
  },
  {
    h: 'What we collect',
    p: [
      'When you book a fitting or place an order, we collect your name, telephone number, email address, postal address and, for tailoring, your measurements and style preferences.',
      'We also record anonymised session data — pages viewed and visit duration — used only to improve the experience on this site.',
    ],
  },
  {
    h: 'How we use it',
    p: [
      'Your information is used to schedule fittings, complete orders, communicate about your commission, and (only with your explicit consent) send seasonal collection notes.',
      'We never sell, rent or trade personal information. Ever.',
    ],
  },
  {
    h: 'Storage & security',
    p: [
      'Client records are held in a closed archive on our own systems, accessible only to the concierge and the head cutter. Payment details are processed by our banking partners and are never stored by us.',
    ],
  },
  {
    h: 'Your rights',
    p: [
      'You may request a copy of the information we hold about you, ask for it to be corrected, or ask that it be erased, at any time by contacting the concierge. Requests are fulfilled within thirty days.',
    ],
  },
  {
    h: 'Cookies',
    p: [
      'This site uses only functional cookies essential to the visit — rotation of offers, saved basket and the like. We do not deploy advertising trackers or third-party analytics on your personal profile.',
    ],
  },
];

export default function Privacy() {
  return (
    <Legal
      eyebrow="The Fine Print"
      title={['Privacy,', 'Simplified']}
      subtitle="How the house treats your data: plainly, sparingly and with the same respect we give a bolt of cloth."
      updated="September 2026"
      sections={sections}
    />
  );
}