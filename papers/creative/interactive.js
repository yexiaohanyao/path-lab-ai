(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const records = window.RESEARCH.tutor;
  const subjects = window.RESEARCH.subjects;
  const groups = [
    { id: 0, name: '无提示', short: '无提示', color: '#91a0a9' },
    { id: 1, name: '人工编写提示', short: '人工提示', color: '#568bbe' },
    { id: 2, name: 'ChatGPT 提示', short: 'ChatGPT', color: '#00468b' }
  ];
  const state = { subject: 'all', metric: 'gain', conditions: new Set([0, 1, 2]), selected: null, hypothesis: '', answer: '', seen: new Set(['全部题型']), clues: new Set(['gain']) };
  const hypothesisText = { higher: 'AI 提示表现更好', same: '两类提示可能接近', unsure: '先看数据再判断' };
  const answerText = { teacher: 'AI 导师已经全面超过真人教师。', correct: '该实验中两类提示的学习增益未检出显著差异。', equivalent: '已经严格证明 AI 提示与人工提示完全等效。' };
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const f = (value, digits = 2) => Number.isFinite(value) ? value.toFixed(digits) : '—';
  const signed = (value) => (value > 0 ? '+' : '') + f(value);
  const subjectName = (id) => id === 'all' ? '全部题型' : subjects.find((s) => s.id === id)?.name || id;
  const filtered = () => records.filter((r) => (state.subject === 'all' || r.subject === state.subject) && state.conditions.has(r.condition));
  const mean = (rows, key) => rows.length ? rows.reduce((sum, r) => sum + r[key], 0) / rows.length : NaN;
  const stats = (rows) => groups.filter((g) => state.conditions.has(g.id)).map((g) => {
    const subset = rows.filter((r) => r.condition === g.id);
    return { ...g, n: subset.length, pre: mean(subset, 'pre'), post: mean(subset, 'post'), gain: mean(subset, 'gain'), minutes: mean(subset, 'minutes') };
  });
  let timer;
  function toast(message) { $('toast').textContent = message; clearTimeout(timer); timer = setTimeout(() => { $('toast').textContent = ''; }, 3500); }
  function save(content, mime, filename) {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const a = document.createElement('a'); a.href = url; a.download = filename; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
    toast('已生成下载文件：' + filename);
  }
  const sx = (x, y, text, options = '') => `<text x="${x}" y="${y}" ${options}>${esc(text)}</text>`;
  function svgOpen(width, height, title, description) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${esc(title)}" style="font-family:'Microsoft YaHei','Segoe UI',sans-serif;font-size:12px;fill:#364c56"><title>${esc(title)}</title><desc>${esc(description)}</desc><rect width="100%" height="100%" fill="#fdfcf8"/>`;
  }
  function drawMain() {
    const rows = filtered(), summary = stats(rows);
    const title = { gain: '平均学习增益', score: '同一组的前测与后测', minutes: '平均任务用时' }[state.metric];
    $('chart-title').textContent = title;
    $('download-svg').disabled = !rows.length;
    if (!rows.length) {
      $('study-chart').innerHTML = '<div class="empty-state">还没有选中的实验组。<br>勾选上方任意一组，继续查看证据。</div>';
      $('chart-caption').textContent = '没有记录被删除；当前只是隐藏了三个实验组。';
      return;
    }
    const W = Math.max(310, Math.floor($('study-chart').clientWidth) - 28), H = 330;
    const left = 43, right = W - 18, top = 42, bottom = 263;
    const cols = summary.length, span = (right - left) / cols;
    const describe = `${subjectName(state.subject)}；${summary.map((g) => `${g.name} n=${g.n}，增益 ${f(g.gain)} 百分点，前测 ${f(g.pre)}%，后测 ${f(g.post)}%，用时 ${f(g.minutes)} 分钟`).join('；')}。描述统计，未展示置信区间。`;
    let s = svgOpen(W, H, title + ' · ' + subjectName(state.subject), describe);
    if (state.metric === 'score') {
      const x = (v) => left + v / 100 * (right - left);
      for (let v = 0; v <= 100; v += 25) { s += `<line x1="${x(v)}" x2="${x(v)}" y1="45" y2="265" stroke="#dce1dc" stroke-dasharray="3 4"/>` + sx(x(v), 288, v + '%', 'text-anchor="middle" font-size="10"'); }
      s += sx(left, 18, '○ 前测', 'font-size="11"') + sx(left + 78, 18, '● 后测', 'font-size="11"');
      summary.forEach((g, i) => {
        const y = 65 + i * (195 / Math.max(1, cols));
        s += sx(left, y, g.name + ' · n = ' + g.n, 'font-size="11"') + `<line x1="${x(g.pre)}" x2="${x(g.post)}" y1="${y + 23}" y2="${y + 23}" stroke="${g.color}" stroke-width="4"/><circle cx="${x(g.pre)}" cy="${y + 23}" r="6" stroke="${g.color}" stroke-width="2" fill="#fdfcf8"/><circle cx="${x(g.post)}" cy="${y + 23}" r="6" fill="${g.color}"/>`;
        s += sx(left, y + 46, `${f(g.pre)}% → ${f(g.post)}%`, 'font-size="10" fill="#64756d"');
      });
      s += sx(left, 317, '各点均为组均值 · 横轴为答题正确率', 'font-size="10" fill="#63736b"');
      $('chart-caption').textContent = '先分清起点与终点。全体样本中，ChatGPT 组的平均前测较低；仅凭后测均值排名，不能概括学习增益。这里的连线表示两次组均值，不能替代逐人记录或原文的统计检验。';
    } else {
      const metric = state.metric;
      // Derive a shared axis from all subject/condition means so filters remain visually comparable.
      const allMeans = ['all', ...subjects.map((p) => p.id)].flatMap((id) => groups.map((g) => mean(records.filter((r) => (id === 'all' || r.subject === id) && r.condition === g.id), metric)));
      const step = metric === 'gain' ? 10 : 5;
      const min = metric === 'gain' ? Math.min(0, Math.floor(Math.min(...allMeans) / step) * step) : 0;
      const max = Math.max(step, Math.ceil(Math.max(...allMeans) / step) * step);
      const y = (v) => bottom - (v - min) / (max - min) * (bottom - top);
      s += sx(left, 19, metric === 'gain' ? '学习增益 / 百分点' : '会话记录 / 分钟', 'font-size="11"');
      for (let tick = min; tick <= max; tick += step) {
        s += `<line x1="${left}" x2="${right}" y1="${y(tick)}" y2="${y(tick)}" stroke="${tick === 0 ? '#9eaca8' : '#e2e6e0'}" ${tick !== 0 ? 'stroke-dasharray="3 4"' : ''}/>` + sx(left - 9, y(tick) + 4, tick, 'text-anchor="end" font-size="10"');
      }
      summary.forEach((g, i) => {
        const x = left + span * (i + 0.5), bw = Math.min(70, span * 0.48), v = g[metric];
        const barY = Math.min(y(v), y(0)), bh = Math.max(1, Math.abs(y(v) - y(0)));
        s += `<rect x="${x - bw / 2}" y="${barY}" width="${bw}" height="${bh}" rx="2" fill="${g.color}"/>`;
        s += sx(x, (v < 0 ? y(v) + 18 : y(v) - 10), f(v), 'text-anchor="middle" font-family="Consolas,monospace" font-weight="600" font-size="16" fill="#203c50"');
        s += sx(x, 286, g.short, 'text-anchor="middle" font-size="11"') + sx(x, 305, 'n = ' + g.n, 'text-anchor="middle" font-size="10" fill="#728078"');
      });
      $('chart-caption').textContent = metric === 'gain' ? '柱高是组均值，单位为百分点。坐标范围在各题型间保持一致；图中未画置信区间。平均值较高不自动意味着差异显著，结合右侧原文检验与下方个体分布阅读。' : '记录用时来自公开 CSV 的 sessionTime 字段，秒换算为分钟。该字段不能单独视作提示阅读时间；这里不将用时短或长直接解释成学习效果好坏。';
    }
    $('study-chart').innerHTML = s + '</svg>';
  }
  function renderSummary(rows, summary) {
    $('sample-label').textContent = `公开数据 · 当前 n = ${rows.length} / 274`;
    const subject = subjects.find((s) => s.id === state.subject);
    $('lesson-label').textContent = subject ? subject.name + ' · ' + subject.lesson : '四类数学主题 · 查看全体参与者';
    const featured = summary.find((g) => g.id === 2) || summary[summary.length - 1];
    $('summary-title').textContent = state.subject === 'all' ? '看到增益，也看清边界。' : '换了题型，还能这样说吗？';
    $('summary-number').textContent = featured ? (state.metric === 'gain' ? signed(featured.gain) : f(featured[state.metric === 'score' ? 'post' : 'minutes'])) : '—';
    $('summary-unit').textContent = featured ? `${featured.name} / ${state.metric === 'gain' ? '平均增益 · 百分点' : state.metric === 'score' ? '平均后测 · %' : '平均用时 · 分钟'}` : '勾选一个实验组以查看数据';
    $('inference-note').textContent = state.subject === 'all' ? '原文对全体样本的检验：ChatGPT 与人工提示的学习增益差异未达显著（p = .416）；ChatGPT 相对无提示更高（p = .011）。这些 p 值来自原文，不随这里的勾选重算。未检出差异也不等于证明两者严格等效。' : '当前题型仅展示描述统计。小组均值的高低不构成显著性结论；本页不计算新的分题型 p 值。原文全体样本中，ChatGPT 与人工提示的增益差异未达显著（p = .416），不能直接套用为这个子组的检验结果。';
    $('stats-table').innerHTML = summary.length ? summary.map((g) => `<tr><th scope="row" style="color:#354c58">${g.name}</th><td class="num">${g.n}</td><td class="num">${f(g.pre)}</td><td class="num">${f(g.post)}</td><td class="num">${signed(g.gain)}</td><td class="num">${f(g.minutes)}</td></tr>`).join('') : '<tr><td colspan="6">勾选实验组后显示汇总。</td></tr>';
    $('download-csv').disabled = !rows.length;
  }
  function renderIndividuals(rows) {
    const displayedGroups = groups.filter((g) => state.conditions.has(g.id));
    const W = 1060, H = 325, left = 58, right = W - 23, top = 27, bottom = 265;
    const span = (right - left) / (displayedGroups.length || 1), y = (v) => bottom - (v + 100) / 200 * (bottom - top);
    let svg = svgOpen(W, H, '每位参与者的学习增益', `当前 ${rows.length} 人。纵轴为学习增益，横向位置仅错开记录。方向键可切换记录。`).replace('role="img"', 'role="group"');
    for (let v = -100; v <= 100; v += 50) svg += `<line x1="${left}" x2="${right}" y1="${y(v)}" y2="${y(v)}" stroke="${v === 0 ? '#a5b4aa' : '#e3e7e0'}" ${v !== 0 ? 'stroke-dasharray="3 4"' : ''}/>` + sx(left - 10, y(v) + 4, (v > 0 ? '+' : '') + v, 'text-anchor="end" font-size="11"');
    svg += sx(left, 13, '学习增益 / 百分点', 'font-size="11"');
    const first = rows.some((r) => r.id === state.selected) ? state.selected : rows[0]?.id;
    displayedGroups.forEach((g, index) => {
      const cx = left + span * (index + 0.5), subset = rows.filter((r) => r.condition === g.id), bins = new Map();
      subset.forEach((r) => { const key = r.gain.toFixed(1); if (!bins.has(key)) bins.set(key, []); bins.get(key).push(r); });
      bins.forEach((bin) => bin.forEach((r, bi) => {
        const spacing = Math.min(8, (span - 30) / Math.max(1, bin.length - 1));
        const x = cx + (bi - (bin.length - 1) / 2) * spacing;
        svg += `<circle cx="${x}" cy="${y(r.gain)}" r="3.2" fill="${g.color}" opacity=".8" stroke="#fdfcf8" stroke-width=".35" data-record="${r.id}" role="button" tabindex="${r.id === first ? '0' : '-1'}" aria-pressed="${r.id === state.selected}" aria-label="匿名记录 ${r.id}，${subjectName(r.subject)}，${g.name}，学习增益 ${signed(r.gain)} 百分点"><title>记录 ${r.id} · ${signed(r.gain)} 百分点</title></circle>`;
      }));
      svg += sx(cx, 294, `${g.name} · n = ${subset.length}`, 'text-anchor="middle" font-size="12"');
    });
    if (!rows.length) svg += sx(W / 2, H / 2, '勾选任意实验组，查看参与者记录。', 'text-anchor="middle"');
    $('individual-plot').innerHTML = svg + '</svg>';
    const option = (r) => `<option value="${r.id}">#${String(r.id).padStart(3, '0')} · ${subjectName(r.subject)} · ${groups[r.condition].short}</option>`;
    $('record-select').innerHTML = '<option value="">选择匿名记录</option>' + rows.map(option).join('');
    $('record-select').disabled = !rows.length;
    $('record-prev').disabled = $('record-next').disabled = !rows.length;
    if (state.selected !== null && rows.some((r) => r.id === state.selected)) selectRecord(state.selected, false);
    else { state.selected = null; $('record-tip').innerHTML = '<span>选择一个点，查看匿名记录。</span><span>横向位置仅用于错开圆点，不代表额外变量。</span>'; }
  }
  function markClue(clue) {
    state.clues.add(clue);
    state.clues.forEach((key) => { const el = $('clue-' + key); el.textContent = '已查看 ✓'; el.classList.add('done'); });
  }
  function selectRecord(id, focus = false) {
    const rows = filtered(), r = rows.find((row) => row.id === id); if (!r) return;
    state.selected = id;
    document.querySelectorAll('[data-record]').forEach((c) => { c.setAttribute('aria-pressed', String(Number(c.dataset.record) === id)); c.setAttribute('tabindex', Number(c.dataset.record) === id ? '0' : '-1'); });
    $('record-select').value = String(id);
    $('record-tip').innerHTML = `<span><strong>#${String(r.id).padStart(3, '0')}</strong> · ${subjectName(r.subject)} · ${groups[r.condition].name}<br>前测 <strong>${f(r.pre)}%</strong> → 后测 <strong>${f(r.post)}%</strong></span><span>学习增益 <strong>${signed(r.gain)} pp</strong> · 会话用时 <strong>${f(r.minutes)} min</strong><br>编号沿用公开数据匿名 ID；增益沿用原始字段。</span>`;
    markClue('person');
    const selectedDot = document.querySelector(`[data-record="${id}"]`);
    if (focus) selectedDot?.focus({ preventScroll: true });
    if (selectedDot) {
      const scroller = selectedDot.closest('.individual-inner');
      const bounds = scroller.getBoundingClientRect(), dotBounds = selectedDot.getBoundingClientRect();
      if (dotBounds.left < bounds.left + 12 || dotBounds.right > bounds.right - 12) scroller.scrollLeft += dotBounds.left - bounds.left - bounds.width / 2;
    }
  }
  function moveRecord(direction, from) {
    const rows = filtered(); if (!rows.length) return;
    let index = rows.findIndex((r) => r.id === (from ?? state.selected));
    if (index < 0) index = direction > 0 ? -1 : 0;
    selectRecord(rows[(index + direction + rows.length) % rows.length].id, from !== undefined);
  }
  function render() { const rows = filtered(); renderSummary(rows, stats(rows)); drawMain(); renderIndividuals(rows); markClue('gain'); }
  function metric(value) {
    state.metric = value;
    document.querySelectorAll('[data-metric]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.metric === value)));
    markClue(value === 'gain' ? 'gain' : 'score');
    renderSummary(filtered(), stats(filtered())); drawMain();
  }
  document.querySelectorAll('[data-subject]').forEach((b) => b.addEventListener('click', () => {
    state.subject = b.dataset.subject; state.seen.add(subjectName(state.subject));
    document.querySelectorAll('[data-subject]').forEach((el) => el.setAttribute('aria-pressed', String(el === b)));
    render();
  }));
  document.querySelectorAll('[data-condition]').forEach((box) => box.addEventListener('change', () => { const id = Number(box.dataset.condition); box.checked ? state.conditions.add(id) : state.conditions.delete(id); render(); }));
  document.querySelectorAll('[data-metric]').forEach((b) => b.addEventListener('click', () => metric(b.dataset.metric)));
  $('reset-filters').addEventListener('click', () => {
    state.subject = 'all'; state.conditions = new Set([0, 1, 2]); state.selected = null;
    document.querySelectorAll('[data-subject]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.subject === 'all')));
    document.querySelectorAll('[data-condition]').forEach((box) => { box.checked = true; });
    metric('gain'); render(); toast('已恢复全体样本与全部实验组。');
  });
  $('individual-plot').addEventListener('click', (event) => { const dot = event.target.closest('[data-record]'); if (dot) selectRecord(Number(dot.dataset.record)); });
  $('individual-plot').addEventListener('keydown', (event) => {
    const dot = event.target.closest('[data-record]'); if (!dot) return;
    const id = Number(dot.dataset.record);
    if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(event.key)) { event.preventDefault(); moveRecord(['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1, id); }
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectRecord(id); }
  });
  $('record-select').addEventListener('change', (event) => { if (event.target.value) selectRecord(Number(event.target.value)); });
  $('record-prev').addEventListener('click', () => moveRecord(-1)); $('record-next').addEventListener('click', () => moveRecord(1));
  document.querySelectorAll('[data-hypothesis]').forEach((b) => b.addEventListener('click', () => {
    state.hypothesis = b.dataset.hypothesis;
    document.querySelectorAll('[data-hypothesis]').forEach((el) => el.setAttribute('aria-pressed', String(el === b)));
    $('hypothesis-note').textContent = `已记录：“${hypothesisText[state.hypothesis]}”。沿着下面三条线索，看看证据会不会改变你的想法。`;
  }));
  document.querySelectorAll('[data-clue]').forEach((b) => b.addEventListener('click', () => {
    const clue = b.dataset.clue;
    if (clue === 'person') { $('individual-section').scrollIntoView({ behavior: 'smooth', block: 'start' }); $('record-select').focus({ preventScroll: true }); }
    else { metric(clue); $('experiment').scrollIntoView({ behavior: 'smooth', block: 'start' }); document.querySelector(`[data-metric="${clue}"]`).focus({ preventScroll: true }); }
  }));
  document.querySelectorAll('[data-answer]').forEach((b) => b.addEventListener('click', () => {
    state.answer = b.dataset.answer;
    document.querySelectorAll('[data-answer]').forEach((el) => el.setAttribute('aria-pressed', String(el === b)));
    const feedback = {
      correct: '这句话与证据相符。ChatGPT 组平均增益为 17.00 pp，人工提示组为 11.62 pp，但原文比较 p = .416，未检出显著差异。数值较大、显著更优与严格等效，是三个不同层次的判断。',
      teacher: '这超出了实验的边界。研究比较的是预先生成的 ChatGPT 解题提示与人工编写提示，参与者来自 MTurk，并没有比较 AI 与真人教师的全面教学能力。先把对象与场景说清楚。',
      equivalent: '未检出显著差异，不等于已经严格证明等效。p = .416 对应此实验中的差异检验；若要证明等效，需要预设等效界值并使用相应检验。'
    };
    $('quiz-feedback').textContent = feedback[state.answer];
  }));
  $('download-csv').addEventListener('click', () => {
    const rows = filtered(); if (!rows.length) return;
    const fields = ['anonymous_record_id', 'subject', 'condition_code', 'condition', 'pre_pct', 'post_pct', 'learningGain_pp', 'session_minutes'];
    const quote = (value) => '"' + String(value).replace(/"/g, '""') + '"';
    const csv = [fields, ...rows.map((r) => [r.id, subjectName(r.subject), r.condition, groups[r.condition].name, f(r.pre, 6), f(r.post, 6), f(r.gain, 6), f(r.minutes, 6)])].map((row) => row.map(quote).join(',')).join('\r\n');
    save('\ufeff' + csv, 'text/csv;charset=utf-8', `论文0304013_${subjectName(state.subject)}_${rows.length}条.csv`);
  });
  $('download-svg').addEventListener('click', () => {
    const svg = $('study-chart').querySelector('svg'); if (!svg) return;
    const clone = svg.cloneNode(true);
    const metadata = document.createElementNS('http://www.w3.org/2000/svg', 'metadata');
    metadata.textContent = 'Source: Pardos & Bhandari (2024), DOI:10.1371/journal.pone.0304013; participant data DOI:10.6084/m9.figshare.23935269, CC BY 4.0. Derived descriptive visualization. Learning gain uses original learningGain field. ' + $('chart-caption').textContent;
    clone.insertBefore(metadata, clone.firstChild);
    save('<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone), 'image/svg+xml;charset=utf-8', `论文0304013_${subjectName(state.subject)}_${state.metric}.svg`);
  });
  $('download-notebook').addEventListener('click', () => {
    const rows = filtered(), summary = stats(rows);
    const lines = ['# 我的证据笔记：AI 提示，真的帮助学习吗？', '', '原论文：Pardos & Bhandari (2024), PLOS ONE', 'DOI：https://doi.org/10.1371/journal.pone.0304013', '数据：https://doi.org/10.6084/m9.figshare.23935269 （CC BY 4.0）', '', '## 我的探索', '', '- 初步猜测：' + (hypothesisText[state.hypothesis] || '尚未填写'), '- 已查看题型：' + [...state.seen].join('、'), '- 已查看线索：' + [...state.clues].map((k) => ({ gain: '组均值', score: '其他指标', person: '匿名记录' }[k])).join('、'), '- 当前题型：' + subjectName(state.subject), '- 当前记录数：' + rows.length, '- 最后的判断：' + (answerText[state.answer] || '尚未作答'), '', '## 当前筛选的描述统计', '', '| 组别 | n | 前测 % | 后测 % | 增益 pp | 用时 min |', '| --- | ---: | ---: | ---: | ---: | ---: |', ...summary.map((g) => `| ${g.name} | ${g.n} | ${f(g.pre)} | ${f(g.post)} | ${f(g.gain)} | ${f(g.minutes)} |`), '', '## 证据与边界', '', '全体样本中，ChatGPT 与人工提示学习增益比较 p = .416，未检出显著差异；ChatGPT 相对无提示 p = .011。上述 p 值为原文全体样本的检验，不随筛选重算，不能直接套用于子组。未检出差异也不证明严格等效。', '', '增益沿用原始 learningGain 字段（乘以 100 转成百分点），并非以前后测舍入值相减重建。用时沿用原始 sessionTime 字段，秒换算为分钟。本页分题型汇总为描述统计。', '', '研究使用 2023 年 ChatGPT 预先生成并检查的提示；参与者来自 MTurk。这不是实时 AI 导师与真人教师的能力比较。无提示组仍有正确性反馈与直接给答案的末级提示。'];
    if (state.selected !== null) { const r = records.find((p) => p.id === state.selected); lines.push('', '## 我查看的匿名记录', '', `#${r.id} · ${subjectName(r.subject)} · ${groups[r.condition].name}；前测 ${f(r.pre)}%，后测 ${f(r.post)}%，学习增益 ${signed(r.gain)} pp，会话用时 ${f(r.minutes)} min。`); }
    save(lines.join('\n'), 'text/markdown;charset=utf-8', '我的证据笔记_0304013.md');
  });
  let resizeTimer; window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(drawMain, 100); });
  render();
})();
