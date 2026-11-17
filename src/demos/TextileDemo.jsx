import React, { useState } from 'react';
import DemoTopBanner from '../components/DemoTopBanner';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  Globe2, 
  FileText, 
  ArrowRight, 
  Search, 
  Filter, 
  Sparkles, 
  Check, 
  X, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight,
  Factory
} from 'lucide-react';

export default function TextileDemo() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sampleRequested, setSampleRequested] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    destination: 'Domestic (India)',
    quantity: '500 - 1000 Meters',
    notes: ''
  });

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'jacquard', label: 'Jacquard & Brocade' },
    { id: 'silk', label: 'Pure & Blended Silk' },
    { id: 'georgette', label: 'Georgette & Chiffon' },
    { id: 'linen', label: 'Linen & Modal' },
    { id: 'viscose', label: 'Viscose Satin' },
  ];

  const fabrics = [
    {
      id: 'tx-01',
      name: 'Regal Zari Jacquard Silk',
      category: 'jacquard',
      code: 'AW-JAC-409',
      gsm: '165 GSM',
      width: '44 / 48 Inches',
      weave: 'Electronic Jacquard 2400 Hooks',
      moq: '300 Meters',
      colors: ['#D4AF37', '#1E3A5F', '#581845', '#1B4332'],
      desc: 'Intricate metallic thread zari work interwoven with mulberry silk base. Ideal for bridal ensembles, luxury sherwanis, and haute couture lehengas.',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      cert: 'OEKO-TEX Standard 100'
    },
    {
      id: 'tx-02',
      name: 'Organic Flax Linen 60s',
      category: 'linen',
      code: 'AW-LIN-102',
      gsm: '140 GSM',
      width: '56 Inches',
      weave: 'Plain Weave Pre-Washed',
      moq: '500 Meters',
      colors: ['#E6DFD5', '#A39B8B', '#606C38', '#DDA15E'],
      desc: 'Breathable, temperature-regulating pure French flax linen. Azo-free dyed with a soft aero-finish for high-end resort wear and contemporary shirting.',
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
      cert: 'GOTS Certified Organic'
    },
    {
      id: 'tx-03',
      name: 'Mulberry Habotai Silk 16mm',
      category: 'silk',
      code: 'AW-SLK-880',
      gsm: '85 GSM',
      width: '42 Inches',
      weave: 'Lustrous Plain Habotai',
      moq: '250 Meters',
      colors: ['#FFFDD0', '#E0A96D', '#772E25', '#2C3539'],
      desc: 'Featherlight pure mulberry silk with a smooth pearlescent sheen. Widely used for luxury scarf printing, premium linings, and fluid drapery.',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      cert: 'Silk Mark India'
    },
    {
      id: 'tx-04',
      name: 'Crepe De Chine Georgette 70D',
      category: 'georgette',
      code: 'AW-GEO-305',
      gsm: '110 GSM',
      width: '44 Inches',
      weave: 'High-Twist Double Crepe',
      moq: '600 Meters',
      colors: ['#F7CAD0', '#B5838D', '#6D6875', '#E5989B'],
      desc: 'Granular crepe texture with exceptional bouncy drape. Highly receptive to digital reactive and disperse printing without bleeding.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      cert: 'ISO 9001:2015'
    },
    {
      id: 'tx-05',
      name: 'Heavy Viscose Bridal Satin',
      category: 'viscose',
      code: 'AW-VIS-712',
      gsm: '190 GSM',
      width: '54 Inches',
      weave: 'High-Density 8-End Satin',
      moq: '400 Meters',
      colors: ['#C5A059', '#3D0C11', '#0B2027', '#EAE0D5'],
      desc: 'Rich liquid drape with dense warp face. Created for premium evening gowns, cocktail dresses, and architectural volume draping.',
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
      cert: 'FSC Certified Pulp'
    },
    {
      id: 'tx-06',
      name: 'Brocade Damask Floral Motif',
      category: 'jacquard',
      code: 'AW-JAC-550',
      gsm: '220 GSM',
      width: '48 Inches',
      weave: 'Multi-Weft Brocade Jacquard',
      moq: '350 Meters',
      colors: ['#283618', '#BC6C25', '#DDA15E', '#FEFAE0'],
      desc: 'Embossed three-dimensional relief weaving with antique gold highlights. Selected by high-end interior designers and couture houses.',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      cert: 'OEKO-TEX 100'
    }
  ];

  const filteredFabrics = activeCategory === 'all' 
    ? fabrics 
    : fabrics.filter(f => f.category === activeCategory);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSampleRequested(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#242526] font-sans antialiased">
      {/* Sticky Top Banner */}
      <DemoTopBanner demoTitle="Aura Weaves & Jacquards (Textile B2B)" category="B2B Manufacturing" />

      {/* Textile Brand Header */}
      <header className="border-b border-[#E2DDD3] bg-[#F8F6F0]/95 sticky top-9 z-30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#1F2421] text-[#F8F6F0] flex items-center justify-center font-heading font-extrabold text-lg tracking-widest">
              AW
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg tracking-wider text-[#1F2421]">
                AURA WEAVES
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#736F68]">
                Surat Mills · Est. 1998
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#5A564F]">
            <a href="#collections" className="hover:text-[#1F2421] transition-colors">Collections</a>
            <a href="#mill-infrastructure" className="hover:text-[#1F2421] transition-colors">Loom Infrastructure</a>
            <a href="#specifications" className="hover:text-[#1F2421] transition-colors">Quality Standards</a>
            <a href="#export-inquiry" className="hover:text-[#1F2421] transition-colors">Export Desk</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#export-inquiry"
              className="px-4 py-2 bg-[#8C7355] text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#735D43] transition-colors"
            >
              Request Swatches
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DDD3] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EAE5D9] text-[#554E41] text-[11px] font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7355]" />
              Direct Surat Manufacturer · Global Export Standards
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F2421] tracking-tight leading-[1.1]">
              Architectural Weaves. <br />
              <span className="text-[#8C7355]">Precision Jacquards.</span> <br />
              Engineered in Surat.
            </h1>

            <p className="text-[#5A564F] text-base md:text-lg leading-relaxed max-w-2xl">
              Equipped with 140+ electronic high-speed rapier jacquards and Italian air-jet looms in Sachin GIDC, Surat. Supplying premier garment exporters, domestic fashion houses, and overseas textile distributors across 40+ countries.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#collections"
                className="px-6 py-3 rounded bg-[#1F2421] text-[#F8F6F0] text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Browse Fabric Catalogue
              </a>
              <a
                href="#export-inquiry"
                className="px-6 py-3 rounded border border-[#C5BDAF] text-[#1F2421] text-xs font-bold uppercase tracking-wider hover:bg-[#EAE5D9] transition-colors"
              >
                Download Export Catalog (PDF)
              </a>
            </div>

            {/* Industrial Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2DDD3]">
              <div>
                <div className="font-heading font-extrabold text-2xl text-[#1F2421]">140+</div>
                <div className="text-[11px] text-[#736F68] uppercase tracking-wider mt-0.5">High-Speed Looms</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl text-[#1F2421]">50,000m</div>
                <div className="text-[11px] text-[#736F68] uppercase tracking-wider mt-0.5">Daily Weaving Output</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl text-[#1F2421]">42+</div>
                <div className="text-[11px] text-[#736F68] uppercase tracking-wider mt-0.5">Export Nations</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#D8D1C3] shadow-card bg-white p-3">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80"
                alt="Aura Weaves Surat Jacquard Production"
                className="w-full h-96 object-cover rounded"
              />
              <div className="p-4 bg-[#F2EDE2] rounded mt-3 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#1F2421]">Unit 4 Jacquard Shed · Sachin GIDC</div>
                  <div className="text-[#736F68] text-[11px]">2400 Hook Electronic Jacquards</div>
                </div>
                <span className="px-2.5 py-1 bg-white border border-[#D8D1C3] rounded text-[10px] font-mono font-bold text-[#8C7355]">
                  ACTIVE LOOMS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Catalogue Section */}
      <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8C7355]">
              Surat Mill Showroom
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1F2421] tracking-tight mt-1">
              Commercial Fabric Collections
            </h2>
            <p className="text-sm text-[#736F68] mt-2">
              Available for immediate bulk sampling and scheduled container-load manufacturing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#1F2421] text-[#F8F6F0]'
                    : 'bg-[#EAE5D9] text-[#554E41] hover:bg-[#DDD6C8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-white border border-[#E2DDD3] rounded-lg overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-[#F2EDE2]">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1F2421]/90 backdrop-blur text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {fabric.code}
                </div>
                <div className="absolute top-3 right-3 bg-white/95 text-[#1F2421] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#E2DDD3]">
                  {fabric.gsm}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1F2421]">
                    {fabric.name}
                  </h3>
                  <p className="text-xs text-[#6B665E] mt-1.5 line-clamp-2 leading-relaxed">
                    {fabric.desc}
                  </p>
                </div>

                <div className="space-y-2 border-t border-[#EAE5D9] pt-3 text-xs text-[#554E41]">
                  <div className="flex justify-between">
                    <span className="text-[#8C867B]">Loom Weave:</span>
                    <span className="font-medium text-[#1F2421] text-right truncate max-w-[180px]">{fabric.weave}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C867B]">Export MOQ:</span>
                    <span className="font-medium text-[#1F2421]">{fabric.moq}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#8C867B]">Compliance:</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {fabric.cert}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(fabric)}
                    className="flex-1 py-2 px-3 rounded bg-[#1F2421] text-white text-xs font-semibold text-center hover:bg-black transition-colors"
                  >
                    View Specs
                  </button>
                  <a
                    href="#export-inquiry"
                    onClick={() => setFormData(prev => ({ ...prev, notes: `Inquiry for fabric ${fabric.code} (${fabric.name})` }))}
                    className="py-2 px-3 rounded border border-[#C5BDAF] text-[#1F2421] text-xs font-semibold text-center hover:bg-[#F2EDE2] transition-colors"
                  >
                    Request Swatch
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Loom & Infrastructure Showcase */}
      <section id="mill-infrastructure" className="bg-[#1F2421] text-[#F8F6F0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059]">
              Sachin GIDC Infrastructure
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-white mt-1">
              Vertical Weaving, Warping & Finishing Operations
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              We manage the entire textile lifecycle under one manufacturing roof in Surat: computerized sectional warping, electronic jacquards, computerized rapier looms, and continuous soft-flow dye houses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-800 space-y-3">
              <Factory className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-heading font-bold text-lg text-white">Stäubli Jacquard Heads</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                2400 & 4800 hook high-speed electronic jacquards enabling micro-detailed brocade patterns with zero mispicks.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-800 space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="font-heading font-bold text-lg text-white">In-House Physical & Color Lab</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Spectrophotometer color matching with delta-E &lt; 0.5 tolerances, tensile tear strength testing, and GSM verification.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-900 border border-neutral-800 space-y-3">
              <Globe2 className="w-8 h-8 text-blue-400" />
              <h3 className="font-heading font-bold text-lg text-white">Hazira Port Proximity</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Located just 35 km from Hazira Container Terminal and 280 km from JNPT Mumbai for swift maritime container dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Export & Sample Request Form */}
      <section id="export-inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-[#E2DDD3] rounded-xl p-8 md:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8C7355]">
              Commercial Desk
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#1F2421] tracking-tight">
              Request Fabric Swatches or Export Quotation
            </h2>
            <p className="text-sm text-[#5A564F] leading-relaxed">
              We dispatch couriered A4 sample swatches and meterage blankets globally to verified fashion brands, garment exporters, and buying houses.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#EAE5D9] text-xs text-[#554E41]">
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#8C7355] shrink-0" />
                <span>Plot 412–415, Road No. 4, GIDC Sachin, Surat – 394230</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8C7355] shrink-0" />
                <span>Export Desk: +91 87340 09367</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8C7355] shrink-0" />
                <span>export@auraweaves-surat.example</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {!sampleRequested ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#D8D1C3] bg-[#F8F6F0] text-xs focus:bg-white focus:outline-none focus:border-[#1F2421]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Company / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mehra Haute Couture"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#D8D1C3] bg-[#F8F6F0] text-xs focus:bg-white focus:outline-none focus:border-[#1F2421]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98250 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#D8D1C3] bg-[#F8F6F0] text-xs focus:bg-white focus:outline-none focus:border-[#1F2421]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                      Delivery Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#D8D1C3] bg-[#F8F6F0] text-xs focus:bg-white focus:outline-none focus:border-[#1F2421]"
                    >
                      <option>Domestic (India)</option>
                      <option>United States & Canada</option>
                      <option>United Kingdom & EU</option>
                      <option>Middle East (UAE, Saudi)</option>
                      <option>Australia & SE Asia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] mb-1">
                    Fabric Codes or Sample Requirements
                  </label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Enter fabric codes (e.g. AW-JAC-409, AW-LIN-102), required weave weight, or custom pattern reference..."
                    className="w-full px-3.5 py-2.5 rounded border border-[#D8D1C3] bg-[#F8F6F0] text-xs focus:bg-white focus:outline-none focus:border-[#1F2421] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-[#1F2421] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Submit Export Swatch Request
                </button>
              </form>
            ) : (
              <div className="p-8 text-center bg-[#F2EDE2] rounded-lg space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xl text-[#1F2421]">
                  Swatch Request Registered
                </h4>
                <p className="text-xs text-[#5A564F] max-w-md mx-auto">
                  Thank you, {formData.name}. Our Surat export representative will contact your team via WhatsApp at {formData.phone} with shipping tracking and technical swatches.
                </p>
                <button
                  onClick={() => setSampleRequested(false)}
                  className="text-xs text-[#8C7355] underline font-semibold pt-2"
                >
                  Submit Another Fabric Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Spec Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-white rounded-lg p-6 border border-[#E2DDD3] shadow-elevated">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex gap-4 items-start">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-24 h-24 object-cover rounded border border-stone-200"
              />
              <div>
                <span className="text-[10px] font-mono text-[#8C7355] uppercase">{selectedProduct.code}</span>
                <h3 className="font-heading font-bold text-xl text-[#1F2421]">{selectedProduct.name}</h3>
                <span className="text-xs text-stone-500">{selectedProduct.gsm} · {selectedProduct.width}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-xs border-t border-stone-200 pt-4">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Weave Mechanism:</span>
                <span className="font-medium text-stone-800">{selectedProduct.weave}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Minimum Export Order:</span>
                <span className="font-medium text-stone-800">{selectedProduct.moq}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Certification:</span>
                <span className="font-medium text-emerald-700">{selectedProduct.cert}</span>
              </div>
              <p className="text-stone-600 pt-2 leading-relaxed">
                {selectedProduct.desc}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#export-inquiry"
                onClick={() => {
                  setFormData(prev => ({ ...prev, notes: `Swatch request for ${selectedProduct.code}` }));
                  setSelectedProduct(null);
                }}
                className="flex-1 py-2.5 bg-[#1F2421] text-white text-xs font-semibold rounded text-center"
              >
                Request Physical Swatch
              </a>
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2.5 border border-stone-300 text-stone-700 text-xs font-semibold rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Footer */}
      <footer className="border-t border-[#E2DDD3] bg-[#EAE5D9] py-8 px-4 text-center text-xs text-[#736F68]">
        <p className="font-medium text-[#1F2421]">Aura Weaves & Jacquards (Surat Mills Showcase)</p>
        <p className="mt-1">Concept demonstration created by NEXUS LM Web Development Services · Surat, Gujarat</p>
      </footer>
    </div>
  );
}
