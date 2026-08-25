import { useState, useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL;
const A = `${BASE}assets`;

// ── Shared assets ─────────────────────────────────────────────────────────────
const imgChatGpt         = `${A}/2fff2.png`;
const imgReels1          = `${A}/268b2.png`;
const imgRect269         = `${A}/386b8.png`;
const imgRect272         = `${A}/718e6.png`;
const imgRect271         = `${A}/3b507.png`;
const imgRect270         = `${A}/3586b.png`;
const imgImg147          = `${A}/e1278.png`;
const imgImg148          = `${A}/1206c.png`;
const imgImg151          = `${A}/d2ef7.png`;
const imgImg149          = `${A}/5cbd8.png`;
const imgImg150          = `${A}/f9be2.png`;
const imgRect273         = `${A}/25430.png`;

// ── Hero connector SVGs (animate on load) ────────────────────────────────────
const imgDesToEvent      = `${A}/3e9b7.svg`;
const imgEventToPhoto    = `${A}/eba0a.svg`;
const imgPhotoToCreat    = `${A}/67ece.svg`;
const imgCreatToDot      = `${A}/3c5b9.svg`;
const imgDotToAbout      = `${A}/d4e93.svg`;

// ── Side/section vectors ──────────────────────────────────────────────────────
const imgVector526       = `${A}/15047.svg`;
const imgVector527       = `${A}/9a4d9.svg`;
const imgVector537rot    = `${A}/37eeb.svg`;
const imgVector536       = `${A}/7acac.svg`;
const imgVector528       = `${A}/8acf4.svg`;

// ── Menu ─────────────────────────────────────────────────────────────────────
const imgMenuButton      = `${A}/49805.svg`;
const imgStarMenu        = `${A}/5b63b.png`;
const imgStarMenu1       = `${A}/d09f4.png`;

// ── Design-section expanded assets ───────────────────────────────────────────
const imgEllipse367      = `${A}/0fc7d.png`;
const imgRect282         = `${A}/eace6.png`;
const imgRect283         = `${A}/ed12e.png`;
const imgRect284         = `${A}/868e0.png`;
const imgRect285         = `${A}/348ed.png`;
const imgEllipse368      = `${A}/90830.png`;
const imgRect287         = `${A}/dd622.png`;
const imgRect288         = `${A}/035e0.png`;
const imgRect289         = `${A}/625ff.png`;
const imgEllipse369      = `${A}/fcdcc.png`;
const imgRect290         = `${A}/b467b.png`;
const imgRect291         = `${A}/2c9e0.png`;
const imgRect292         = `${A}/893bf.png`;

// Carousel images
const imgC01             = `${A}/80e03.png`;
const imgC02             = `${A}/bb9a6.png`;
const imgC03             = `${A}/7c409.png`;
const imgC04             = `${A}/39bcd.png`;
const imgC05             = `${A}/fa21b.png`;
const imgC06             = `${A}/6e026.png`;
const imgC07             = `${A}/dec72.png`;
const imgC08             = `${A}/46782.png`;
const imgC09             = `${A}/081ad.png`;
const imgC10             = `${A}/8c3ea.png`;
const imgC11             = `${A}/571c1.png`;
const imgC12             = `${A}/ec0ce.png`;
const imgC13             = `${A}/13e1a.png`;
const imgC14             = `${A}/9e09c.png`;
const imgC15             = `${A}/cf4e6.png`;
const imgC16             = `${A}/94b0d.png`;
const imgFrame105        = `${A}/fc4fc.svg`;

// Presentation images
const imgP313 = `${A}/ce11b.png`; const imgP315 = `${A}/9d588.png`; const imgP319 = `${A}/5ae05.png`;
const imgP314 = `${A}/9065b.png`; const imgP316 = `${A}/cdec5.png`; const imgP320 = `${A}/1ecf2.png`;
const imgP317 = `${A}/e5bf9.png`; const imgP318 = `${A}/4198e.png`; const imgP321 = `${A}/e07dd.png`;
const imgP322 = `${A}/5eb23.png`; const imgP323 = `${A}/4bc90.png`; const imgP324 = `${A}/34577.png`;
const imgP325 = `${A}/044f4.png`; const imgP326 = `${A}/debf9.png`; const imgP327 = `${A}/6c223.png`;
const imgP329 = `${A}/965aa.png`; const imgP330 = `${A}/8e4bc.png`; const imgP335 = `${A}/77b30.png`;

// Other design assets
const imgImage34         = `${A}/14f60.png`;
const imgMap1            = `${A}/1cdeb.png`;  const imgMap21= `${A}/dd596.png`; const imgMap31= `${A}/52696.png`;
const imgMap41           = `${A}/89f9a.png`;  const imgMap411=`${A}/1a45e.png`; const imgMap51= `${A}/2f395.png`;
const imgMap61           = `${A}/e5afd.png`;  const imgMap4  =`${A}/1cdeb.png`;
const imgLong2           = `${A}/d1db3.png`;
const imgVector201       = `${A}/9a09d.svg`;
const imgGroup           = `${A}/29284.svg`;  const imgGroup1=`${A}/1782c.svg`; const imgGroup2=`${A}/a81fa.svg`;
const imgGroup3          = `${A}/4c581.svg`;  const imgGroup4=`${A}/fa830.svg`; const imgGroup5=`${A}/40e5d.svg`;
const imgGroup6          = `${A}/cc2a7.svg`;  const imgGroup7=`${A}/8e65e.svg`; const imgGroup8=`${A}/13199.svg`;
const imgGroup9          = `${A}/512f1.svg`;
const imgVector206       = `${A}/5cc0e.png`;
const img1901            = `${A}/7c31b.png`;  const img2     =`${A}/596dd.png`; const img3     =`${A}/4cb8c.png`;
const img4               = `${A}/fae35.png`;
const imgMacbook         = `${A}/770fa.png`;
const imgScreen1         = `${A}/39a01.png`;  const imgScreen2=`${A}/55c37.png`;
const imgVectorArrow1    = `${A}/f0950.png`;  const imgVectorArrow2=`${A}/58575.png`;

// Research images
const imgR277 = `${A}/8ea6c.png`; const imgR278 = `${A}/4191a.png`; const imgR279 = `${A}/c319a.png`;
const imgR280 = `${A}/67667.png`; const imgR281 = `${A}/2d2b6.png`;

// Certificate images
const imgCert328 = `${A}/55856.png`; const imgCert334 = `${A}/1c0b2.png`; const imgCert333 = `${A}/112a5.png`;
const imgCert331 = `${A}/3e3f2.png`; const imgCert332 = `${A}/b24c3.png`;

// Side quest images
const imgSide336 = `${A}/17e5a.png`; const imgSide337 = `${A}/11244.png`;
const imgDJ1 = `${A}/49928.png`; const imgDJ2 = `${A}/7e81c.png`; const imgDJ3 = `${A}/00d5b.png`;
const imgAvatar = `${A}/852ae.png`;
const imgStar = `${A}/c33ae.png`; const imgStar1 = `${A}/73093.png`;

// ── Shared styles ─────────────────────────────────────────────────────────────
const mono = "'Cousine', monospace";
const bold = { fontFamily: mono, fontWeight: 700 } as const;
const reg  = { fontFamily: mono, fontWeight: 400 } as const;
const ital = { fontFamily: mono, fontWeight: 400, fontStyle: "italic" } as const;
const cream = "#fff5fb";
const dark  = "#1d1d1d";

const coverImg: React.CSSProperties = {
  position: "absolute", inset: 0, maxWidth: "none",
  objectFit: "cover", pointerEvents: "none", width: "100%", height: "100%",
};
const containImg: React.CSSProperties = {
  position: "absolute", inset: 0, maxWidth: "none",
  objectFit: "contain", pointerEvents: "none", width: "100%", height: "100%",
};

// ── Collapsible wrapper ───────────────────────────────────────────────────────
function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      overflow: "hidden",
      maxHeight: open ? "20000px" : "0",
      opacity: open ? 1 : 0,
      transition: "max-height 0.7s ease, opacity 0.4s ease",
      marginBottom: open ? "80px" : "0",
    }}>
      {children}
    </div>
  );
}

// ── Section sub-header row ────────────────────────────────────────────────────
function SubHeader({
  num, label, open, onClick,
}: { num: string; label: string; open: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex", gap: "20px", alignItems: "center",
        cursor: "pointer", paddingBottom: "70px",
        color: cream, fontSize: "26.299px",
        wordBreak: "break-word", whiteSpace: "nowrap",
        userSelect: "none",
      }}
    >
      <p style={{ ...bold, position: "relative", flexShrink: 0, margin: 0 }}>{num}</p>
      <p style={{ ...reg,  position: "relative", flexShrink: 0, margin: 0 }}>{label}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Expanded content blocks
// ─────────────────────────────────────────────────────────────────────────────

function DesignIdContent() {
  const linkStyle: React.CSSProperties = {
    ...reg, color: cream, fontSize: "28px", textDecoration: "underline",
    cursor: "pointer", display: "block", lineHeight: 0,
  };
  const descStyle: React.CSSProperties = {
    ...reg, color: cream, fontSize: "23px", lineHeight: "normal",
    marginBottom: 0, minWidth: "100%",
  };
  const titleWrap: React.CSSProperties = {
    display: "inline-grid", gridTemplateColumns: "max-content",
    gridTemplateRows: "max-content", placeItems: "start",
  };
  const highlight: React.CSSProperties = {
    backgroundColor: cream, height: "26px", marginTop: "2px",
    gridColumn: 1, gridRow: 1,
  };
  const titleText: React.CSSProperties = {
    ...reg, color: dark, fontSize: "26.299px", whiteSpace: "nowrap",
    lineHeight: "normal", gridColumn: 1, gridRow: 1,
  };
  const doneList: React.CSSProperties = {
    ...reg, color: cream, fontSize: "23px", display: "block",
    listStyleType: "disc", lineHeight: 0,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "flex-start", width: "1240px" }}>

      {/* ── Identity 1: CTRL+FEST ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "flex-start", width: "100%" }}>
        {/* header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "1240px" }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <div style={{ position: "relative", flexShrink: 0, width: "142px", height: "142px" }}>
              <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={imgEllipse367} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "883px" }}>
              <div style={{ ...titleWrap }}>
                <div style={{ ...highlight, width: "347px" }} />
                <p style={{ ...titleText, marginTop: 0 }}>CTRL+FEST, 2025 - Н.В.</p>
              </div>
              <p style={descStyle}>
                CTRL+FEST — образовательная площадка для кинематографистов поколения Z. Здесь молодые авторы могут публично показать работы, получить обратную связь от экспертов индустрии и войти в профессиональное сообщество.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-end", width: "136px" }}>
            <a style={linkStyle} href="https://t.me/ctrl_fest" target="_blank" rel="noopener noreferrer">
              <p style={{ textUnderlinePosition: "from-font", lineHeight: "normal" }}>ТЕЛЕГРАМ</p>
            </a>
            <a style={linkStyle} href="https://ctrlfest.ru" target="_blank" rel="noopener noreferrer">
              <p style={{ textUnderlinePosition: "from-font", lineHeight: "normal" }}>САЙТ</p>
            </a>
          </div>
        </div>
        {/* images row */}
        <div style={{ display: "flex", gap: "12px", height: "327px", alignItems: "center", width: "1240px" }}>
          {[imgRect282, imgRect283, imgRect284, imgRect285].map((src, i) => (
            <div key={i} style={{ height: "327px", position: "relative", flexShrink: 0, width: "300px" }}>
              <img alt="" style={i === 2 ? { position: "absolute", inset: 0, maxWidth: "none", pointerEvents: "none", height: "100%", left: "-26.55%", width: "163.36%" } : containImg} src={src} />
            </div>
          ))}
        </div>
        {/* what was done */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", ...reg, color: cream, width: "1240px" }}>
          <p style={{ lineHeight: "normal", fontSize: "26px", margin: 0 }}>ЧТО СДЕЛАНО:</p>
          <ul style={{ ...doneList }}>
            {[
              "Создание брендбука и визуального языка кинофестиваля",
              "Разработка и визуализация креативных концепций для сопровождения мероприятия",
              "Создание визуала для социальных сетей",
              "Коллаборации с Музеем Кино, тгк «всуе», «Федор, Бонд и Чук», деятелими киноиндустрии как Сергей Малкин (фильм «Здесь был Юра»), Егор Москвитин, Артем Ремизов, Константин Белошапка, Алина Герман (основатель «Улица балабанова»)",
              "Адаптация материала под разные форматы (презентации, социальные сети, сайт, LED-экраны)",
              "Разработка печатной продукции и мерча кинофестиваля",
              "Управление творческим коллективом (~ 5 человек)",
            ].map((t, i, arr) => (
              <li key={i} style={{ lineHeight: "normal", marginBottom: i < arr.length - 1 ? 0 : undefined, marginLeft: "34.5px", fontSize: "23px" }}>
                <span style={{ lineHeight: "normal" }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Identity 2: LUMI ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "35px", alignItems: "flex-start", width: "100%" }}>
        <div style={{ display: "flex", gap: "61px", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <div style={{ position: "relative", flexShrink: 0, width: "142px", height: "142px" }}>
              <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={imgEllipse368} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "883px" }}>
              <div style={titleWrap}>
                <div style={{ ...highlight, width: "206px" }} />
                <p style={titleText}>LUMI, май 2026</p>
              </div>
              <div style={{ ...reg, color: cream, fontSize: "23px" }}>
                <p style={{ lineHeight: "normal", marginBottom: 0 }}>Медиа о поп-культуре через призму критических теорий.</p>
                <p style={{ lineHeight: "normal", margin: 0 }}>(Ех-Клуб Любителей Тейлор Свифт)</p>
              </div>
            </div>
          </div>
          <a style={linkStyle} href="https://t.me/lumi_dot_com" target="_blank" rel="noopener noreferrer">
            <p style={{ textUnderlinePosition: "from-font", lineHeight: "normal" }}>ТЕЛЕГРАМ</p>
          </a>
        </div>
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          {[
            { src: imgRect287, ml: "0", rot: "-3.63deg" },
            { src: imgRect288, ml: "242px", rot: "5.9deg" },
            { src: imgRect289, ml: "510px", rot: "-4.35deg" },
          ].map(({ src, ml, rot }, i) => (
            <div key={i} style={{ gridColumn: 1, gridRow: 1, display: "flex", height: "356px", alignItems: "center", justifyContent: "center", marginLeft: ml, marginTop: "1px", width: "332px" }}>
              <div style={{ transform: `rotate(${rot})` }}>
                <div style={{ height: "327px", position: "relative", width: "300px" }}>
                  <img alt="" style={containImg} src={src} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", ...reg, color: cream, width: "100%" }}>
          <p style={{ lineHeight: "normal", fontSize: "26px", margin: 0 }}>ЧТО СДЕЛАНО:</p>
          <ul style={doneList}>
            {["Ребрендинг медиа, разработка брендбука, визуального языка медиа", "Создание визуала для социальных сетей", "Адаптация материала под разные форматы (презентации, социальные сети)"].map((t, i, arr) => (
              <li key={i} style={{ lineHeight: "normal", marginBottom: i < arr.length - 1 ? 0 : undefined, marginLeft: "34.5px", fontSize: "23px" }}>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Identity 3: VISIONS FILMMAKERS ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "35px", alignItems: "flex-start", width: "100%" }}>
        <div style={{ display: "flex", gap: "61px", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <div style={{ position: "relative", flexShrink: 0, width: "142px", height: "142px" }}>
              <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={imgEllipse369} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "883px" }}>
              <div style={titleWrap}>
                <div style={{ ...highlight, width: "553px" }} />
                <p style={titleText}>VISIONS FILMMAKERS CLUB, апрель 2025</p>
              </div>
              <p style={descStyle}>
                Клуб начинающих кинематографистов и кинолюбителей. Проводим разборы фильмов, мастер-классы и кинопоказы совместно с профессионалами современной российской киноиндустрии
              </p>
            </div>
          </div>
          <a style={linkStyle} href="https://t.me/visionsfilm" target="_blank" rel="noopener noreferrer">
            <p style={{ textUnderlinePosition: "from-font", lineHeight: "normal" }}>ТЕЛЕГРАМ</p>
          </a>
        </div>
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          {[
            { src: imgRect290, ml: "0", rot: "-3.63deg" },
            { src: imgRect291, ml: "242px", rot: "5.9deg" },
            { src: imgRect292, ml: "510px", rot: "-4.35deg" },
          ].map(({ src, ml, rot }, i) => (
            <div key={i} style={{ gridColumn: 1, gridRow: 1, display: "flex", height: "356px", alignItems: "center", justifyContent: "center", marginLeft: ml, marginTop: "1px", width: "332px" }}>
              <div style={{ transform: `rotate(${rot})` }}>
                <div style={{ height: "327px", position: "relative", width: "300px" }}>
                  <img alt="" style={i === 2 ? coverImg : containImg} src={src} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", ...reg, color: cream, width: "100%" }}>
          <p style={{ lineHeight: "normal", fontSize: "26px", margin: 0 }}>ЧТО СДЕЛАНО:</p>
          <ul style={doneList}>
            {["Разработка брендбука и визуального языка медиа", "Создание визуала для социальных сетей и анонсов мероприятий", "Адаптация материала под разные форматы (презентации, социальные сет)"].map((t, i, arr) => (
              <li key={i} style={{ lineHeight: "normal", marginBottom: i < arr.length - 1 ? 0 : undefined, marginLeft: "34.5px", fontSize: "23px" }}>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


function ProjectCarousel({ images }: { images: Array<{ src: string; w: number }> }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragRef = useRef({ dragging: false, startX: 0, startScrollLeft: 0 });
  const rafRef = useRef<number | null>(null);

  const updateActive = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-carousel-card]"));
    if (!cards.length) return;
    let bestIndex = 0;
    let bestDistance = Infinity;
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    setActiveIndex(bestIndex);
  };

  const onScroll = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActive);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    dragRef.current = { dragging: true, startX: event.clientX, startScrollLeft: scroller.scrollLeft };
    scroller.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || !dragRef.current.dragging) return;
    scroller.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    dragRef.current.dragging = false;
    if (scroller?.hasPointerCapture(event.pointerId)) scroller.releasePointerCapture(event.pointerId);
    updateActive();
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    requestAnimationFrame(() => {
      const first = scroller.querySelector<HTMLElement>("[data-carousel-card]");
      if (first) scroller.scrollLeft = Math.max(0, first.offsetLeft + first.offsetWidth / 2 - scroller.clientWidth / 2);
      updateActive();
    });
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div data-name="Project Carousel" style={{ height: "583px", position: "relative", width: "100%", flexShrink: 0 }}>
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          position: "absolute", inset: "0 0 62px 0", display: "flex", gap: "114px", alignItems: "center",
          overflowX: "auto", overflowY: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth",
          padding: "0 455px", boxSizing: "border-box", cursor: dragRef.current.dragging ? "grabbing" : "grab",
          scrollbarWidth: "none", touchAction: "pan-y", userSelect: "none",
        }}
      >
        {images.map(({ src, w }, i) => (
          <div
            key={i}
            data-carousel-card
            style={{ height: "410px", position: "relative", flex: `0 0 ${w}px`, width: `${w}px`, scrollSnapAlign: "center", scrollSnapStop: "always" }}
          >
            <img alt="" draggable={false} style={coverImg} src={src} />
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: "8px", display: "flex", gap: "4px", alignItems: "center", whiteSpace: "nowrap" }}>
        {images.map((_, i) => (
          <span key={i} aria-hidden="true" style={{ color: i === activeIndex ? cream : "#777078", fontSize: "25px", lineHeight: 1 }}>★</span>
        ))}
      </div>
    </div>
  );
}

function InfiniteGalleryEmbed() {
  return (
    <iframe
      title="Infinite portfolio gallery"
      src={`${BASE}custom/infinite-gallery/index.html`}
      tabIndex={-1}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block", pointerEvents: "none", background: dark }}
    />
  );
}

function CardStackEmbed() {
  return (
    <iframe
      title="Interactive card stack"
      src={`${BASE}custom/card-stack/index.html`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block", background: "transparent" }}
    />
  );
}

function DesignPostersContent() {
  const carouselImages = [
    { src: imgC01, w: 253 }, { src: imgC02, w: 328 }, { src: imgC03, w: 651 },
    { src: imgC04, w: 326 }, { src: imgC05, w: 328 }, { src: imgC06, w: 317 },
    { src: imgC07, w: 328 }, { src: imgC08, w: 410 }, { src: imgC09, w: 329 },
    { src: imgC10, w: 334 }, { src: imgC11, w: 410 }, { src: imgC12, w: 317 },
    { src: imgC13, w: 326 }, { src: imgC14, w: 231 }, { src: imgC15, w: 326 },
    { src: imgC16, w: 326 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", width: "1240px" }}>
      <p style={{ ...reg, color: cream, fontSize: "20px", lineHeight: "normal", width: "861px", margin: 0 }}>
        За 3+ года в дизайн среде я сделала, ну, ОЧЕНЬ большое количество постов для социальных сетей, а также «фан» постеров к разным фильмам и сериалом. Предлагаю вам взглянуть на избранное :)
      </p>
      <ProjectCarousel images={carouselImages} />
    </div>
  );
}

function PresentationGrid({ images, links }: { images: [string, string, string]; links: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", flexShrink: 0, width: "504px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start", width: "100%" }}>
        <div style={{ height: "283px", position: "relative", flexShrink: 0, width: "100%" }}>
          <img alt="" style={coverImg} src={images[0]} />
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", width: "100%" }}>
          {([images[1], images[2]] as string[]).map((src, i) => (
            <div key={i} style={{ height: "139px", position: "relative", flexShrink: 0, width: "248px" }}>
              <img alt="" style={coverImg} src={src} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
        <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "31px", width: "243.957px" }} />
        <a style={{ ...reg, color: dark, fontSize: "26.957px", display: "block", gridColumn: 1, gridRow: 1, textDecoration: "underline", cursor: "pointer", lineHeight: 0, whiteSpace: "nowrap" }} href={links[0]} target="_blank" rel="noopener noreferrer">
          <p style={{ textUnderlinePosition: "from-font", lineHeight: "normal", textTransform: "uppercase" }}>Смотреть больше</p>
        </a>
      </div>
    </div>
  );
}

function DesignPresentationsContent() {
  const rows: Array<[[string, string, string], [string, string, string], string, string]> = [
    [[imgP313, imgP315, imgP319], [imgP314, imgP316, imgP320], "https://drive.google.com/file/d/1NF8Zg-pkJUwFdp5NdkV2YY5_oToi8ktV/view?usp=share_link", "https://drive.google.com/file/d/1F315r0xUtSUGscqS53lW6XeOgzbecrYF/view?usp=share_link"],
    [[imgP317, imgP318, imgP321], [imgP322, imgP323, imgP324], "https://drive.google.com/file/d/1JBb5iuUL-0BPh9v7d2APEQpMv2udCZla/view?usp=share_link", "https://drive.google.com/file/d/1qpro_14OX5QVtEbR7m7O8l1yRTEdeMzS/view?usp=share_link"],
    [[imgP325, imgP326, imgP327], [imgP329, imgP330, imgP335], "https://drive.google.com/file/d/17J4ay7aiEy1TAZbfIa2wcWqp0LDevLc-/view?usp=share_link", "https://drive.google.com/file/d/1nggnD1XcGs2gFmsX4RlgmW8tk6unTVkF/view?usp=share_link"],
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start", width: "100%" }}>
      {rows.map(([imgs1, imgs2, link1, link2], i) => (
        <div key={i} style={{ display: "flex", gap: "230px", alignItems: i === 2 ? "flex-start" : "center", flexShrink: 0, width: "100%" }}>
          <PresentationGrid images={imgs1} links={[link1]} />
          <PresentationGrid images={imgs2} links={[link2]} />
        </div>
      ))}
    </div>
  );
}

function DesignOtherContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "80px", alignItems: "flex-start", width: "100%" }}>

      {/* Infographics */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start", width: "1174px" }}>
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "27px", width: "180px" }} />
          <p style={{ ...reg, color: dark, fontSize: "26.299px", whiteSpace: "nowrap", lineHeight: "normal", gridColumn: 1, gridRow: 1, textTransform: "uppercase", marginLeft: "2px" }}>Инфографика</p>
        </div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "flex-end", width: "100%" }}>
          <div style={{ height: "450px", position: "relative", flexShrink: 0, width: "634px" }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
              <img alt="" style={{ position: "absolute", height: "127.63%", left: "-18.7%", maxWidth: "none", top: "-13.63%", width: "135.96%" }} src={imgImage34} />
            </div>
          </div>
          <div style={{ ...reg, color: cream, fontSize: "20px", width: "520px", whiteSpace: "pre-wrap" }}>
            <p style={{ lineHeight: "normal", marginBottom: 0 }}>Проект инфографики "ИИ: глобальные тренды и российская практика"</p>
            <p style={{ lineHeight: "normal", marginBottom: 0 }}>​</p>
            <a style={{ textUnderlinePosition: "from-font", display: "block", cursor: "pointer", textDecoration: "underline", lineHeight: "normal", color: cream }} href="https://deziiign.com/project/4dc690df89cf4d58b4108f2eaa0bd92d" target="_blank" rel="noopener noreferrer">ССЫЛКА</a>
          </div>
        </div>
      </div>

      {/* TG Bot */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start", lineHeight: 0, width: "1240px" }}>
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "30px", width: "704px" }} />
          <p style={{ ...reg, color: dark, fontSize: "26.3px", whiteSpace: "nowrap", lineHeight: "normal", gridColumn: 1, gridRow: 1, textTransform: "uppercase", marginLeft: "2px" }}>ТГ-бот с нестандартными маршрутами по москве</p>
        </div>
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          <div style={{ gridColumn: 1, gridRow: 1, position: "relative", width: "522.989px", height: "522.989px" }}>
            <img alt="" style={coverImg} src={imgMap1} />
          </div>
          <div style={{ gridColumn: 1, gridRow: 1, display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", marginLeft: "522.99px", marginTop: "262.72px", placeItems: "start" }}>
            {[imgMap21, imgMap31, imgMap41].map((src, i) => (
              <div key={i} style={{ gridColumn: 1, gridRow: 1, height: "260px", width: "237px", position: "relative", marginLeft: `${i * 239.82}px` }}>
                <img alt="" style={coverImg} src={src} />
              </div>
            ))}
          </div>
          <div style={{ gridColumn: 1, gridRow: 1, display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", marginLeft: "522.99px", marginTop: "0", placeItems: "start" }}>
            {[imgMap411, imgMap51, imgMap61].map((src, i) => {
              const positions = [{ ml: 479.64, mt: 0 }, { ml: 0, mt: 0 }, { ml: 239.82, mt: 0 }];
              return (
                <div key={i} style={{ gridColumn: 1, gridRow: 1, height: "260px", width: "237px", position: "relative", marginLeft: `${positions[i].ml}px`, marginTop: `${positions[i].mt}px` }}>
                  <img alt="" style={coverImg} src={src} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Merch */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start", width: "1162px" }}>
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "27px", width: "323px" }} />
          <p style={{ ...reg, color: dark, fontSize: "26.299px", whiteSpace: "nowrap", lineHeight: "normal", gridColumn: 1, gridRow: 1, textTransform: "uppercase", marginLeft: "2px" }}>МЕРЧ и дизайн одежды</p>
        </div>
        {/* equatro merch */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
            <div style={{ gridColumn: 1, gridRow: 1, display: "flex", height: "394px", alignItems: "center", justifyContent: "center", marginLeft: "302px", marginTop: "12px", width: "368px" }}>
              <div style={{ transform: "rotate(4.35deg)" }}>
                <div style={{ height: "369px", position: "relative", width: "341px" }}>
                  <img alt="" style={coverImg} src={imgLong2} />
                </div>
              </div>
            </div>
            <div style={{ gridColumn: 1, gridRow: 1, position: "relative", height: "391px", width: "366px" }}>
              <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={imgVector201} />
            </div>
          </div>
          <p style={{ ...reg, color: cream, fontSize: "20px", lineHeight: "normal", width: "243px" }}>
            Сувенирная продукция для smart-вечеринки equatro 25
          </p>
        </div>
        {/* Befree */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "flex-end", width: "100%" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 1fr)",
            gap: "10px", height: "530px", position: "relative", flexShrink: 0, width: "936px",
          }}>
            {[img1901, img2, img3, img4].map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1920/1080" }}>
                <img alt="" style={coverImg} src={src} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start", flexShrink: 0, width: "211px" }}>
            <p style={{ ...reg, color: cream, fontSize: "20px", lineHeight: "normal", margin: 0 }}>Конкурсная работа для Befree</p>
            <a style={{ ...reg, color: cream, fontSize: "20px", textDecoration: "underline", cursor: "pointer", lineHeight: "normal" }} href="https://cocreate.befree.ru/gallery/11914" target="_blank" rel="noopener noreferrer">ССЫЛКА</a>
          </div>
        </div>
      </div>

      {/* Longread */}
      <div style={{ position: "relative", height: "825px", width: "100%", flexShrink: 0 }}>
        <div style={{ position: "absolute", backgroundColor: cream, height: "27px", left: 0, top: "0.16px", width: "118px" }} />
        <p style={{ ...reg, color: dark, fontSize: "26.299px", whiteSpace: "nowrap", lineHeight: "normal", position: "absolute", left: "2px", top: 0, textTransform: "uppercase" }}>ЛОНГРИД</p>
        <a style={{ ...reg, color: cream, fontSize: "26.299px", position: "absolute", left: "158px", top: "0.16px", textDecoration: "underline", cursor: "pointer", textTransform: "uppercase", lineHeight: "normal" }} href="https://www.figma.com/site/MSuBCGp40T7KojC8kGnUZr" target="_blank" rel="noopener noreferrer">ссылка</a>
        <div style={{ position: "absolute", height: "638px", left: 0, top: "70.16px", width: "610px" }}>
          <img alt="" style={{ position: "absolute", inset: "-0.34px -0.25px 30.99px -392px", maxWidth: "none", objectFit: "cover", pointerEvents: "none", width: "calc(100% + 392px + 0.25px)", height: "calc(100% - 30.99px + 0.34px)" }} src={imgMacbook} />
          <img alt="" style={{ position: "absolute", inset: "3.18% 16.45% 15.34% -47.57%", display: "block", maxWidth: "none", width: "calc(100% + 47.57% - 16.45%)", height: "calc(100% - 3.18% - 15.34%)" }} src={imgScreen1} />
        </div>
        <div style={{ position: "absolute", height: "612px", left: "613px", top: "163.25px", width: "627px" }}>
          <img alt="" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 0, right: "-375.25px", maxWidth: "none", objectFit: "cover", pointerEvents: "none", width: "calc(100% + 375.25px)", aspectRatio: "1475.28/894" }} src={imgMacbook} />
          <img alt="" style={{ position: "absolute", top: "calc(50% - 25.87px)", transform: "translateY(-50%)", left: "16.24%", right: "-43.8%", display: "block", maxWidth: "none", aspectRatio: "1177.28/765.23", width: "calc(100% - 16.24% + 43.8%)" }} src={imgScreen2} />
        </div>
      </div>
    </div>
  );
}

function ResearchItem({ title, desc, link, imgSrc, imgStyle }: {
  title: string; desc: string; link: string;
  imgSrc: string; imgStyle?: React.CSSProperties;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-end", flexShrink: 0, width: "100%" }}>
      <div style={{ display: "flex", gap: "144px", alignItems: "center", flexShrink: 0, width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start", flexShrink: 0, width: "1012px" }}>
          <div style={{ backdropFilter: "blur(5px)", backgroundColor: cream, display: "flex", height: "38px", alignItems: "flex-start", padding: "2px 4px", flexShrink: 0 }}>
            <p style={{ ...reg, color: dark, fontSize: "26.299px", whiteSpace: "nowrap", lineHeight: "normal", textTransform: "uppercase", margin: 0 }}>{title}</p>
          </div>
          <p style={{ ...reg, color: cream, fontSize: "23px", lineHeight: "normal", minWidth: "100%", margin: 0 }}>{desc}</p>
        </div>
        <a style={{ ...reg, color: cream, fontSize: "23px", display: "block", flexShrink: 0, textDecoration: "underline", cursor: "pointer", lineHeight: 0, whiteSpace: "nowrap" }} href={link} target="_blank" rel="noopener noreferrer">
          <p style={{ lineHeight: "normal" }}>ССЫЛКА</p>
        </a>
      </div>
      <div style={{ position: "relative", flexShrink: 0, width: "100%", ...imgStyle }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <img alt="" style={{ position: "absolute", maxWidth: "none", width: "100%", ...imgStyle }} src={imgSrc} />
        </div>
      </div>
    </div>
  );
}

function CreateResearchContent() {
  const items = [
    {
      title: "Субкультуры и эстетики в Московской городской среде, 2026",
      desc: "В качестве своей курсовой работы я провела ийселдование о том, как мода влияет на формирование сообществ в городской среде Москвы. Как итог, на основе анкетирования сделала интерактивную карту, на которой можно посмотреть где «обитает» та или иная субкультура/эстетика.",
      link: "https://aniralahsas.github.io/subcultures_and_cores_Moscow/",
      imgSrc: imgR277, h: 293,
      imgInnerStyle: { height: "235.12%", top: "-76.25%", left: "0.02%" },
    },
    {
      title: "КИНО И МОДА: СЛИЯНИЕ ДВУХ ИНДУСТРИЙ, 2026",
      desc: "Кино и мода, на первый взгляд, близкие, но не настолько «вовлеченные» друг в друга сферы. Однако это далеко не так. Я решила разобраться, как мода проникает в кино и наоборот.",
      link: "https://education.mediiia.com/project/088112fe3aa542749e38ae44f4293974",
      imgSrc: imgR278, h: 293,
      imgInnerStyle: { height: "235.12%", top: "-0.07%", left: "0.06%" },
    },
    {
      title: "Визуальное исследование выставки «Дзига Вертов.Киноглаз», 2026",
      desc: "Благодаря Высшей школе эконимики по второму «микро» образованию я медиатор. В качаестве итоговой работе на minor «История искусства в современном мире» я провела исследованию по устройству и разнообразию выставки «Дзига Вертов.Киноглаз», а также составила план экскурсии по ней.",
      link: "https://deziiign.com/project/21526f2e4e1b4b6c958dd0fb5d2bf628",
      imgSrc: imgR279, h: 250,
      imgInnerStyle: { height: "275.56%", top: "-67.02%", left: "0.06%" },
    },
    {
      title: "ИДЕЯ КОНЦЕПТ-БАРА «КРУГОВОРОТ»",
      desc: "Представьте:\nВы заходите в бар. Вместо привычных столиков, по центру круглая извилистая барная стойка, все общаются и держат свои напитки в причудливых стаканах, которые нельзя поставить… Вы попали в концепт-бар «КРУГОВОРОТ»",
      link: "https://education.mediiia.com/project/a10b3df9c3b24480a8fbf90b2ef33ac2",
      imgSrc: imgR280, h: 293,
      imgInnerStyle: { height: "235.12%", top: "-131.09%", left: "0.06%" },
    },
    {
      title: "«Все должны быть как все: публичный одиночка Энди Уорхол»",
      desc: "Сценарная заявка на производство документального фильма\n«Все должны быть как все: публичный одиночка Энди Уорхол»",
      link: "https://deziiign.com/project/6928433fd83d4c878e93ebda70ba090c",
      imgSrc: imgR281, h: 293,
      imgInnerStyle: { height: "235.12%", top: "-67.71%", left: "0.06%" },
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "80px", alignItems: "flex-start", width: "100%" }}>
      {items.map(({ title, desc, link, imgSrc, h, imgInnerStyle }, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-end", flexShrink: 0, width: "100%" }}>
          <div style={{ display: "flex", gap: "144px", alignItems: "center", flexShrink: 0, width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start", flexShrink: 0, width: "1012px" }}>
              <div style={{ backdropFilter: "blur(5px)", backgroundColor: cream, display: "flex", height: "38px", alignItems: "flex-start", padding: "2px 4px" }}>
                <p style={{ ...reg, color: dark, fontSize: "26.299px", whiteSpace: "nowrap", lineHeight: "normal", textTransform: "uppercase", margin: 0 }}>{title}</p>
              </div>
              <p style={{ ...reg, color: cream, fontSize: "23px", lineHeight: "normal", margin: 0, whiteSpace: "pre-line" }}>{desc}</p>
            </div>
            <a style={{ ...reg, color: cream, fontSize: "23px", display: "block", flexShrink: 0, textDecoration: "underline", cursor: "pointer", lineHeight: 0, whiteSpace: "nowrap" }} href={link} target="_blank" rel="noopener noreferrer">
              <p style={{ lineHeight: "normal" }}>ССЫЛКА</p>
            </a>
          </div>
          <div style={{ height: `${h}px`, position: "relative", flexShrink: 0, width: "100%" }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
              <img alt="" style={{ position: "absolute", maxWidth: "none", width: "100%", ...imgInnerStyle }} src={imgSrc} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CreateCertificateContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center", width: "100%" }}>
      <div style={{ display: "flex", gap: "38px", alignItems: "center", flexShrink: 0, width: "100%" }}>
        {[imgCert328, imgCert334, imgCert333].map((src, i) => (
          <div key={i} style={{ height: "498px", position: "relative", flexShrink: 0, width: "388px" }}>
            <img alt="" style={containImg} src={src} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center", flexShrink: 0, width: "100%" }}>
        {[imgCert331, imgCert332].map((src, i) => (
          <div key={i} style={{ height: "372px", position: "relative", flexShrink: 0, width: "610px" }}>
            <img alt="" style={containImg} src={src} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateSideContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "80px", alignItems: "flex-start", width: "100%" }}>
      {/* DJ section */}
      <div style={{ display: "flex", gap: "41px", alignItems: "flex-end", flexShrink: 0, width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "17px", alignItems: "flex-start", flexShrink: 0, width: "673px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end", width: "100%" }}>
            <p style={{ ...reg, color: cream, fontSize: "20px", lineHeight: "normal", minWidth: "100%", margin: 0 }}>
              ПОМИМО ДИЗАЙНА, ИВЕНТА И ФОТО, У МЕНЯ ЕСТЬ АЛЬТЕР-ЭГО...
            </p>
            <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
              <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "21px", marginTop: "1px", width: "293px" }} />
              <p style={{ ...reg, color: dark, fontSize: "20px", lineHeight: "normal", gridColumn: 1, gridRow: 1, whiteSpace: "nowrap", marginLeft: "1px", margin: 0 }}>...Я ДИДЖЕЙ Lara Palmer!</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "24px", alignItems: "center", flexShrink: 0, width: "100%" }}>
            <div style={{ height: "256px", position: "relative", flexShrink: 0, width: "233px" }}>
              <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                <img alt="" style={{ position: "absolute", height: "121.35%", left: 0, maxWidth: "none", top: "-10.79%", width: "100%" }} src={imgSide336} />
              </div>
            </div>
            <div style={{ height: "256px", position: "relative", flexShrink: 0, width: "416px" }}>
              <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                <img alt="" style={{ position: "absolute", height: "121.87%", left: 0, maxWidth: "none", top: "-17.06%", width: "100%" }} src={imgSide337} />
              </div>
            </div>
          </div>
        </div>
        {/* DJ photo stack */}
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start" }}>
          <div style={{ gridColumn: 1, gridRow: 1, display: "flex", height: "279px", alignItems: "center", justifyContent: "center", marginLeft: "288.06px", width: "237.559px" }}>
            <div style={{ transform: "rotate(9.17deg)" }}>
              <div style={{ height: "250px", position: "relative", width: "200px" }}>
                <img alt="" style={coverImg} src={imgDJ1} />
              </div>
            </div>
          </div>
          <div style={{ gridColumn: 1, gridRow: 1, display: "flex", height: "271px", alignItems: "center", justifyContent: "center", marginLeft: "0", marginTop: "3.49px", width: "227px" }}>
            <div style={{ transform: "rotate(-6.5deg)" }}>
              <div style={{ height: "250px", position: "relative", width: "200px" }}>
                <img alt="" style={coverImg} src={imgDJ2} />
              </div>
            </div>
          </div>
          <div style={{ gridColumn: 1, gridRow: 1, display: "flex", height: "255px", alignItems: "center", justifyContent: "center", marginLeft: "131.04px", marginTop: "11.7px", width: "205px" }}>
            <div style={{ transform: "rotate(-0.67deg)" }}>
              <div style={{ height: "253px", position: "relative", width: "202px" }}>
                <img alt="" style={coverImg} src={imgDJ3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Writing section: flex row matching Figma node 23:247 — gap-224px items-start */}
      <div style={{ display: "flex", gap: "224px", alignItems: "flex-start", flexShrink: 0 }}>
        {/* Left: "А ЕЩЕ Я ПИШУ..." text + avatar + link */}
        <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", placeItems: "start", flexShrink: 0 }}>
          <p style={{ ...reg, color: cream, fontSize: "20px", lineHeight: "normal", gridColumn: 1, gridRow: 1, whiteSpace: "nowrap", margin: 0 }}>
            А ЕЩЕ Я ПИШУ РАЗНЫЕ ТЕКСТЫ ПРО КИНО
          </p>
          <div style={{ gridColumn: 1, gridRow: 1, display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", marginLeft: "126px", marginTop: "44px", placeItems: "start" }}>
            <div style={{ gridColumn: 1, gridRow: 1, position: "relative", marginLeft: "24px", width: "120px", height: "120px" }}>
              <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "120px", height: "120px" }} src={imgAvatar} />
            </div>
            <div style={{ gridColumn: 1, gridRow: 1, display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", marginTop: "111px", placeItems: "start" }}>
              <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "23px", width: "169px" }} />
              <a style={{ ...reg, color: dark, fontSize: "20px", display: "block", gridColumn: 1, gridRow: 1, textDecoration: "underline", cursor: "pointer", lineHeight: 0, whiteSpace: "nowrap" }} href="https://t.me/cherez_prizmy" target="_blank" rel="noopener noreferrer">
                <p style={{ lineHeight: "normal" }}>«ЧЕРЕЗ ПРИЗМУ»</p>
              </a>
            </div>
          </div>
        </div>
        {/* Right: italic quote */}
        <p style={{ ...ital, color: cream, fontSize: "20px", lineHeight: "normal", width: "592px", textAlign: "right", flexShrink: 0, margin: 0 }}>
          «Греет душу то, что сериал на самом деле сделали, чтобы визуализировать, оживить любовь к своим фаворитам из кино. Для меня, в этом и кроется nerd составляющая сериала. Дотошные юные фанаты внутри Дафферов буквально осуществили свою детскую, подростковую мечту благодаря этому сериалу, тем самым продлив себе магию coming of age, которую несут в себе Stranger things»
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Menu overlay
// ─────────────────────────────────────────────────────────────────────────────
function MenuOverlay({ visible, onClose, refs }: {
  visible: boolean;
  onClose: () => void;
  refs: Record<string, React.RefObject<HTMLElement | null>>;
}) {
  const menuItems = [
    { label: "ОБО МНЕ",   key: "aboutMe" },
    { label: "ДИЗАЙН",    key: "design" },
    { label: "ИВЕНТ",     key: "event" },
    { label: "ФОТО/ВИДЕО",key: "photo" },
    { label: "КРЕАТИВ",   key: "kreativ" },
    { label: "КОНТАКТЫ",  key: "contacts" },
  ];

  const scrollTo = (key: string) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        backdropFilter: "blur(5px)", backgroundColor: "rgba(255,245,251,0.2)",
        opacity: visible ? 1 : 0, pointerEvents: visible ? "all" : "none",
        transition: "opacity 0.35s ease",
      }}
      onClick={onClose}
    >
      {/* Stars */}
      <div style={{ position: "absolute", display: "flex", height: "416px", alignItems: "center", justifyContent: "center", left: "721px", top: "90px", width: "398px" }}>
        <div style={{ transform: "rotate(-25.45deg)" }}>
          <div style={{ height: "325px", position: "relative", width: "287px" }}>
            <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "287px", height: "325px" }} src={imgStarMenu} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", display: "flex", height: "416px", alignItems: "center", justifyContent: "center", left: "371px", top: "488px", width: "398px" }}>
        <div style={{ transform: "rotate(25.37deg)" }}>
          <div style={{ height: "325px", position: "relative", width: "287px" }}>
            <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "287px", height: "325px" }} src={imgStarMenu1} />
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div
        style={{
          position: "absolute", left: "50%", top: "50%",
          transform: `translate(-50%, calc(-50% + ${visible ? "0px" : "-20px"}))`,
          transition: "transform 0.4s ease",
          display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", width: "189px",
        }}
        onClick={e => e.stopPropagation()}
      >
        {menuItems.map(({ label, key }) => (
          <div
            key={key}
            onClick={() => scrollTo(key)}
            style={{
              backdropFilter: "blur(5px)", backgroundColor: cream,
              display: "flex", flexDirection: "column", height: "38px", alignItems: "flex-start",
              padding: "2px 4px", flexShrink: 0, cursor: "pointer", width: label === "ФОТО/ВИДЕО" ? "100%" : undefined,
            }}
          >
            <p style={{ ...reg, color: dark, fontSize: "30px", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main App
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  type SectionKey = "design_id" | "design_posters" | "design_presentations" | "design_other" |
                    "create_research" | "create_certificate" | "create_side";

  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    design_id: false, design_posters: false, design_presentations: false, design_other: false,
    create_research: false, create_certificate: false, create_side: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [connVisible, setConnVisible] = useState([false, false, false, false, false]);

  const toggle = (key: SectionKey) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  const isOpen = (key: SectionKey) => open[key];

  // Scroll refs for menu navigation
  const refs = {
    aboutMe:  { current: null as HTMLElement | null },
    design:   { current: null as HTMLElement | null },
    event:    { current: null as HTMLElement | null },
    photo:    { current: null as HTMLElement | null },
    kreativ:  { current: null as HTMLElement | null },
    contacts: { current: null as HTMLElement | null },
  };

  useEffect(() => {
    // Animate connectors sequentially on load
    [0, 700, 1400, 2100, 2800].forEach((delay, i) => {
      setTimeout(() => {
        setConnVisible(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, delay);
    });
  }, []);

  const connectorStyle = (visible: boolean, extra?: React.CSSProperties): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transition: "opacity 0.8s ease",
    ...extra,
  });

  return (
    <>
      <style>{`
        @keyframes drawLine {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
      `}</style>

      {/* Menu overlay */}
      <MenuOverlay visible={menuOpen} onClose={() => setMenuOpen(false)} refs={refs as any} />

      {/* Main page container */}
      <div style={{ backgroundColor: dark, position: "relative", width: "1440px", fontFamily: mono }}>

        {/* ── CUSTOM_CODE_BLOCK_01: Demo 1 infinite WebGL gallery ── */}
        <div data-name="CUSTOM_CODE_BLOCK_01" style={{ position: "absolute", height: "1005px", left: 0, top: 0, width: "1440px", overflow: "hidden" }}>
          <InfiniteGalleryEmbed />
        </div>

        {/* ── Hero connector animations ── */}
        {/* des_to_event */}
        <div style={{ position: "absolute", height: "92.5px", left: "133.5px", top: "146.5px", width: "805.5px", ...connectorStyle(connVisible[0]) }}>
          <div style={{ position: "absolute", inset: "-1.07% 0" }}>
            <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={imgDesToEvent} />
          </div>
        </div>
        {/* event_to_photo */}
        <div style={{ position: "absolute", height: "248px", left: "302.5px", top: "240.5px", width: "636.5px", ...connectorStyle(connVisible[1]) }}>
          <div style={{ position: "absolute", inset: "-0.38% 0" }}>
            <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={imgEventToPhoto} />
          </div>
        </div>
        {/* photo_to_creat */}
        <div style={{ position: "absolute", height: "56.5px", left: "303px", top: "537px", width: "409.5px", ...connectorStyle(connVisible[2]) }}>
          <div style={{ position: "absolute", inset: "-1.75% 0" }}>
            <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={imgPhotoToCreat} />
          </div>
        </div>
        {/* creat_to_dot */}
        <div style={{ position: "absolute", height: "165px", left: "714px", top: "648px", width: "386px", ...connectorStyle(connVisible[3]) }}>
          <div style={{ position: "absolute", inset: "-0.56% -0.1%" }}>
            <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={imgCreatToDot} />
          </div>
        </div>
        {/* dot_to_about */}
        <div style={{ position: "absolute", height: "256.5px", left: "99.5px", top: "818px", width: "1001.5px", ...connectorStyle(connVisible[4]) }}>
          <div style={{ position: "absolute", inset: "-0.38% 0" }}>
            <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={imgDotToAbout} />
          </div>
        </div>

        {/* ── Nav bar buttons ── */}
        <button onClick={() => refs.design.current?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{ wordBreak: "break-word", position: "absolute", backdropFilter: "blur(5px)", backgroundColor: "rgba(29,29,29,0.5)", display: "flex", gap: "20px", height: "38px", alignItems: "flex-start", lineHeight: "normal", left: "80px", fontStyle: "normal", padding: "2px 4px", color: cream, fontSize: "30px", textAlign: "left", top: "97px", whiteSpace: "nowrap", border: "none", cursor: "pointer" }}>
          <p style={{ ...bold, position: "relative", flexShrink: 0, margin: 0 }}>[1]</p>
          <p style={{ ...reg,  position: "relative", flexShrink: 0, margin: 0 }}>ДИЗАЙН</p>
        </button>
        <button onClick={() => refs.event.current?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{ wordBreak: "break-word", position: "absolute", backdropFilter: "blur(5px)", backgroundColor: "rgba(29,29,29,0.5)", display: "flex", gap: "20px", height: "38px", alignItems: "flex-start", lineHeight: "normal", left: "952px", fontStyle: "normal", padding: "2px 4px", color: cream, fontSize: "30px", textAlign: "left", top: "220px", whiteSpace: "nowrap", border: "none", cursor: "pointer" }}>
          <p style={{ ...bold, position: "relative", flexShrink: 0, margin: 0 }}>[2]</p>
          <p style={{ ...reg,  position: "relative", flexShrink: 0, margin: 0 }}>ИВЕНТ</p>
        </button>
        <button onClick={() => refs.photo.current?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{ wordBreak: "break-word", position: "absolute", backdropFilter: "blur(5px)", backgroundColor: "rgba(29,29,29,0.5)", display: "flex", gap: "20px", height: "38px", alignItems: "flex-start", lineHeight: "normal", left: "236px", fontStyle: "normal", padding: "2px 4px", color: cream, fontSize: "30px", textAlign: "left", top: "494px", whiteSpace: "nowrap", border: "none", cursor: "pointer" }}>
          <p style={{ ...bold, position: "relative", flexShrink: 0, margin: 0 }}>[3]</p>
          <p style={{ ...reg,  position: "relative", flexShrink: 0, margin: 0 }}>ФОТО/ВИДЕО</p>
        </button>
        <button onClick={() => refs.kreativ.current?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{ wordBreak: "break-word", position: "absolute", backdropFilter: "blur(5px)", backgroundColor: "rgba(29,29,29,0.5)", display: "flex", gap: "20px", height: "38px", alignItems: "flex-start", lineHeight: "normal", left: "689px", fontStyle: "normal", padding: "2px 4px", color: cream, fontSize: "30px", textAlign: "left", top: "602px", whiteSpace: "nowrap", border: "none", cursor: "pointer" }}>
          <p style={{ ...bold, position: "relative", flexShrink: 0, margin: 0 }}>[4]</p>
          <p style={{ ...reg,  position: "relative", flexShrink: 0, margin: 0 }}>КРЕАТИВ</p>
        </button>

        {/* ── Menu button ── */}
        <div
          onClick={() => setMenuOpen(true)}
          style={{ position: "absolute", height: "41px", left: "1263px", top: "70px", width: "137px", cursor: "pointer" }}
        >
          <img alt="" style={{ position: "absolute", display: "block", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={imgMenuButton} />
        </div>

        {/* ── [0] ОБО МНЕ ── */}
        <div
          ref={el => { refs.aboutMe.current = el; }}
          style={{ wordBreak: "break-word", position: "absolute", backdropFilter: "blur(5px)", backgroundColor: "rgba(29,29,29,0.5)", display: "flex", gap: "20px", height: "38px", alignItems: "flex-start", lineHeight: "normal", left: "73px", fontStyle: "normal", padding: "2px 4px", color: cream, fontSize: "30px", top: "1089px", width: "207px", whiteSpace: "nowrap" }}
        >
          <p style={{ ...bold, position: "relative", flexShrink: 0, margin: 0 }}>[0]</p>
          <p style={{ ...reg,  position: "relative", flexShrink: 0, margin: 0 }}>ОБО МНЕ</p>
        </div>

        {/* ── About me content ── */}
        <div style={{ position: "absolute", display: "flex", gap: "73px", alignItems: "flex-start", left: "120px", top: "1160px" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", position: "relative", flexShrink: 0 }}>
            <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", lineHeight: 0, placeItems: "start", position: "relative", flexShrink: 0 }}>
              <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "22px", marginLeft: 0, marginTop: "50px", position: "relative", width: "202px" }} />
              <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "20px", marginLeft: 0, marginTop: "96px", position: "relative", width: "144px" }} />
              <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "20px", marginLeft: 0, marginTop: "210px", position: "relative", width: "216px" }} />
              <div style={{ wordBreak: "break-word", gridColumn: 1, gridRow: 1, ...reg, marginLeft: 0, marginTop: 0, fontStyle: "normal", position: "relative", color: cream, fontSize: 0, width: "432px", whiteSpace: "pre-wrap" }}>
                <p style={{ lineHeight: "normal", marginBottom: 0, fontSize: "26px" }}>ЛАРИНА АЛЕКСАНДРА СЕРГЕЕВНА</p>
                <p style={{ lineHeight: "normal", marginBottom: 0, fontSize: "20px" }}>​</p>
                <p style={{ marginBottom: 0, fontSize: "20px" }}>
                  <span style={{ lineHeight: "normal", color: dark }}>ГОРОД ПРОЖИВАНИЯ: </span>
                  <span style={{ lineHeight: "normal" }}>МОСКВА</span>
                </p>
                <p style={{ lineHeight: "normal", marginBottom: 0, fontSize: "20px" }}>​</p>
                <p style={{ lineHeight: "normal", marginBottom: 0, color: dark, fontSize: "20px" }}>ОБРАЗОВАНИЕ:</p>
                <p style={{ lineHeight: "normal", marginBottom: 0, fontSize: "20px" }}>НИУ ВШЭ, БАКАЛАВР, 2023-2027<br />ФАКУЛЬТЕТ КРЕАТИВНЫХ ИНДУСТРИЙ, МЕДИАКОММУНИКАЦИИ</p>
                <p style={{ lineHeight: "normal", marginBottom: 0, fontSize: "20px" }}>​</p>
                <p style={{ lineHeight: "normal", marginBottom: 0, color: dark, fontSize: "20px" }}>ИНОСТРАННЫЕ ЯЗЫКИ:</p>
                <p style={{ lineHeight: "normal", fontSize: "20px", margin: 0 }}>АНГЛИЙСКИЙ ЯЗЫК УРОВЕНЬ: С1</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "23px", alignItems: "flex-start", position: "relative", flexShrink: 0, width: "428.966px" }}>
              <div style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content", lineHeight: 0, placeItems: "start", position: "relative", flexShrink: 0 }}>
                <div style={{ backgroundColor: cream, gridColumn: 1, gridRow: 1, height: "26px", width: "85px" }} />
                <p style={{ ...reg, lineHeight: "normal", marginLeft: "2px", marginTop: "3px", fontStyle: "normal", position: "relative", gridColumn: 1, gridRow: 1, color: dark, fontSize: "20px", whiteSpace: "nowrap", margin: 0 }}>НАВЫКИ:</p>
              </div>
              <div style={{ display: "flex", gap: "40px", alignItems: "center", position: "relative", flexShrink: 0, width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8.38px", alignItems: "flex-start", position: "relative", flexShrink: 0, width: "235px" }}>
                  <p style={{ ...reg, lineHeight: "normal", fontStyle: "normal", position: "relative", flexShrink: 0, color: cream, fontSize: "16.761px", width: "100%", margin: 0 }}>ПРОДВИНУТЫЙ</p>
                  <div style={{ display: "flex", gap: "25.141px", alignItems: "center", position: "relative", flexShrink: 0, width: "100%" }}>
                    <div style={{ height: "61.102px", position: "relative", flexShrink: 0, width: "60.818px" }}>
                      <img alt="" style={coverImg} src={imgImg147} />
                    </div>
                    <div style={{ height: "61.13px", position: "relative", flexShrink: 0, width: "62.633px" }}>
                      <img alt="" style={coverImg} src={imgImg148} />
                    </div>
                    <div style={{ position: "relative", borderRadius: "11.051px", flexShrink: 0, width: "61.267px", height: "61.267px" }}>
                      <img alt="" style={{ ...coverImg, borderRadius: "11.051px" }} src={imgImg151} />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8.38px", alignItems: "flex-start", position: "relative", flexShrink: 0, width: "151.966px" }}>
                  <p style={{ ...reg, lineHeight: "normal", fontStyle: "normal", position: "relative", flexShrink: 0, color: cream, fontSize: "16.761px", width: "100%", margin: 0 }}>БАЗОВЫЙ</p>
                  <div style={{ display: "flex", gap: "25.141px", alignItems: "center", position: "relative", flexShrink: 0, width: "100%" }}>
                    <div style={{ height: "61.136px", position: "relative", flexShrink: 0, width: "63.854px" }}>
                      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                        <img alt="" style={{ position: "absolute", height: "111.11%", left: "-3.19%", maxWidth: "none", top: "-5.56%", width: "106.38%" }} src={imgImg149} />
                      </div>
                    </div>
                    <div style={{ height: "61.397px", position: "relative", flexShrink: 0, width: "62.971px" }}>
                      <img alt="" style={coverImg} src={imgImg150} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "294px", position: "relative", flexShrink: 0, width: "283px" }}>
            <img alt="" style={coverImg} src={imgRect273} />
          </div>
        </div>

        {/* ── Flow content (from [1] ДИЗАЙН downward) ── */}
        <div style={{ paddingTop: "1498px" }}>

          {/* ── [1] ДИЗАЙН ── */}
          <div
            ref={el => { refs.design.current = el; }}
            style={{ display: "flex", gap: "20px", alignItems: "center", paddingLeft: "73px", paddingBottom: "30px", color: cream, fontSize: "30px", whiteSpace: "nowrap" }}
          >
            <p style={{ ...bold, margin: 0 }}>[1]</p>
            <p style={{ ...reg, margin: 0 }}>ДИЗАЙН</p>
          </div>

          {/* Design sub-sections */}
          <div style={{ position: "relative", paddingLeft: "120px", paddingBottom: "110px" }}>
            <SubHeader num="[1.1]" label="АЙДЕНТИКА" open={isOpen("design_id")} onClick={() => toggle("design_id")} />
            <Collapsible open={isOpen("design_id")}><DesignIdContent /></Collapsible>

            <SubHeader num="[1.2]" label="ПОСТЫ И ПОСТЕРЫ" open={isOpen("design_posters")} onClick={() => toggle("design_posters")} />
            <Collapsible open={isOpen("design_posters")}><DesignPostersContent /></Collapsible>

            <SubHeader num="[1.3]" label="ПРЕЗЕНТАЦИИ" open={isOpen("design_presentations")} onClick={() => toggle("design_presentations")} />
            <Collapsible open={isOpen("design_presentations")}><DesignPresentationsContent /></Collapsible>

            <SubHeader num="[1.4]" label="ОСТАЛЬНОЕ" open={isOpen("design_other")} onClick={() => toggle("design_other")} />
            <Collapsible open={isOpen("design_other")}><DesignOtherContent /></Collapsible>
          </div>

          {/* ── [2] ИВЕНТ ── */}
          <div
            ref={el => { refs.event.current = el; }}
            style={{ display: "flex", gap: "20px", alignItems: "center", paddingLeft: "73px", paddingBottom: "60px", color: cream, fontSize: "30px", whiteSpace: "nowrap" }}
          >
            <p style={{ ...bold, margin: 0 }}>[2]</p>
            <p style={{ ...reg, margin: 0 }}>ИВЕНТ</p>
          </div>

          {/* Event frame */}
          <div style={{ position: "relative", height: "361px", left: "0", paddingLeft: "120px", paddingBottom: "70px" }}>
            <div style={{ position: "relative", height: "361px", width: "1240px" }}>
              <div style={{ position: "absolute", display: "flex", gap: "5px", alignItems: "flex-end", justifyContent: "flex-end", left: 0, top: "49px" }}>
                <div style={{ display: "flex", gap: "11px", alignItems: "flex-end", position: "relative", flexShrink: 0 }}>
                  <div style={{ height: "312px", position: "relative", flexShrink: 0, width: "383px" }}>
                    <img alt="" style={coverImg} src={imgRect269} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", position: "relative", flexShrink: 0, width: "180px" }}>
                    <div style={{ height: "114px", position: "relative", flexShrink: 0, width: "100%" }}>
                      <img alt="" style={coverImg} src={imgRect272} />
                    </div>
                    <div style={{ height: "184px", position: "relative", flexShrink: 0, width: "100%" }}>
                      <img alt="" style={coverImg} src={imgRect271} />
                    </div>
                  </div>
                  <div style={{ height: "310px", position: "relative", flexShrink: 0, width: "166px" }}>
                    <img alt="" style={{ ...coverImg, objectPosition: "bottom" }} src={imgRect270} />
                  </div>
                </div>
                <ul style={{ ...reg, display: "block", lineHeight: 0, listStyleType: "disc", fontStyle: "normal", position: "relative", flexShrink: 0, color: cream, fontSize: "20px", width: "484px", margin: 0, padding: 0 }}>
                  <li style={{ lineHeight: "normal", marginBottom: 0, marginLeft: "30px" }}>
                    <span style={{ ...bold }}>2024–2026 г.. </span>
                    <span>Организатор мероприятий в </span>
                    <a style={{ textDecorationSkipInk: "none", textUnderlinePosition: "from-font", cursor: "pointer", textDecoration: "underline solid", color: cream }} href="http://tslovers.tilda.ws/" target="_blank" rel="noopener noreferrer">Клубе любителей Тейлор Свифт</a>
                  </li>
                  <li style={{ lineHeight: "normal", marginBottom: 0, marginLeft: "30px" }}>
                    <span style={{ ...bold }}>2025г.</span>{" Организатор внешних событий на кинофестивале „"}
                    <a style={{ textDecorationSkipInk: "none", textUnderlinePosition: "from-font", cursor: "pointer", textDecoration: "underline solid", color: cream }} href="http://metrskfest.tilda.ws/" target="_blank" rel="noopener noreferrer">«Метр с кепкой»</a>
                  </li>
                  <li style={{ lineHeight: "normal", marginBottom: 0, marginLeft: "30px" }}>
                    <span style={{ ...bold }}>2024 г.. </span>Участник «Дневников ММКФ» (полевой корреспондент фестиваля)
                  </li>
                  <li style={{ lineHeight: "normal", marginBottom: 0, marginLeft: "30px" }}>
                    <span style={{ ...bold }}>2023–2025 г.. </span>Менеджер по работе с партнёрами студ актива «<a style={{ textUnderlinePosition: "from-font", cursor: "pointer", textDecoration: "underline solid", color: cream }} href="https://vk.ru/stroenie5" target="_blank" rel="noopener noreferrer">Четверть»</a>
                  </li>
                  <li style={{ lineHeight: "normal", marginLeft: "30px" }}>
                    {"2023 г.. Ораганизатор "}
                    <a style={{ textUnderlinePosition: "from-font", cursor: "pointer", textDecoration: "underline solid", color: cream }} href="https://v-a-c.org/ges2/smaller-things-the-young-adults-project-graduation-party" target="_blank" rel="noopener noreferrer">перфоманса и свопа</a>
                    {" в Доме культур «ГЭС-2»"}
                  </li>
                </ul>
              </div>
              {/* event_text */}
              <div style={{ position: "absolute", left: "553px", top: 0 }}>
                <div style={{ position: "absolute", backdropFilter: "blur(5.45px)", backgroundColor: "rgba(29,29,29,0.4)", height: "34px", left: 0, top: 0, width: "667px" }} />
                <div style={{ position: "absolute", backdropFilter: "blur(5.45px)", backgroundColor: "rgba(29,29,29,0.4)", height: "34px", left: 0, top: "37px", width: "652px" }} />
                <div style={{ position: "absolute", backdropFilter: "blur(5.45px)", backgroundColor: "rgba(29,29,29,0.4)", height: "34px", left: 0, top: "74px", width: "357px" }} />
                <p style={{ ...reg, position: "absolute", lineHeight: "normal", left: 0, fontStyle: "normal", color: cream, fontSize: "30px", top: "6px", width: "687px", margin: 0 }}>
                  С 2023 года участвовала в организации более 20 развлекательных мероприятий в таких местах как…
                </p>
              </div>
            </div>
          </div>

          {/* ── [3] ФОТО/ВИДЕО ── */}
          <div
            ref={el => { refs.photo.current = el; }}
            style={{ display: "flex", gap: "20px", alignItems: "center", paddingLeft: "80px", paddingBottom: "70px", color: cream, fontSize: "30px", whiteSpace: "nowrap" }}
          >
            <p style={{ ...bold, margin: 0 }}>[3]</p>
            <p style={{ ...reg, margin: 0 }}>ФОТО/ВИДЕО</p>
          </div>

          {/* Photo/video frame */}
          <div style={{ position: "relative", height: "363px", paddingLeft: "80px", paddingBottom: "100px" }}>
            <div style={{ position: "relative", height: "363px", width: "1280px" }}>
              {/* CUSTOM_CODE_BLOCK_02: interactive card stack */}
              <div data-name="CUSTOM_CODE_BLOCK_02" style={{ position: "absolute", height: "363px", left: 0, top: 0, width: "665px", overflow: "visible" }}>
                <CardStackEmbed />
              </div>
              {/* reels_slot */}
              <div data-name="reels_slot" style={{ position: "absolute", display: "flex", gap: "25px", alignItems: "center", left: "729px", top: "48px" }}>
                {["reels_1.mp4", "reels_2.mp4", "reels_3.mp4"].map((file, i) => (
                  <div key={file} style={{ height: "266px", position: "relative", flexShrink: 0, width: "167px", overflow: "hidden" }}>
                    <video
                      aria-label={`Reel ${i + 1}`}
                      src={`${BASE}custom/reels/${file}`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{ ...coverImg, objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", left: "972px", top: "306px" }}>
                <div style={{ position: "absolute", backdropFilter: "blur(5px)", backgroundColor: "rgba(29,29,29,0.5)", height: "21px", left: 0, top: "4px", width: "79px" }} />
                <p style={{ ...reg, position: "absolute", lineHeight: "normal", left: 0, fontStyle: "normal", color: cream, fontSize: "26.299px", top: 0, whiteSpace: "nowrap", margin: 0 }}>РИЛСЫ</p>
              </div>
            </div>
          </div>

          {/* ── [4] КРЕАТИВ ── */}
          <div
            ref={el => { refs.kreativ.current = el; }}
            style={{ display: "flex", gap: "20px", alignItems: "center", paddingLeft: "73px", paddingBottom: "30px", color: cream, fontSize: "30px", whiteSpace: "nowrap" }}
          >
            <p style={{ ...bold, margin: 0 }}>[4]</p>
            <p style={{ ...reg, margin: 0 }}>КРЕАТИВ</p>
          </div>

          {/* Kreativ sub-sections with side vector */}
          <div style={{ position: "relative", paddingLeft: "120px", paddingBottom: "110px" }}>
            <SubHeader num="[4.1]" label="ИССЛЕДОВАНИЯ"  open={isOpen("create_research")}     onClick={() => toggle("create_research")} />
            <Collapsible open={isOpen("create_research")}><CreateResearchContent /></Collapsible>

            <SubHeader num="[4.2]" label="СЕРТИФИКАТЫ"   open={isOpen("create_certificate")} onClick={() => toggle("create_certificate")} />
            <Collapsible open={isOpen("create_certificate")}><CreateCertificateContent /></Collapsible>

            <SubHeader num="[4.3]" label="SIDE QUEST"     open={isOpen("create_side")}        onClick={() => toggle("create_side")} />
            <Collapsible open={isOpen("create_side")}><CreateSideContent /></Collapsible>
          </div>

          {/* ── "Если вы ищете" section ── */}
          <div style={{ position: "relative", paddingLeft: "520px", paddingBottom: "100px" }}>
            <p style={{ ...reg, color: cream, fontSize: "26.299px", lineHeight: "normal", paddingLeft: "30px", whiteSpace: "nowrap", margin: "0 0 80px 0" }}>
              ПОЭТОМУ ЕСЛИ ВЫ ИЩЕТЕ...
            </p>
            {/* Looking For image */}
            <div style={{ position: "relative", top: "-7px", display: "flex", alignItems: "center", justifyContent: "center", height: "542.838px", width: "440.485px" }}>
              <div style={{ flexShrink: 0, transform: "rotate(-3.07deg)", position: "relative", zIndex: 1 }}>
                <div style={{ backgroundColor: cream, height: "521.434px", width: "413.117px" }} />
              </div>
              <div style={{ position: "absolute", top: "1.22px", left: 0, display: "flex", height: "541.622px", alignItems: "center", justifyContent: "center", width: "417.847px", zIndex: 2 }}>
                <div style={{ flexShrink: 0, transform: "rotate(-3.07deg)" }}>
                  <div style={{ height: "521.434px", position: "relative", width: "390.446px" }}>
                    <img alt="" style={coverImg} src={imgChatGpt} />
                  </div>
                </div>
              </div>
            </div>
            <p style={{ ...reg, color: cream, fontSize: "26.299px", lineHeight: "normal", whiteSpace: "nowrap", margin: "40px 0 0 98px" }}>
              СВЯЖИТЕСЬ СО МНОЙ!
            </p>
          </div>

          {/* ── КОНТАКТЫ ── */}
          <div ref={el => { refs.contacts.current = el; }} style={{ paddingLeft: "80px", paddingBottom: "80px" }}>
            <p style={{ ...reg, color: cream, fontSize: "26.299px", lineHeight: "normal", whiteSpace: "nowrap", margin: "0 0 40px 0" }}>КОНТАКТЫ</p>
            {/* All contact items at same y, positioned by x offset matching Figma (page x − 80px padding) */}
            <div style={{ position: "relative", height: "38px" }}>
              {/* ТГ: label at page x=80, link at x=132 */}
              <div style={{ position: "absolute", backgroundColor: cream, height: "31px", left: "0px", top: "2px", width: "32px" }} />
              <p style={{ ...reg, position: "absolute", left: "0px", top: 0, color: dark, fontSize: "26.299px", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>ТГ</p>
              <a style={{ ...reg, position: "absolute", left: "52px", top: 0, color: cream, fontSize: "26.299px", lineHeight: "normal", textDecoration: "underline", cursor: "pointer", whiteSpace: "nowrap" }} href="https://t.me/aniralahsas" target="_blank" rel="noopener noreferrer">@aniralahsas</a>
              {/* ПОЧТА: label at page x=458 → container x=378, value at x=557 → 477 */}
              <div style={{ position: "absolute", backgroundColor: cream, height: "31px", left: "379px", top: "2px", width: "78px" }} />
              <p style={{ ...reg, position: "absolute", left: "378px", top: 0, color: dark, fontSize: "26.299px", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>ПОЧТА</p>
              <p style={{ ...reg, position: "absolute", left: "477px", top: 0, color: cream, fontSize: "26.299px", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>aniralahsas@mail.ru</p>
              {/* ЗАПРЕЩЕНКА: label at page x=994 → container x=914, link at x=1172 → 1092 */}
              <div style={{ position: "absolute", backgroundColor: cream, height: "31px", left: "915px", top: "2px", width: "157px" }} />
              <p style={{ ...reg, position: "absolute", left: "914px", top: 0, color: dark, fontSize: "26.299px", lineHeight: "normal", whiteSpace: "nowrap", margin: 0 }}>ЗАПРЕЩЕНКА</p>
              <a style={{ ...reg, position: "absolute", left: "1092px", top: 0, color: cream, fontSize: "26.299px", lineHeight: "normal", textDecoration: "underline", cursor: "pointer", whiteSpace: "nowrap" }} href="https://www.instagram.com/aniralahsas/" target="_blank" rel="noopener noreferrer">@aniralahsas</a>
            </div>
          </div>

        </div>{/* end flow content */}
      </div>
    </>
  );
}
