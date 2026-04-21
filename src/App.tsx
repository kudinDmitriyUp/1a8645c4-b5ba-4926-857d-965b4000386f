import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarCentered from '@/components/ui/NavbarCentered';
import ProductVariantCards from '@/components/sections/product/ProductVariantCards';
import TestimonialAvatarCard from '@/components/sections/testimonial/TestimonialAvatarCard';

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Love Coffee"
      navItems={[
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Menu",
          href: "#menu",
        },
        {
          name: "Testimonials",
          href: "#testimonials",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Visit Us",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      tag="Since 2024"
      title="Fall in Love with Every Sip"
      description="Artisanal coffee, responsibly sourced and expertly roasted for the true coffee enthusiast in our neighborhood home."
      primaryButton={{
        text: "Explore Menu",
        href: "#menu",
      }}
      secondaryButton={{
        text: "Our Story",
        href: "#about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/small-business-manager-his-workshop_23-2149094589.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <AboutTextSplit
      title="Rooted in Passion"
      descriptions={[
        "Love Coffee was born from a simple obsession: finding the perfect roast. We believe that a cup of coffee is more than just a morning ritual; it's a moment of connection.",
        "We partner directly with family-run farms to bring you beans that tell a story. From high-altitude slopes to your favorite mug, every step is handled with care.",
        "Our shop isn't just about caffeine—it's about community. We built this space for people to gather, work, and relax, one pour-over at a time.",
      ]}
      primaryButton={{
        text: "Read Full Story",
        href: "#",
      }}
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesDetailedCards
      tag="Our Values"
      title="Why Choose Love Coffee?"
      description="Quality isn't a goal; it's our standard of living."
      items={[
        {
          title: "Direct Trade",
          description: "We cut out the middleman to ensure farmers get paid fairly and you get fresh beans.",
          tags: [
            "Sustainable",
            "Ethical",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ice-coffee-with-milk-table_23-2148463964.jpg",
        },
        {
          title: "Slow Roasting",
          description: "Small batches allow us to monitor the exact profile of each bean for consistency.",
          tags: [
            "Artisanal",
            "Quality",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/espresso-cup-pink-background_1220-7433.jpg",
        },
        {
          title: "Fresh Daily",
          description: "We only roast what we sell, guaranteeing peak flavor in every single cup served.",
          tags: [
            "Fresh",
            "Expertise",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-iced-coffee-break-outside_23-2149567229.jpg",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductVariantCards
      tag="Our Collection"
      title="Premium Coffee Blends"
      description="From light fruity roasts to deep, chocolatey espressos."
      products={[
        {
          name: "Morning Bloom",
          variant: "Light Roast",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/brown-brew-maker-jar-freshness_1203-3928.jpg",
        },
        {
          name: "Midnight Velvet",
          variant: "Dark Roast",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/hermetic-silver-package-filled-with-freshly-baked-roasted-coffee-preserve-its-aroma-red-wooden-table-near-fallen-transparent-cup-with-spreaded-raw-green-peeled-coffee-beans-carton-box_346278-892.jpg",
        },
        {
          name: "Sun-Drenched Bean",
          variant: "Medium Roast",
          price: "$19",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-beer-board-towel-blue_114579-36999.jpg",
        },
        {
          name: "Cold Brew Kit",
          variant: "Original",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/male-barista-brewing-coffee-alternative-method-pour_176420-55133.jpg",
        },
        {
          name: "House Espresso",
          variant: "Signature",
          price: "$22",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup-beans-notebook-marble-surface_114579-57822.jpg",
        },
        {
          name: "Decaf Delight",
          variant: "Swiss Water",
          price: "$21",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-natural-organic-product-concept_53876-167117.jpg",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialAvatarCard
      tag="Kind Words"
      title="What Our Community Says"
      avatars={[
        {
          name: "Alice M.",
          imageSrc: "http://img.b2bpic.net/free-photo/blogger-girl-is-laughting-by-looking-camera-cafe_176474-116248.jpg",
        },
        {
          name: "Bob D.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-cup-coffee-while-using-smart-phone-cafe_637285-8102.jpg",
        },
        {
          name: "Charlie S.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-with-tablet_23-2149927583.jpg",
        },
        {
          name: "Diana K.",
          imageSrc: "http://img.b2bpic.net/free-photo/romantic-dreamy-millennial-blond-curlyhaired-nice-girl-sit-alone-cafe-table-touch-neck-flirty-look-outside-window-camera-smiling-broadly-drink-smoothie-waiting-friend-relaxing-after-hard-week_197531-30646.jpg",
        },
        {
          name: "Ethan L.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-reading-magazine-drinking-coffee_329181-11743.jpg",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqTwoColumn
      tag="FAQ"
      title="Frequently Asked Questions"
      description="Curious about our coffee? We have the answers."
      items={[
        {
          question: "Do you offer subscription services?",
          answer: "Yes! We have a monthly subscription club that delivers fresh beans right to your doorstep.",
        },
        {
          question: "Are your beans organic?",
          answer: "We prioritize organic practices in every partnership we form.",
        },
        {
          question: "Can I order online?",
          answer: "Absolutely, our online shop is open 24/7 for all your brewing needs.",
        },
        {
          question: "Do you have vegan options?",
          answer: "We offer oat, almond, and soy milk alternatives at no extra charge.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      tag="Contact Us"
      title="Get in Touch"
      description="Have questions about our beans or want to host an event? Send us a message."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help you today?",
        rows: 4,
      }}
      buttonText="Send Message"
      imageSrc="http://img.b2bpic.net/free-photo/coworking-coffee-shop-owner-barista_1098-20960.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleMedia
      imageSrc="http://img.b2bpic.net/free-photo/coffee-latte-with-lavender-flower-wooden-surface_23-2147892968.jpg"
      brand="Love Coffee"
      columns={[
        {
          title: "Store",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Love Coffee. All rights reserved."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Twitter",
          href: "#",
        },
      ]}
    />
  </div>
    </>
  );
}
