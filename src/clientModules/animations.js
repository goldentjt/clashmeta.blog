/**
 * Client animation module for clashmeta.blog
 * Handles the 10 micro-interactions, lightbox, search, and accessibility.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import tutorials from '../data/tutorials';

function initFeatures() {
  if (!ExecutionEnvironment.canUseDOM) return;
  setupIntersectionObserver();
  setupCategoryFilter();
  setupFAQAccordion();
  setupLightbox();
  setupCopyButtons();
  setupHeaderSearch();
  setupTOCProgress();
  setupNavTicks();
  setupNavbarMiniRuler();
  setupContinuousLoopController();
}

// 1 & 2: Step Number Flip via IntersectionObserver
function setupIntersectionObserver() {
  const stepCards = document.querySelectorAll('.step-card:not(.observed)');
  if (!stepCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-flip');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  stepCards.forEach((card, idx) => {
    card.classList.add('observed');
    card.style.setProperty('--step-idx', (idx % 8).toString());
    observer.observe(card);
  });
}

// 3: Nav Ticks Initialization
function setupNavTicks() {
  const navItems = document.querySelectorAll('.navbar__item:not(.has-ticks)');
  navItems.forEach((item) => {
    if (item.classList.contains('header-search-wrap')) return;
    item.classList.add('has-ticks');
    const tickWrap = document.createElement('div');
    tickWrap.className = 'nav-ticks-wrapper';
    tickWrap.innerHTML = `
      <span class="nav-tick nav-tick-1"></span>
      <span class="nav-tick nav-tick-2"></span>
      <span class="nav-tick nav-tick-3"></span>
    `;
    item.appendChild(tickWrap);
  });
}

// 页眉小型刻度动画 (Header Mini Ruler - 全站页眉通用，正文保持稳定)
function setupNavbarMiniRuler() {
  const brand = document.querySelector('.navbar__brand');
  if (!brand || document.querySelector('.navbar-mini-ruler')) return;

  const ruler = document.createElement('div');
  ruler.className = 'navbar-mini-ruler';
  ruler.setAttribute('aria-hidden', 'true');
  ruler.setAttribute('title', '系统状态与基线刻度轴');
  ruler.innerHTML = `
    <span class="navbar-ruler-tag">SYS</span>
    <span class="navbar-ruler-track">
      <span class="navbar-ruler-ticks"></span>
    </span>
  `;
  brand.insertAdjacentElement('afterend', ruler);
}

// 持续循环动效能效控制器 (视口外或页面后台时自动挂起，进入视口/切回前台自动继续)
let loopObserverInstance = null;

function setupContinuousLoopController() {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return;

  const loopTargets = document.querySelectorAll(
    '.title-stripe-keyword, .hero-geo-squares, .category-scale-strip, .navbar-mini-ruler'
  );
  if (!loopTargets.length) return;

  if (!loopObserverInstance) {
    loopObserverInstance = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('is-anim-paused');
          } else {
            entry.target.classList.add('is-anim-paused');
          }
        });
      },
      { threshold: 0.05 }
    );
  }

  loopTargets.forEach((target) => {
    if (!target.dataset.loopObserved) {
      target.dataset.loopObserved = 'true';
      loopObserverInstance.observe(target);
    }
  });

  // 绑定切入后台/切回前台能耗监控
  if (!window.__visHandlerAdded) {
    window.__visHandlerAdded = true;
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        document.documentElement.classList.add('page-is-hidden');
      } else {
        document.documentElement.classList.remove('page-is-hidden');
      }
    });
  }
}

// 6: Category Filter with FLIP Animation (~240ms)
function setupCategoryFilter() {
  const filterContainer = document.querySelector('.filter-tabs-wrapper');
  const grid = document.querySelector('.tutorials-grid');
  if (!filterContainer || !grid || filterContainer.dataset.initialized) return;
  filterContainer.dataset.initialized = 'true';

  const buttons = filterContainer.querySelectorAll('.cat-tab-btn');
  const cards = Array.from(grid.querySelectorAll('.tutorial-card'));

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedCat = btn.getAttribute('data-cat');

      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // FLIP Animation: First
      const firstPositions = new Map();
      cards.forEach((card) => {
        if (card.style.display !== 'none') {
          firstPositions.set(card, card.getBoundingClientRect());
        }
      });

      // Mutate DOM state
      cards.forEach((card) => {
        const cardCat = card.getAttribute('data-cat');
        const isMatch = selectedCat === 'all' || cardCat === selectedCat;
        card.style.display = isMatch ? 'flex' : 'none';
      });

      // FLIP Animation: Last & Invert & Play
      cards.forEach((card) => {
        if (card.style.display !== 'none') {
          const last = card.getBoundingClientRect();
          const first = firstPositions.get(card);

          if (first) {
            const deltaX = first.left - last.left;
            const deltaY = first.top - last.top;

            if (deltaX !== 0 || deltaY !== 0) {
              card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
              card.style.transition = 'none';

              requestAnimationFrame(() => {
                card.style.transition = 'transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1)';
                card.style.transform = 'translate(0, 0)';
              });
            }
          }
        }
      });
    });
  });
}

// 8: FAQ Accordion with Morphing Toggle (Defaults expanded)
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item:not(.initialized)');
  faqItems.forEach((item) => {
    item.classList.add('initialized');
    // Ensure expanded by default as requested: "所有的FAQ全部要展开"
    item.classList.add('is-open');

    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        item.classList.toggle('is-open');
      });
    }
  });
}

// 9: Lightbox Zoom Modal
function setupLightbox() {
  let overlay = document.getElementById('site-lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'site-lightbox-overlay';
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = `
      <div class="lightbox-image-wrap">
        <button class="lightbox-close-btn" aria-label="关闭预览">&times;</button>
        <img class="lightbox-img" src="" alt="放大图片预览" />
      </div>
    `;
    document.body.appendChild(overlay);

    const close = () => {
      overlay.classList.remove('is-active');
      if (overlay._triggerEl) overlay._triggerEl.focus();
    };

    overlay.querySelector('.lightbox-close-btn').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
        close();
      }
    });
  }

  const zoomableImgs = document.querySelectorAll('img.img-zoomable, .markdown img:not(.no-zoom)');
  zoomableImgs.forEach((img) => {
    if (img.dataset.zoomReady) return;
    img.dataset.zoomReady = 'true';
    img.classList.add('img-zoomable');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', '点击放大图片');

    const openLightbox = () => {
      const modalImg = overlay.querySelector('.lightbox-img');
      modalImg.src = img.src;
      modalImg.alt = img.alt || '放大预览';
      overlay.classList.add('is-active');
      overlay._triggerEl = img;
      overlay.querySelector('.lightbox-close-btn').focus();
    };

    img.addEventListener('click', openLightbox);
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox();
      }
    });
  });
}

// 10: Copy Button State Inversion
function setupCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn:not(.copy-ready)');
  copyBtns.forEach((btn) => {
    btn.classList.add('copy-ready');
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy') || btn.innerText;
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btn.innerHTML;
        btn.classList.add('is-copied');
        btn.innerHTML = '<span>✓ 已复制</span>';

        setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.innerHTML = originalHTML;
        }, 1500);
      });
    });
  });
}

// 7: Segmented TOC Progress Indicator
function setupTOCProgress() {
  const tocLinks = document.querySelectorAll('.table-of-contents__link');
  if (!tocLinks.length) return;

  const headings = Array.from(document.querySelectorAll('h2[id], h3[id]'));
  if (!headings.length) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY + 120;
      let activeIdx = 0;

      headings.forEach((h, idx) => {
        if (h.offsetTop <= scrollY) {
          activeIdx = idx;
        }
      });

      tocLinks.forEach((link, idx) => {
        if (idx <= activeIdx) {
          link.classList.add('is-read');
        } else {
          link.classList.remove('is-read');
        }
      });
    },
    { passive: true }
  );
}

// Header Search Autocomplete
function setupHeaderSearch() {
  const input = document.getElementById('site-header-search');
  const dropdown = document.getElementById('header-search-results');
  if (!input || !dropdown || input.dataset.ready) return;
  input.dataset.ready = 'true';

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.remove('is-open');
      dropdown.innerHTML = '';
      return;
    }

    const matches = tutorials.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    );

    if (!matches.length) {
      dropdown.innerHTML = '<div style="padding:12px; font-size:13px; color:#777;">未搜索到相关实验教程</div>';
    } else {
      dropdown.innerHTML = matches
        .slice(0, 7)
        .map(
          (m) => `
        <a class="search-item" href="${m.slug}">
          <div class="search-item-title">${m.title}</div>
          <span class="search-item-cat">${m.category}</span>
        </a>
      `
        )
        .join('');
    }
    dropdown.classList.add('is-open');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('is-open');
    }
  });
}

// Hook into Docusaurus router lifecycle
if (ExecutionEnvironment.canUseDOM) {
  window.addEventListener('load', initFeatures);
  document.addEventListener('DOMContentLoaded', initFeatures);
}

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM) {
    setTimeout(initFeatures, 120);
  }
}
