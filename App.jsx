import React, { useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ShoppingBag, Check, ChevronDown, Instagram, Menu, Minus, Plus, Search, X } from "lucide-react";
import Scene from './Scene.jsx';

const products = [
  { id: 1, name: 'The Sculpted Blazer', category: 'Western', price: 2490, tag: 'BESTSELLER', image: 'photo-1591047139829-d91aecb6caea', tone: 'Stone' },
  { id: 2, name: 'The Everyday Co-ord', category: 'Everyday', price: 1890, tag: 'NEW', image: 'photo-1483985988355-763728e1935b', tone: 'Oat' },
  { id: 3, name: 'The Modern Kurta Set', category: 'Ethnic', price: 2190, tag: 'JUST ARRIVED', image: 'photo-1610030469983-98e550d6193c', tone: 'Ivory' },
  { id: 4, name: 'The Sunday Dress', category: 'Western', price: 1990, tag: 'EDITOR’S PICK', image: 'photo-1539109136881-3be0616acf4b', tone: 'Black' },
  { id: 5, name: 'The Fusion Layer', category: 'Fusion', price: 2290, tag: 'LIMITED EDIT', image: 'photo-1539008835657-9e8e9680c956', tone: 'Sand' },
  { id: 6, name: 'The Soft Structure Shirt', category: 'Everyday', price: 1490, tag: 'WARDROBE ICON', image: 'photo-1598554747436-c9293d6a588f', tone: 'Cream' }
];
const posts = [
  { type: 'THE EDIT', title: 'A softer kind of statement.', text: 'Quiet shapes, considered details and pieces that feel like you.', image: 'photo-1529139574466-a303027c1d8b' },
  { type: 'STYLE NOTES', title: 'One piece. More possibilities.', text: 'Build a wardrobe around pieces that move with your day.', image: 'photo-1483985988355-763728e1935b' },
  { type: 'THE PALETTE', title: 'Neutrals, never ordinary.', text: 'A study in texture, tone and the beauty of restraint.', image: 'photo-1490481651871-ab68de25d43d' }
];
const img = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [toast, setToast] = useState('');
  const [activeProduct, setActiveProduct] = useState(null);
  const [query, setQuery] = useState('');
  const categories = ['All', 'Western', 'Ethnic', 'Fusion', 'Everyday'];
  const visibleProducts = useMemo(() => products.filter(p =>
    (filter === 'All' || p.category === filter) && p.name.toLowerCase().includes(query.toLowerCase())
  ), [filter, query]);
  const count = cart.reduce((n, item) => n + item.qty, 0);
  const total = cart.reduce((n, item) => n + item.price * item.qty, 0);

  const add = (product) => {
    setCart(old => {
      const found = old.find(i => i.id === product.id);
      return found ? old.map(i => i.id === product.id ? {...i, qty:i.qty+1} : i) : [...old, {...product, qty:1}];
    });
    setToast(`${product.name} added to your bag`);
    window.setTimeout(() => setToast(''), 2600);
  };
  const changeQty = (id, delta) => setCart(old => old.map(i => i.id === id ? {...i, qty:i.qty+delta} : i).filter(i => i.qty > 0));
  const submit = (e) => { e.preventDefault(); if (email.includes('@')) setJoined(true); };

  return <div className="site-shell">
    <div className="announcement">A NEW POINT OF VIEW ON EVERYDAY DRESSING <span>✳</span> THE FIRST EDIT IS COMING SOON</div>
    <header className="header">
      <button className="icon-btn mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X/> : <Menu/>}</button>
      <a className="wordmark" href="#home">ÉLVARA<span>®</span><small>WOMENSWEAR</small></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#collections" onClick={()=>setMenuOpen(false)}>COLLECTIONS</a>
        <a href="#story" onClick={()=>setMenuOpen(false)}>OUR STORY</a>
        <a href="#journal" onClick={()=>setMenuOpen(false)}>THE JOURNAL</a>
        <a href="#coming" onClick={()=>setMenuOpen(false)}>COMING SOON</a>
      </nav>
      <div className="header-actions">
        <button className="icon-btn search-toggle" onClick={()=>document.getElementById('product-search')?.focus()} aria-label="Search"><Search size={18}/></button>
        <button className="bag-btn" onClick={()=>setCartOpen(true)}><ShoppingBag size={17}/> <span>BAG ({count})</span></button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow light">THE ART OF EVERYDAY ELEGANCE</p>
          <h1>Style that<br/><em>stays</em> with you.</h1>
          <p className="hero-description">Thoughtful pieces. Modern silhouettes.<br/>A wardrobe that feels entirely your own.</p>
          <a href="#collections" className="light-cta">DISCOVER THE EDIT <ArrowUpRight size={16}/></a>
        </div>
        <div className="hero-side-note">A STUDY IN MODERN FEMININITY — VOL. 01</div>
        <div className="hero-bottom"><span>01 / 04</span><span>WESTERN · ETHNIC · FUSION · EVERYDAY</span><a href="#collections">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
        <div className="hero-stamp">É<br/><small>V</small></div>
      </section>

      <section className="intro section-pad">
        <div className="intro-label eyebrow">A NOTE FROM ÉLVARA</div>
        <p>We believe getting dressed should feel less like a decision and more like <em>coming home to yourself.</em></p>
        <span className="intro-mark">✳</span>
      </section>

      <section className="collections section-pad" id="collections">
        <div className="section-heading">
          <div><p className="eyebrow">CURATED FOR EVERY VERSION OF YOU</p><h2>The wardrobe, <em>reimagined.</em></h2></div>
          <p className="heading-note">Pieces to take you from slow mornings<br/>to wherever the day leads.</p>
        </div>
        <div className="collection-grid">
          <a className="collection-card collection-large" href="#products" onClick={()=>setFilter('Western')} style={{backgroundImage:`url(${img('photo-1539109136881-3be0616acf4b',1200)})`}}>
            <span>01 / WESTERN</span><b>Modern<br/>silhouettes</b><i>EXPLORE <ArrowUpRight size={15}/></i>
          </a>
          <a className="collection-card" href="#products" onClick={()=>setFilter('Ethnic')} style={{backgroundImage:`url(${img('photo-1610030469983-98e550d6193c',900)})`}}>
            <span>02 / ETHNIC</span><b>Rooted in<br/>expression</b><i>EXPLORE <ArrowUpRight size={15}/></i>
          </a>
          <a className="collection-card" href="#products" onClick={()=>setFilter('Fusion')} style={{backgroundImage:`url(${img('photo-1539008835657-9e8e9680c956',900)})`}}>
            <span>03 / FUSION</span><b>Worlds in<br/>conversation</b><i>EXPLORE <ArrowUpRight size={15}/></i>
          </a>
          <a className="collection-card" href="#products" onClick={()=>setFilter('Everyday')} style={{backgroundImage:`url(${img('photo-1483985988355-763728e1935b',900)})`}}>
            <span>04 / EVERYDAY</span><b>Effortless<br/>by nature</b><i>EXPLORE <ArrowUpRight size={15}/></i>
          </a>
        </div>
      </section>

      <section className="product-section section-pad" id="products">
        <div className="section-heading">
          <div><p className="eyebrow">THE FIRST EDIT · VOL. 01</p><h2>Considered <em>essentials.</em></h2></div>
          <p className="heading-note">A first look at the pieces<br/>we can't stop thinking about.</p>
        </div>
        <div className="product-tools">
          <div className="filters">{categories.map(c=><button key={c} className={filter===c?'filter active':'filter'} onClick={()=>setFilter(c)}>{c}</button>)}</div>
          <label className="search-box"><Search size={15}/><input id="product-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find a piece"/></label>
        </div>
        <div className="product-grid">
          {visibleProducts.map(p=><article className="product-card" key={p.id}>
            <button className="product-image" onClick={()=>setActiveProduct(p)} aria-label={`View ${p.name}`}>
              <img src={img(p.image,850)} alt={p.name}/><span className="product-tag">{p.tag}</span><span className="quick-view">QUICK VIEW <ArrowUpRight size={13}/></span>
            </button>
            <div className="product-info"><div><h3>{p.name}</h3><p>{p.category} · {p.tone}</p></div><strong>₹{p.price.toLocaleString('en-IN')}</strong></div>
            <button className="add-btn" onClick={()=>add(p)}>ADD TO BAG <Plus size={14}/></button>
          </article>)}
        </div>
        {visibleProducts.length===0 && <p className="empty">No pieces found. Try another search.</p>}
        <p className="demo-note">PREVIEW COLLECTION — SAMPLE PRODUCTS AND PRICES FOR DESIGN DEMONSTRATION.</p>
      </section>

      <section className="story" id="story">
        <div className="story-image"><img src={img('photo-1525507119028-ed4c629a60a3',1200)} alt="ÉLVARA editorial wardrobe"/></div>
        <div className="story-copy">
          <p className="eyebrow">THE ÉLVARA PERSPECTIVE</p>
          <h2>Not more.<br/><em>More meaningful.</em></h2>
          <p>ÉLVARA is a celebration of personal style — where contemporary western dressing meets the richness of Indian expression. We bring together the pieces, textures and details that make a wardrobe feel considered, versatile and truly yours.</p>
          <a href="#coming" className="text-link">GET TO KNOW US <ArrowUpRight size={15}/></a>
          <div className="story-sign">ÉLVARA <span>— THE EVERYDAY EDIT</span></div>
        </div>
      </section>

      <section className="three-section section-pad">
        <div className="three-copy">
          <p className="eyebrow">A DIFFERENT DIMENSION</p>
          <h2>Form meets<br/><em>feeling.</em></h2>
          <p>Explore our interactive 3D-inspired brand sculpture. Move your pointer across the scene to shift its perspective.</p>
          <span className="drag-hint">↔ MOVE YOUR POINTER TO INTERACT</span>
        </div>
        <Scene/>
        <div className="three-caption">ÉLVARA OBJECT STUDY / 001</div>
      </section>

      <section className="journal section-pad" id="journal">
        <div className="section-heading"><div><p className="eyebrow">INSPIRATION, IN EVERY DETAIL</p><h2>The <em>journal.</em></h2></div><span className="journal-count">NOTES ON PERSONAL STYLE — 001</span></div>
        <div className="journal-grid">
          {posts.map((p,i)=><article className="journal-card" key={p.title}>
            <a href="#coming" className="journal-img"><img src={img(p.image,850)} alt={p.title}/><span>0{i+1}</span></a>
            <p className="eyebrow">{p.type}</p><h3>{p.title}</h3><p>{p.text}</p><a className="read-link" href="#coming">READ THE NOTE <ArrowUpRight size={13}/></a>
          </article>)}
        </div>
      </section>

      <section className="coming" id="coming">
        <div className="coming-image"/>
        <div className="coming-content">
          <p className="eyebrow light">THE FIRST CHAPTER IS ALMOST HERE</p>
          <h2>Something<br/><em>beautiful</em><br/>is on its way.</h2>
          <p>Be first to discover the ÉLVARA first edit. Leave your email for a launch note when we are ready.</p>
          {joined ? <div className="success"><Check size={18}/> YOU’RE ON THE LIST. THANK YOU.</div> :
            <form className="signup" onSubmit={submit}><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address"/><button type="submit" aria-label="Join waitlist"><ArrowRight/></button></form>}
          <small>NO SPAM. JUST A NOTE WHEN THE TIME IS RIGHT.</small>
        </div>
        <div className="coming-side">COMING SOON · INDIA</div>
      </section>

      <section className="social section-pad">
        <p className="eyebrow">FOLLOW THE STORY</p><h2>Find us in the <em>everyday.</em></h2>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link"><Instagram size={17}/> @ELVARA.LABEL <ArrowUpRight size={15}/></a>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-top"><a className="wordmark footer-logo" href="#home">ÉLVARA<span>®</span><small>WOMENSWEAR</small></a><p>Elegance in every detail.<br/>A new point of view on everyday dressing.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div>
      <div className="footer-bottom"><span>© 2026 ÉLVARA. BRAND CONCEPT PREVIEW.</span><span>AN INDEPENDENT FASHION LABEL CONCEPT</span><span>MADE WITH INTENTION.</span></div>
    </footer>

    {cartOpen && <div className="overlay" onClick={()=>setCartOpen(false)}><aside className="cart-drawer" onClick={e=>e.stopPropagation()}>
      <div className="drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Shopping bag ({count})</h2></div><button className="icon-btn" onClick={()=>setCartOpen(false)}><X/></button></div>
      {cart.length===0 ? <div className="empty-bag"><ShoppingBag size={32}/><p>Your bag is waiting for something lovely.</p><button className="dark-btn" onClick={()=>setCartOpen(false)}>CONTINUE EXPLORING</button></div> :
      <><div className="cart-items">{cart.map(i=><div className="cart-item" key={i.id}><img src={img(i.image,240)} alt={i.name}/><div className="cart-item-info"><h3>{i.name}</h3><p>₹{i.price.toLocaleString('en-IN')}</p><div className="qty"><button onClick={()=>changeQty(i.id,-1)}><Minus size={12}/></button><span>{i.qty}</span><button onClick={()=>changeQty(i.id,1)}><Plus size={12}/></button></div></div><strong>₹{(i.price*i.qty).toLocaleString('en-IN')}</strong></div>)}</div>
      <div className="cart-total"><span>SUBTOTAL</span><strong>₹{total.toLocaleString('en-IN')}</strong></div><p className="demo-note">DEMO BAG ONLY — CHECKOUT IS NOT ENABLED.</p></>}
    </aside></div>}
    {activeProduct && <div className="overlay" onClick={()=>setActiveProduct(null)}><div className="quick-modal" onClick={e=>e.stopPropagation()}><button className="modal-close icon-btn" onClick={()=>setActiveProduct(null)}><X/></button><img src={img(activeProduct.image,900)} alt={activeProduct.name}/><div className="modal-copy"><p className="eyebrow">{activeProduct.category} · {activeProduct.tone}</p><h2>{activeProduct.name}</h2><strong>₹{activeProduct.price.toLocaleString('en-IN')}</strong><p>A considered wardrobe piece from the ÉLVARA preview edit. Product details, fabric and size availability will be confirmed before launch.</p><button className="dark-btn" onClick={()=>{add(activeProduct);setActiveProduct(null)}}>ADD TO BAG <Plus size={14}/></button></div></div></div>}
    {toast && <div className="toast"><Check size={15}/>{toast}</div>}
  </div>;
}
export default App;