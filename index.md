---
layout: default
title: 確率過程の統計推測の最近の展開 2026
permalink: /
image: /assets/img/hero.jpg
---
{% assign event = site.data.event %}
<section id="home" class="hero parallax text-light" style="--hero-img: url('{{ '/assets/img/hero.jpg' | relative_url }}'); --speed: .15;" aria-labelledby="event-title">
  <div class="container py-5">
    <div class="row gx-4 gy-5 align-items-center">
      <div class="col-lg-7">
        <span class="badge bg-glass mb-3">{{ event.date_label }} ｜ {{ event.campus }}</span>
        <h1 id="event-title" class="display-4 fw-bold"><span class="d-block">確率過程の統計推測の</span><span class="d-block">最近の展開</span><span class="hero-year">2026</span></h1>
        <p class="lead mt-3">確率過程の統計推測をめぐる研究集会</p>
        <p class="hero-meta mb-0">{{ event.time }} ｜ 会場：{{ event.venue }}<br>{{ event.room }}</p>
        <div class="d-flex gap-2 mt-4 flex-wrap">
          <a href="#programme" class="btn btn-light btn-lg">プログラムを見る</a>
          <a href="#venue" class="btn btn-outline-light btn-lg">会場案内</a>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="hero-card shadow-lg p-4 rounded-4 bg-glass">
          <h2 class="h5 mb-3"><i class="bi bi-calendar-week me-2" aria-hidden="true"></i>開催情報</h2>
          <dl class="event-details mb-0">
            <dt>日時</dt><dd><time datetime="{{ event.date }}">{{ event.date_label }}</time><br>{{ event.time }}</dd>
            <dt>会場</dt><dd>{{ event.venue }}（{{ event.campus }}）<br><span class="small">{{ event.room }}</span></dd>
            <dt>講演</dt><dd>8講演</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="section-pad" aria-labelledby="about-title">
  <div class="container">
    <div class="row g-4 align-items-center">
      <div class="col-lg-7">
        <h2 id="about-title" class="h3 mb-3">開催概要</h2>
        <p class="mb-0">「確率過程の統計推測の最近の展開」を，{{ event.date_label }}に{{ event.venue }} {{ event.room }}（{{ event.campus }}）で開催します．確率過程の統計推測に関する研究を共有し，議論する研究集会です．</p>
        <p class="small text-secondary mt-3 mb-0">本研究集会は JST CREST（課題番号：JPMJCR2115，研究代表者：吉田朋広）の支援を受けています．</p>
      </div>
      <div class="col-lg-5">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h3 class="h6 mb-3">お知らせ</h3>
            <ul class="small mb-0 notice-list">
              <li>会場は{{ event.venue }} {{ event.room }}（{{ event.campus }}）に決定しました．</li>
              <li>演題・講演要旨は後日掲載します．</li>
              <li>参加方法は後日ご案内します．</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="programme" class="section-pad bg-body-secondary" aria-labelledby="programme-title">
  <div class="container">
    <div class="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-3">
      <h2 id="programme-title" class="h3 mb-0">プログラム</h2>
      <a class="btn btn-outline-primary btn-sm" href="#abstracts">講演要旨へ</a>
    </div>
    <p class="text-secondary mb-4">{{ event.date_label }} ｜ {{ event.time }}<span class="small d-block mt-1">講演者は敬称略．時刻はすべて日本時間です．</span></p>
    <div class="row g-4">
      {% for session in site.data.programme %}
      <div class="col-lg-6">
        <div class="card h-100 shadow-sm programme-card">
          <div class="card-body p-3 p-sm-4">
            <h3 class="h5 mb-1">{{ session.title }}</h3>
            <p class="small text-secondary mb-3">{{ session.time }}</p>
            <ol class="schedule mb-0">
              {% for slot in session.slots %}
              <li class="schedule-row{% if slot.break %} schedule-break{% endif %}{% if slot.commemorative %} schedule-commemorative{% endif %}">
                <span class="schedule-time"><time datetime="{{ event.date }}T{{ slot.start }}:00+09:00">{{ slot.start }}</time>–<time datetime="{{ event.date }}T{{ slot.end }}:00+09:00">{{ slot.end }}</time></span>
                <div class="schedule-description">
                  {% if slot.speaker %}
                  {% assign speaker = site.data.speakers[slot.speaker] %}
                  <a href="#abs-{{ slot.speaker }}" class="fw-semibold">{{ speaker.name }}</a>
                  {% if slot.commemorative %}<span class="commemorative-badge">記念講演</span>{% endif %}
                  <span class="small text-secondary w-100">{{ speaker.affiliation | escape }}</span>
                  {% else %}{{ slot.label }}{% endif %}
                </div>
              </li>
              {% endfor %}
            </ol>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section id="abstracts" class="section-pad" aria-labelledby="abstracts-title">
  <div class="container">
    <h2 id="abstracts-title" class="h3 mb-3">講演要旨</h2>
    <p class="text-secondary mb-4">演題・講演要旨は，決まり次第こちらに掲載します．</p>
    <div class="abstracts row g-4">
      {% for session in site.data.programme %}
      {% for slot in session.slots %}
      {% if slot.speaker %}
      {% assign speaker = site.data.speakers[slot.speaker] %}
      <div class="col-md-6">
        <article class="abstract-entry h-100" id="abs-{{ slot.speaker }}">
          <p class="small text-secondary mb-2">{{ slot.start }}–{{ slot.end }}</p>
          <h3 class="h6 mb-2">{{ speaker.name }}<span class="small fw-normal text-secondary">（{{ speaker.affiliation | escape }}）</span></h3>
          {% if speaker.title != '' %}<p class="fw-semibold mb-2">{{ speaker.title | escape }}</p>{% endif %}
          {% if speaker.abstract != '' %}
          <div class="abstract-body">{{ speaker.abstract | markdownify }}</div>
          {% else %}
          <p class="abstract-body mb-0">演題・要旨は後日掲載します．</p>
          {% endif %}
        </article>
      </div>
      {% endif %}
      {% endfor %}
      {% endfor %}
    </div>
  </div>
</section>

<section id="speakers" class="section-pad bg-body-secondary" aria-labelledby="speakers-title">
  <div class="container">
    <h2 id="speakers-title" class="h3 mb-3">講演者</h2>
    <p class="small text-secondary mb-4">講演順・敬称略</p>
    <ul class="row g-3 list-unstyled mb-0">
      {% for session in site.data.programme %}
      {% for slot in session.slots %}
      {% if slot.speaker %}
      {% assign speaker = site.data.speakers[slot.speaker] %}
      <li class="col-sm-6 col-lg-3"><a href="#abs-{{ slot.speaker }}">{{ speaker.name }}</a><span class="d-block small text-secondary">{{ speaker.affiliation | escape }}</span></li>
      {% endif %}
      {% endfor %}
      {% endfor %}
    </ul>
  </div>
</section>

<section id="venue" class="section-pad" aria-labelledby="venue-title">
  <div class="container">
    <h2 id="venue-title" class="h3 mb-4">会場案内</h2>
    <div class="row g-4 align-items-stretch">
      <div class="col-lg-6">
        <h3 class="h5 mb-3">{{ event.venue }}（{{ event.campus }}）</h3>
        <p>{{ event.address }}</p>
        <p><strong>会場の部屋</strong><br>{{ event.room }}</p>
        <p class="mb-4">京王井の頭線「駒場東大前」駅下車．</p>
        <a href="https://www.ms.u-tokyo.ac.jp/access/" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">数理科学研究科のアクセス案内<i class="bi bi-box-arrow-up-right ms-2" aria-hidden="true"></i></a>
      </div>
      <div class="col-lg-6">
        <div class="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
          <iframe title="東京大学数理科学研究科棟（駒場Ⅰキャンパス）の地図" src="https://www.google.com/maps?q=東京大学数理科学研究科棟+東京都目黒区駒場3-8-1&amp;output=embed&amp;hl=ja" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    {% comment %}
    以前の候補会場：統計数理研究所（記録用）．
    <div class="row g-4 align-items-stretch">
      <div class="col-lg-6">
        <h3 class="h5 mb-3">統計数理研究所（立川）</h3>
        <p>〒190-8562 東京都立川市緑町10-3</p>
        <p class="mb-4"><strong>会場の部屋</strong><br>D222講義室</p>
        <a href="https://www.ism.ac.jp/" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">統計数理研究所のウェブサイト<i class="bi bi-box-arrow-up-right ms-2" aria-hidden="true"></i></a>
      </div>
      <div class="col-lg-6">
        <div class="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
          <iframe title="統計数理研究所（立川）の地図" src="https://www.google.com/maps?q=統計数理研究所+東京都立川市緑町10-3&amp;output=embed&amp;hl=ja" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    {% endcomment %}
  </div>
</section>

<section id="contact" class="py-5 bg-body-tertiary" aria-labelledby="contact-title">
  <div class="container">
    <h2 id="contact-title" class="h5 mb-3">お問い合わせ</h2>
    <p class="mb-1">{{ event.contact_name }}</p>
    <a href="mailto:{{ event.contact_email }}">{{ event.contact_email }}</a>
  </div>
</section>
