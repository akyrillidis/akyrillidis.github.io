---
layout: page
fb_comments: 3
title: OptimaLab
---

<style>
/* ── Tree Timeline ── */
.tree-root {
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
}
.tree-root .root-name {
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
}
.tree-root .root-title {
  font-size: 0.9em;
  color: #777;
  margin-top: 4px;
}

.tree-trunk {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0 40px 0;
}
/* Central vertical line */
.tree-trunk::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #1367a7, #208799, #2ecc71);
  margin-left: -1.5px;
}

/* Year markers */
.year-marker {
  position: relative;
  text-align: center;
  margin: 30px 0 10px 0;
  z-index: 2;
  clear: both;
}
.year-marker span {
  display: inline-block;
  background: #1367a7;
  color: #fff;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.year-marker.present span {
  background: #2ecc71;
  animation: pulse-green 2s infinite;
}
@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(46,204,113,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(46,204,113,0); }
}

/* Branch nodes — use float to place left/right of center */
.branch {
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  min-height: 10px;
}

.branch .card {
  width: 42%;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 16px;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
  box-sizing: border-box;
}
.branch .card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}

/* Left card: floats to the left half */
.branch.left .card {
  float: left;
  margin-left: 4%;
  text-align: right;
}

/* Right card: floats to the right half */
.branch.right .card {
  float: right;
  margin-right: 4%;
  text-align: left;
}

/* Connector: horizontal line from card edge to center trunk */
/* Left card — line goes from right edge of card to center */
.branch.left .card::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 100%;
  width: calc(50vw - 50% - 100%);
  height: 0;
  border: none;
}
/* Right card — line from left edge to center */
.branch.right .card::after {
  content: '';
  position: absolute;
  top: 18px;
  right: 100%;
  height: 0;
  border: none;
}

/* Use a pseudo-element on .branch itself for the connector line + dot */
/* This way the line always starts exactly at the center trunk */

/* Dot on the trunk */
.branch::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 18px;
  width: 12px;
  height: 12px;
  background: #1367a7;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #1367a7;
  margin-left: -6px;
  z-index: 3;
}

/* Horizontal connector line from trunk to card */
.branch::after {
  content: '';
  position: absolute;
  top: 23px;
  height: 2px;
  background: #bbb;
  z-index: 1;
}
.branch.left::after {
  left: calc(4% + 42%);  /* right edge of left card */
  right: 50%;
}
.branch.right::after {
  left: 50%;
  right: calc(4% + 42%);  /* left edge of right card */
}

/* Card content */
.card .student-name {
  font-weight: 600;
  font-size: 1.0em;
  margin-bottom: 3px;
}
.card .student-name a {
  color: #1367a7;
  text-decoration: none;
}
.card .student-name a:hover {
  color: #208799;
}
.card .student-degree {
  font-size: 0.8em;
  color: #888;
  margin-bottom: 4px;
}
.card .student-topic {
  font-size: 0.82em;
  color: #555;
  line-height: 1.35;
}
.card .student-position {
  font-size: 0.8em;
  color: #1367a7;
  font-weight: 500;
  margin-top: 5px;
}
.card .student-coadv {
  font-size: 0.75em;
  color: #999;
  font-style: italic;
}

/* Current students section */
.current-section {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0 20px 0;
}
.current-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  padding: 10px 20px;
}
.current-card {
  background: #f0faf4;
  border: 1px solid #b8e6cc;
  border-radius: 8px;
  padding: 12px 14px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.current-card:hover {
  box-shadow: 0 4px 12px rgba(46,204,113,0.15);
  transform: translateY(-1px);
}
.current-card .student-name {
  font-weight: 600;
  font-size: 0.95em;
  margin-bottom: 2px;
}
.current-card .student-name a {
  color: #1367a7;
  text-decoration: none;
}
.current-card .student-name a:hover {
  color: #208799;
}
.current-card .student-since {
  font-size: 0.78em;
  color: #2ecc71;
  font-weight: 600;
  margin-bottom: 3px;
}
.current-card .student-topic {
  font-size: 0.8em;
  color: #555;
  line-height: 1.3;
}

/* Legend */
.tree-legend {
  text-align: center;
  margin: 15px 0 25px 0;
  font-size: 0.8em;
  color: #999;
}
.tree-legend .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}
.tree-legend .dot.alumni { background: #1367a7; }
.tree-legend .dot.current { background: #2ecc71; }
.tree-legend .sep { margin: 0 15px; }

/* Section headers for active members */
.section-header {
  max-width: 800px;
  margin: 30px auto 10px auto;
  padding: 0 20px;
  font-size: 1.05em;
  font-weight: 600;
  color: #555;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 6px;
}
.section-header .badge {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 8px;
  vertical-align: middle;
}
.section-header .badge.postdoc { background: #e8d5f5; color: #7b2d8e; }
.section-header .badge.msc { background: #d5e8f5; color: #2d5f8e; }
.section-header .badge.undergrad { background: #f5e8d5; color: #8e6a2d; }

/* PostDoc card */
.current-card.postdoc {
  background: #f5f0fa;
  border-color: #d4b8e8;
}
/* MSc card */
.current-card.msc {
  background: #f0f4fa;
  border-color: #b8cce8;
}
/* Undergrad card */
.current-card.undergrad {
  background: #faf5f0;
  border-color: #e8d4b8;
}

/* Responsive */
@media (max-width: 700px) {
  .tree-trunk::before {
    left: 20px;
    margin-left: 0;
  }
  .year-marker {
    text-align: left;
    padding-left: 40px;
  }
  .branch::before {
    left: 20px;
    margin-left: -6px;
  }
  .branch::after {
    left: 20px !important;
    right: auto !important;
    width: 20px !important;
  }
  .branch.left .card,
  .branch.right .card {
    float: none;
    width: auto;
    margin-left: 50px !important;
    margin-right: 10px !important;
    text-align: left !important;
  }
  .current-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Root -->
<div class="tree-root">
  <div class="root-name">Anastasios Kyrillidis</div>
  <div class="root-title">OptimaLab &middot; Rice University &middot; Est. 2018</div>
</div>

<div class="tree-legend">
  <span class="dot current"></span> Active
  <span class="sep">|</span>
  <span class="dot alumni"></span> Alumni
</div>

<!-- ═══════════════ ACTIVE MEMBERS ═══════════════ -->

<!-- PostDoc -->
<div class="section-header">Postdoctoral Researcher <span class="badge postdoc">PostDoc</span></div>
<div class="current-section">
  <div class="current-grid">

    <div class="current-card postdoc">
      <div class="student-name">Jianqiang Li</div>
      <div class="student-since">PostDoc</div>
      <div class="student-topic">Quantum computing and algorithms.</div>
      <div style="font-size:0.75em; color:#999; font-style:italic;">Co-advised with Tirthak Patel and Nai-Hui Chia</div>
    </div>

  </div>
</div>

<!-- PhD Students -->
<div class="section-header">PhD Students <span class="badge" style="background:#d5f5e3; color:#1a7a3a;">PhD</span></div>
<div class="current-section">
  <div class="current-grid">

    <div class="current-card">
      <div class="student-name"><a href="https://jasperliao.github.io/">Jasper Liao</a></div>
      <div class="student-since">PhD &middot; Since 2021</div>
      <div class="student-topic">Provable optimization methods in nonconvex objectives (neural networks).</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://riastevens.github.io/">Ria Stevens</a></div>
      <div class="student-since">PhD &middot; Since 2022</div>
      <div class="student-topic">Adversarial training, theory of non-convex smooth games, Byzantine attacks.</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://raijeku.github.io/">David Quiroga</a></div>
      <div class="student-since">PhD &middot; Since 2022</div>
      <div class="student-topic">Quantum process tomography, distributed estimation of excited quantum states, variational methods.</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://evandramko.github.io/">Evan Dramko</a></div>
      <div class="student-since">PhD &middot; Since 2023</div>
      <div class="student-topic">AI in material science.</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://www.linkedin.com/in/afroditi-kolomvaki/">Afroditi Kolomvaki</a></div>
      <div class="student-since">PhD &middot; Since 2023</div>
      <div class="student-topic">Theoretical understanding of mixture of experts.</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://www.linkedin.com/in/mahtab-alizadeh-vanchali/">Mahtab Alizadeh Vanchali</a></div>
      <div class="student-since">PhD &middot; Since 2024</div>
      <div class="student-topic">Sequential learning, parameter efficient fine-tuning methods.</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://yehya-farhat.github.io/">Yehya Farhat</a></div>
      <div class="student-since">PhD &middot; Since 2024</div>
      <div class="student-topic">Agentic AI, mixture of experts, AI orchestration.</div>
    </div>

    <div class="current-card">
      <div class="student-name"><a href="https://www.linkedin.com/in/thanasis-hadjidimoulas/">Thanasis Hadjidimoulas</a></div>
      <div class="student-since">PhD &middot; Since 2024</div>
      <div class="student-topic">Quantum algorithms and optimization, theoretical computer science.</div>
    </div>

  </div>
</div>

<!-- MSc Students -->
<div class="section-header">MSc Students <span class="badge msc">MSc</span></div>
<div class="current-section">
  <div class="current-grid">

    <div class="current-card msc">
      <div class="student-name">Hamza Shili</div>
      <div class="student-since">MSc</div>
      <div class="student-topic">Mixture of Experts systems.</div>
    </div>

    <div class="current-card msc">
      <div class="student-name">Michael Menezes</div>
      <div class="student-since">MSc (previously undergraduate)</div>
      <div class="student-topic">Pruning methods in AI, transfer learning, distributed optimization and learning.</div>
    </div>

  </div>
</div>

<!-- Undergraduate Students -->
<div class="section-header">Undergraduate Students <span class="badge undergrad">Undergrad</span></div>
<div class="current-section">
  <div class="current-grid">

    <div class="current-card undergrad">
      <div class="student-name">Barbara Su</div>
      <div class="student-since">Undergraduate</div>
      <div class="student-topic">Pruning methods in AI, distributed methods in learning, recursive neural network architectures for AI reasoning.</div>
    </div>

    <div class="current-card undergrad">
      <div class="student-name">Xinze Fang</div>
      <div class="student-since">Undergraduate</div>
      <div class="student-topic">Pruning methods in AI, distributed methods in learning.</div>
    </div>

    <div class="current-card undergrad">
      <div class="student-name">Jack Shen</div>
      <div class="student-since">Undergraduate</div>
      <div class="student-topic">Recursive neural network architectures for AI reasoning.</div>
    </div>

    <div class="current-card undergrad">
      <div class="student-name">Aayan Ilyas</div>
      <div class="student-since">Undergraduate</div>
      <div class="student-topic">Classical algorithms benchmarking against quantum algorithms for MIS instances.</div>
    </div>

    <div class="current-card undergrad">
      <div class="student-name">Oneal Wang</div>
      <div class="student-since">Undergraduate</div>
      <div class="student-topic">Classical algorithms benchmarking against quantum algorithms for MIS instances.</div>
    </div>

  </div>
</div>

<!-- ═══════════════ ALUMNI TIMELINE ═══════════════ -->

<!-- Alumni timeline trunk (reversed: most recent first) -->
<div class="tree-trunk">

  <!-- 2025 -->
  <div class="year-marker"><span>2025</span></div>

  <div class="branch left">
    <div class="card">
      <div class="student-name"><a href="https://scholar.google.com/citations?hl=en&user=p1A-oPoAAAAJ">Tom Pan</a></div>
      <div class="student-degree">PhD &middot; 2021 &ndash; 2025</div>
      <div class="student-topic">ML-based approach to protein structure determination and partial template completion.</div>
      <div class="student-coadv">Co-advised with George Phillips (Biosciences)</div>
    </div>
  </div>

  <div class="branch right">
    <div class="card">
      <div class="student-name"><a href="https://www.cs.rice.edu/~zz59/">Zhiwei Zhang</a></div>
      <div class="student-degree">PhD &middot; 2019 &ndash; 2025</div>
      <div class="student-topic">From discrete to continuous methods for SAT.</div>
      <div class="student-coadv">Co-advised with Moshe Vardi</div>
      <div class="student-position">First position: JP Morgan &middot; Now: Applied Scientist, Amazon</div>
    </div>
  </div>

  <!-- 2024 -->
  <div class="year-marker"><span>2024</span></div>

  <div class="branch left">
    <div class="card">
      <div class="student-name"><a href="https://jlylekim.github.io/">Lyle Kim</a></div>
      <div class="student-degree">PhD &middot; 2019 &ndash; 2024</div>
      <div class="student-topic">Quantum state tomography, game-theoretic optimization, acceleration, optimization in quantum computing.</div>
      <div class="student-position">First position: Quantum Computing Research Scientist, JPMorganChase</div>
    </div>
  </div>

  <div class="branch right">
    <div class="card">
      <div class="student-name"><a href="https://carlosquinterop.github.io/">Carlos Quintero</a></div>
      <div class="student-degree">PhD &middot; 2019 &ndash; 2024</div>
      <div class="student-topic">Robustness in optimization for robotics.</div>
      <div class="student-coadv">Co-advised with Lydia Kavraki</div>
      <div class="student-position">First position: Research Scientist, Bookout Center (Houston)</div>
    </div>
  </div>

  <!-- 2023 -->
  <div class="year-marker"><span>2023</span></div>

  <div class="branch left">
    <div class="card">
      <div class="student-name"><a href="https://github.com/dunchen">Chen Dun</a></div>
      <div class="student-degree">PhD &middot; 2019 &ndash; 2023</div>
      <div class="student-topic">Distributed learning of neural networks, federated learning, mixture of experts.</div>
      <div class="student-position">First position: Bytedance</div>
    </div>
  </div>

  <div class="branch right">
    <div class="card">
      <div class="student-name"><a href="https://johnchenresearch.github.io/">John Chen</a></div>
      <div class="student-degree">PhD &middot; 2020 &ndash; 2023</div>
      <div class="student-topic">Contrastive learning in deep learning.</div>
      <div class="student-position">First position: Meta</div>
    </div>
  </div>

  <div class="branch left">
    <div class="card">
      <div class="student-name"><a href="https://cameronrwolfe.me/">Cameron Wolfe</a></div>
      <div class="student-degree">PhD &middot; 2020 &ndash; 2023</div>
      <div class="student-topic">Theories and perspectives on practical deep learning.</div>
      <div class="student-position">First position: Director of AI, ReBuy &middot; Now: Netflix</div>
    </div>
  </div>

  <!-- 2021 -->
  <div class="year-marker"><span>2021</span></div>

  <div class="branch right">
    <div class="card">
      <div class="student-name"><a href="http://wangqihan.com/">Qihan "Chuck" Wang</a></div>
      <div class="student-degree">MSc &middot; 2019 &ndash; 2021</div>
      <div class="student-topic">Efficient distributed techniques on lottery ticket hypothesis for neural networks.</div>
      <div class="student-position">First position: Microsoft</div>
    </div>
  </div>

</div>
