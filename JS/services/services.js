import { formations, testimonials, shareData } from './data.js';

let currentAudio = null;

export function renderFormations() {
  const container = document.getElementById('coursesGridContainer');
  if (!container) return;

  container.innerHTML = formations.map(course => `
    <div class="col-lg-4">
      <div class="course-card ${course.ai_gradient ? 'ai-card' : ''}">
        ${course.promo ? `<div class="promo-badge">${course.promo}</div>` : ''}
        <span class="spots-counter ${course.criticalSpots ? 'critical' : ''}">
          <i class="fas ${course.criticalSpots ? 'fa-fire' : 'fa-user-friends'}"></i> ${course.spots}
        </span>
        <i class="${course.icon} course-icon"></i>
        <div class="course-title">${course.title}</div>
        <p class="course-objective">${course.objective}</p>
        
        <ul class="curriculum-list">
          <li><i class="fas fa-clock"></i> <strong>${course.sessions}</strong></li>
          ${course.curriculum.map(item => `
            <li class="${item.sub ? 'sub-item' : ''}">
              ${item.icon ? `<i class="${item.icon}"></i>` : ''}
              ${item.label}
            </li>
          `).join('')}
        </ul>

        ${course.addons ? `
          <div class="checkout-options">
            <div class="share-label" style="margin-bottom:15px; color:#43ba7f;">Premium Add-ons</div>
            ${course.addons.map(addon => `
              <label class="checkout-item">
                <input type="checkbox" class="feature-cb-m" data-price="${addon.price}" data-base="${course.newPrice}" data-id="${course.id_name}">
                <span>${addon.label}</span>
              </label>
            `).join('')}
          </div>
        ` : ''}

        <div class="price-wrapper">
           <span class="old-price">${course.oldPrice} DH</span>
           <span class="new-price" id="price-${course.id_name}">${course.newPrice} DH</span>
        </div>

        <a href="${course.whatsapp_link}" target="_blank" class="register-btn">
          <i class="fab fa-whatsapp"></i> ${course.id === 4 ? 'Book an Interview' : 'Register Now'}
        </a>

        ${course.id === 1 ? `
          <a href="#reviews" class="check-feedback-btn">
            <i class="fas fa-comments"></i> Check for Feedbacks
          </a>
        ` : ''}

        <div class="share-action">
          <span class="share-title">Full Details Share</span>
          <div class="share-options">
            <div class="icon-btn" title="Share WhatsApp" onclick="socialShare('${course.id_name}')"><i class="fab fa-whatsapp"></i></div>
            <div class="icon-btn lang-select" onclick="copyFormation('English', ${course.share_id})">EN</div>
            <div class="icon-btn lang-select" onclick="copyFormation('French', ${course.share_id})">FR</div>
            <div class="icon-btn lang-select" onclick="copyFormation('Darija', ${course.share_id})">🇲🇦</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Attach change listeners for price updates
  document.querySelectorAll('.feature-cb-m').forEach(cb => {
    cb.addEventListener('change', () => {
      const id = cb.getAttribute('data-id');
      const base = parseInt(cb.getAttribute('data-base'));
      let extra = 0;
      document.querySelectorAll(`.feature-cb-m[data-id="${id}"]`).forEach(box => {
        if (box.checked) extra += parseInt(box.getAttribute('data-price'));
      });
      document.getElementById(`price-${id}`).innerText = (base + extra) + ' DH';
    });
  });
}

export function renderTestimonials(filter = "All") {
  const headerContainer = document.querySelector('.rating-container');
  const list = document.getElementById('testimonialsList');
  if (!list || !headerContainer) return;
  
  // Update Dynamic Header
  const totalReviews = testimonials.length;
  headerContainer.innerHTML = `
    <h2 style="color: #fff; font-size: 45px; font-weight: 900; margin-bottom: 15px;">Customers Feedback</h2>
    <div style="color: #ffd700; font-size: 28px; margin-bottom: 20px;">
      <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      <span style="color: #fff; font-size: 20px; margin-left:10px; font-weight: 800;">4.9 / 5</span>
    </div>
    <p style="color: #888; font-size: 18px;">
      ${totalReviews > 0 
        ? `${totalReviews} Verified reviews from our growing community of engineers.` 
        : 'Getting ready: Verified reviews from our community will appear here soon.'}
    </p>
  `;

  list.innerHTML = "";
  const filtered = filter === "All" ? testimonials : testimonials.filter(t => t.category === filter);
  
  if (filtered.length === 0 && totalReviews > 0) {
    list.innerHTML = '<div class="col-12 text-center p-5" style="color:#888;">No reviews found in this category.</div>';
    return;
  }

  filtered.forEach(t => {
    list.innerHTML += `
      <div class="testimonial-card">
        <div class="test-head">
          <span class="tag">${t.category}</span>
          ${t.audio ? `<button onclick="toggleAudio('${t.audio}', this)" class="audio-badge"><i class="fas fa-microphone"></i> Audio Feedback</button>` : ''}
        </div>
        <div class="test-content">${t.content}</div>
        <div class="test-user">
          <div class="u-img-icon-container">
            <i class="fas fa-user-circle"></i>
          </div>
          <div class="u-info">
            <h5>${t.name}</h5>
            <p>${t.role}</p>
            <div class="u-socials">
              <a href="${t.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="${t.whatsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

window.toggleAudio = function(url, btn) {
  if (currentAudio && !currentAudio.paused && currentAudio.src.includes(url)) {
    currentAudio.pause();
    btn.innerHTML = '<i class="fas fa-play-circle"></i> Play Audio';
    btn.classList.remove('playing');
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    document.querySelectorAll('.audio-badge').forEach(b => {
      b.innerHTML = '<i class="fas fa-microphone"></i> Audio Feedback';
      b.classList.remove('playing');
    });
  }

  currentAudio = new Audio(url);
  currentAudio.play();
  btn.innerHTML = '<i class="fas fa-pause-circle"></i> Playing...';
  btn.classList.add('playing');

  currentAudio.onended = () => {
    btn.innerHTML = '<i class="fas fa-microphone"></i> Audio Feedback';
    btn.classList.remove('playing');
  };
};

window.copyFormation = function(lang, id) {
  const c = shareData[id];
  let msg = "";
  const site = "majjid.com/services.html";
  const contact = "\n\n📞 *Contact Ayoub Majjid:* 0771798765\n🔗 *Portfolio:* majjid.com";

  if (lang === 'English') {
    msg = `Hello, I hope you’re doing well! 👋\n\nI’ve recently launched some professional training courses. ✨\n\n${c.en}\n\n🚀 *See all courses:* ${site}${contact}`;
  } else if (lang === 'French') {
    msg = `Bonjour ! J'espère que vous allez bien 👋\n\nJe viens de lancer des formations professionnelles pour booster votre carrière. ✨\n\n${c.fr}\n\n🚀 *Détails complets:* ${site}${contact}`;
  } else {
    msg = `السلام عليكم ! كنتمنى تكون بيخير 👋\n\nلقد أطلقت مؤخراً تكوينات تطبيقية باش تطور لـ carrière ديالك. ✨\n\n${c.ma}\n\n🚀 *الموقع:* ${site}${contact}`;
  }

  navigator.clipboard.writeText(msg).then(() => {
    alert(`Detailed ${lang} message copied to clipboard! Ready to share.`);
  });
};

window.socialShare = function(id) {
  const url = "https://majjid.com/services.html";
  if (navigator.share) {
    navigator.share({
      title: 'Professional Training by Ayoub Majjid',
      text: 'Master Factory-Grade Software Engineering standards. Limited promo slots left!',
      url: url
    });
  } else {
    window.open('https://wa.me/?text=' + encodeURIComponent('Elevate your engineering standards! Check this out: ' + url));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderFormations();
  renderTestimonials();

  const filterContainer = document.getElementById('filterContainer');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderTestimonials(e.target.dataset.cat);
      }
    });
  }
});
