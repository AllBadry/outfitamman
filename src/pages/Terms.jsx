import Legal from './Legal';

const sections = [
  {
    h: 'Orders',
    p: [
      'A commission is confirmed upon receipt of a signed quotation and a fifty-percent deposit. Ready-made orders are confirmed at checkout and dispatched once paid in full.',
    ],
  },
  {
    h: 'Tailoring & fittings',
    p: [
      'Bespoke pieces require three fittings for a full commission and one for the express programme. Missed fittings reschedule the completion date by the same number of weeks; the deposit is non-refundable after the first cut.',
    ],
  },
  {
    h: 'Pricing & payment',
    p: [
      'All prices are in Jordanian Dinar and include applicable taxes. We accept cash, local cards, and international wire for overseas commissions. Quotes are valid for thirty days.',
    ],
  },
  {
    h: 'Delivery & returns',
    p: [
      'Ready-made items may be returned unworn within fourteen days of delivery, as described on our Services page. Bespoke and personalised items are made to your measure and are non-returnable except in the case of a manufacturer defect.',
    ],
  },
  {
    h: 'Care of your garment',
    p: [
      'Garments are built to last, but tailoring rewards attention. We offer pressing and minor repairs free to members; alterations outside the first year are charged at workshop rates.',
    ],
  },
  {
    h: 'Governing law',
    p: [
      'These terms are governed by the laws of the Hashemite Kingdom of Jordan, and any dispute will be settled in the courts of Amman.',
    ],
  },
];

export default function Terms() {
  return (
    <Legal
      eyebrow="The Fine Print"
      title={['Terms of', 'Service']}
      subtitle="The honest rules of the house — readable in the time it takes to finish a coffee."
      updated="September 2026"
      sections={sections}
    />
  );
}