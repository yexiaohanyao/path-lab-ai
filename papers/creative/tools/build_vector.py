from pathlib import Path
from html import escape
import json, math

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT
raw = (OUT/'data.js').read_text(encoding='utf-8').removeprefix('window.RESEARCH = ').strip().removesuffix(';')
crystal = json.loads(raw)['crystal']
PURPLE, INK, PAPER, LINE = '#594485', '#272132', '#fbf9f4', '#dcd6e3'
s = []
def add(v): s.append(v)
def text(x,y,t,size=20,color=INK,weight=400,family='sans',anchor='start',extra=''):
    font = 'Georgia, Times New Roman, serif' if family=='serif' else 'Consolas, monospace' if family=='mono' else 'Microsoft YaHei, Noto Sans CJK SC, Arial, sans-serif'
    add(f'<text x="{x}" y="{y}" fill="{color}" font-size="{size}" font-weight="{weight}" font-family="{font}" text-anchor="{anchor}" {extra}>{escape(str(t))}</text>')
def line(x1,y1,x2,y2,color=LINE,width=1,dash=''):
    add(f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" stroke="{color}" stroke-width="{width}"'+(f' stroke-dasharray="{dash}"' if dash else '')+'/>')
def rect(x,y,w,h,fill='none',stroke='none',r=0):
    add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}"/>')
def circle(x,y,r,fill,stroke='none',width=1):
    add(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>')
def section(x,y,n,label):
    circle(x+12,y-7,12,PURPLE)
    text(x+12,y-3,n,11,PAPER,600,'mono','middle')
    text(x+35,y,label,16,PURPLE,600)

add('<?xml version="1.0" encoding="UTF-8"?>')
add('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600" role="img" aria-labelledby="title desc">')
add('<title id="title">MatterGen：材料生成蓝图</title>')
add('<desc id="desc">可编辑矢量论文卡。目标约束、联合去噪与作者公开候选晶胞；实验估计体积模量158±11 GPa，最高169 GPa，目标200 GPa。附2026年关于新颖性与无序结构归属的后续争议。</desc>')
add('<metadata>Original research: Zeni et al., Nature 639, 624–632 (2025), DOI 10.1038/s41586-025-08628-5. Follow-up: Juelsholt, Materials Horizons (2026), DOI 10.1039/D6MH00268D. Crystal: author-generated TaCr2O6.cif from microsoft/mattergen data-release. Adaptation: original editorial diagrams and Chinese interpretation. Verified 2026-09-12. No raster assets.</metadata>')
rect(0,0,1200,1600,PAPER)
rect(0,0,15,1600,PURPLE)
text(64,64,'知屿  /  MATERIALS BLUEPRINT',15,PURPLE,600,extra='letter-spacing="2"')
text(1136,64,'VECTOR EDITION 02',14,PURPLE,400,'mono','end')
text(60,139,'让材料从「目标」开始。',52,INK,500)
text(64,196,'MatterGen · 无机晶体的条件生成',28,PURPLE,500)
text(65,234,'A generative model for inorganic materials design',20,'#81748f',400,'serif')
line(64,267,1136,267,PURPLE,2)

section(64,311,'01','先给出想要的性质')
text(64,357,'如果先指定性质，能否反推出晶体？',29,INK,500)
for x,head,sub in [(64,'化学组成','元素与配比'),(285,'晶体对称性','目标空间群'),(506,'标量性质','力学 / 电子 / 磁性')]:
    rect(x,383,203,67,'#ede8f3',r=3)
    text(x+17,410,head,17,PURPLE,600)
    text(x+17,434,sub,14,'#7d718c')
line(775,307,775,450)
text(818,315,'训练基础  /  ALEX-MP-20',12,PURPLE,600,extra='letter-spacing="1"')
text(813,371,'607,683',49,PURPLE,400,'mono')
text(818,406,'稳定结构；每个晶胞 ≤ 20 原子',16)
text(818,433,'Materials Project + Alexandria',14,'#81748f')
line(64,482,1136,482)

section(64,523,'02','把晶体的三个部分，一起去噪')
text(64,553,'一个等变评分网络，联合更新元素、位置与晶格。',17,'#7d718c')
rect(64,579,690,57,PURPLE,r=3)
text(409,614,'条件适配器 Adapter  ·  根据目标微调',20,PAPER,500,anchor='middle')
line(409,636,409,658,PURPLE,1.5)
line(183,658,635,658,PURPLE,1.5)
for x in [183,409,635]:
    line(x,658,x,675,PURPLE,1.5)
    add(f'<path d="M{x-4} 671 L{x} 677 L{x+4} 671" fill="none" stroke="{PURPLE}" stroke-width="1.5"/>')

# Three mechanisms are editorial schematics, not fabricated model traces.
for x in [183,409,635]:
    rect(x-96,687,192,150,'#f3eff6',r=4)
circle(151,740,27,PURPLE)
text(151,746,'Ta',18,PAPER,600,'mono','middle')
circle(210,744,23,'#a393be')
text(210,750,'Cr',16,PAPER,600,'mono','middle')
circle(177,799,18,PAPER,PURPLE,2)
text(177,805,'O',17,PURPLE,600,'mono','middle')
for x in [354,389,424,459]: line(x,713,x,811,'#d2c6df')
for y in [713,748,783,811]: line(354,y,459,y,'#d2c6df')
for x,y in [(363,737),(397,770),(437,725),(449,802)]:circle(x,y,5,'#b3a5c5')
for x,y in [(354,713),(389,748),(424,783),(459,811)]:circle(x,y,6,PURPLE)
add(f'<path d="M380 773 L386 751 L379 757 M386 751 L390 760" fill="none" stroke="{PURPLE}" stroke-width="1.5"/>')
front=[(587,748),(649,766),(649,814),(587,796)]
back=[(622,717),(684,735),(684,783),(622,765)]
for points in [front,back]:
    add('<polygon points="'+' '.join(f'{x},{y}' for x,y in points)+f'" fill="none" stroke="{PURPLE}" stroke-width="2"/>')
for (x1,y1),(x2,y2) in zip(front,back):line(x1,y1,x2,y2,PURPLE,2)
for x,y in front+back:circle(x,y,3,PURPLE)
for x,label,sub in [(183,'A · 原子类型','决定由哪些元素组成'),(409,'X · 原子坐标','决定原子在周期内的位置'),(635,'L · 周期晶格','决定晶胞形状与尺度')]:
    text(x,869,label,19,PURPLE,600,anchor='middle')
    text(x,898,sub,15,'#7d718c',anchor='middle')
text(409,939,'随机结构  →  反复去噪  →  晶体候选',17,PURPLE,500,anchor='middle')
text(409,966,'过程示意；非模型运行输出',12,'#92869f',anchor='middle')

# Exact author-generated CIF fractional sites, projected with the stated cell metric.
line(791,506,791,965)
section(821,523,'03','读出一个候选')
text(978,562,'TaCr₂O₆',31,PURPLE,500,'serif','middle')
origin=(966,800)
a,b,c=crystal['cell']
def proj(frac):
    x,y,z=frac
    az,el,scale=math.radians(38),math.radians(24),24
    u=math.cos(az)*x*a-math.sin(az)*y*b
    v=math.sin(el)*(math.sin(az)*x*a+math.cos(az)*y*b)-math.cos(el)*z*c
    return (origin[0]+u*scale,origin[1]+v*scale)
verts=[(x,y,z) for z in [0,1] for y in [0,1] for x in [0,1]]
for i,u in enumerate(verts):
    for v in verts[i+1:]:
        if sum(abs(u[j]-v[j]) for j in range(3))==1:
            p,q=proj(u),proj(v)
            line(*p,*q,'#a89abb',1.2,'4 4' if u[1]==1 and v[1]==1 else '')
atoms=crystal['atoms']
positions=[proj(p['xyz']) for p in atoms]
# This drawing deliberately shows no interatomic bond lines; wireframe edges are cell boundaries.
for i in sorted(range(len(atoms)), key=lambda i:sum(atoms[i]['xyz'][:2])):
    atom=atoms[i]; x,y=positions[i]; e=atom['element']
    fill={'Ta':PURPLE,'Cr':'#a493be','O':PAPER}[e]
    radius={'Ta':12,'Cr':9,'O':6.5}[e]
    add(f'<g data-element="{e}" data-fractional="'+','.join(map(str,atom['xyz']))+'">')
    circle(x,y,radius,fill,PURPLE,1.3)
    add(f'<title>{e} · fractional '+', '.join(map(str,atom['xyz']))+'</title></g>')
for x,e in [(870,'Ta'),(956,'Cr'),(1042,'O')]:
    circle(x,884,6,{'Ta':PURPLE,'Cr':'#a493be','O':PAPER}[e],PURPLE)
    text(x+13,889,e,14,PURPLE,400,'mono')
text(978,915,'a = b = 4.640 Å  ·  c = 9.109 Å',13,'#7d718c',400,'mono','middle')
text(978,939,'作者生成的有序候选结构',15,INK,500,anchor='middle')
text(978,962,'不是实验精修结构；线框仅为晶胞边界',12,'#81748f',anchor='middle')

rect(64,994,1072,235,PURPLE,r=4)
text(87,1030,'04  /  用证据约束生成的想象',16,PAPER,600)
text(88,1093,'> 2×',53,PAPER,400,'mono')
text(290,1080,'SUN 生成比例',22,PAPER,500)
text(290,1110,'稳定 · 唯一 · 新颖',17,'#dfd5ec')
text(89,1153,'原文基准中超过既有生成模型的两倍。',16,'#e2dbea')
text(89,1181,'这是特定指标；不代表实验成功率翻倍。',15,'#e2dbea')
text(89,1208,'稳定按 DFT 弛豫后的能量判据评估。',13,'#c8b9dc')
line(590,1047,590,1204,'#8b76a8')
text(626,1030,'体积模量：目标与实验估计',17,PAPER,600)
text(626,1060,'纳米压痕杨氏模量 + DFT 泊松比 0.30',13,'#d7cce5')
# A factual linear value ruler; no invented experimental curve.
axisx,axisw=630,460
for val in [0,50,100,150,200]:
    px=axisx+val/220*axisw
    line(px,1124,px,1132,'#b7a6ce')
    text(px,1151,val,12,'#d7cce5',400,'mono','middle')
line(axisx,1128,axisx+axisw,1128,'#b7a6ce',1)
avg=axisx+158/220*axisw
lo=axisx+147/220*axisw
hi=axisx+169/220*axisw
target=axisx+200/220*axisw
line(lo,1114,hi,1114,PAPER,3)
line(lo,1106,lo,1122,PAPER,2)
line(hi,1106,hi,1122,PAPER,2)
circle(avg,1114,6,PAPER)
line(target,1098,target,1128,'#d9cbec',1.5,'4 3')
text(target,1090,'目标 200',15,PAPER,600,anchor='middle')
text(626,1183,'4 次：158 ± 11 GPa；最高 169 GPa',17,PAPER,500)
text(626,1209,'“距目标 < 20%”采用最高值，并非均值。',13,'#e2dbea')

section(64,1279,'05','追踪到后续研究：保留争议，而非提前定论')
text(64,1320,'2025',23,PURPLE,500,'mono')
text(175,1320,'原文提出 TaCr₂O₆ 生成与合成的概念验证。',20)
line(75,1335,75,1369,PURPLE,1)
text(64,1401,'2026',23,PURPLE,500,'mono')
text(175,1366,'Juelsholt 在 Materials Horizons 质疑其新颖性及无序结构归属，',18)
text(175,1395,'认为与既有、且进入训练集的化合物相同。此处保留双方来源。',18)
text(175,1424,'阅读重点：有序模型、无序实验相与数据库“新颖性”需分开核查。',16,'#7d718c')
line(64,1453,1136,1453,PURPLE,1)
text(64,1485,'原文  Zeni et al. · Nature 639, 624–632 (2025) · DOI: 10.1038/s41586-025-08628-5',13,PURPLE)
text(64,1510,'后续  Juelsholt · Materials Horizons (2026) · DOI: 10.1039/D6MH00268D',13,PURPLE)
text(64,1535,'代码与结构  github.com/microsoft/mattergen  ·  晶胞来自作者 data-release / TaCr2O6.cif',13,'#81748f')
text(64,1568,'原创矢量重绘与中文解读 · 1200 × 1600 · 文字可编辑',12,'#92869f')
text(1136,1568,'核验日期 2026-09-12',12,'#92869f',anchor='end')
add('</svg>')
svg='\n'.join(s)
(OUT/'assets/mattergen.svg').write_bytes(svg.encode('utf-8'))
js='''/* Original SVG is embedded so the preview and export also work from file://. */
const MATTERGEN_SVG = '''+json.dumps(svg,ensure_ascii=False)+''';
const sheet = document.querySelector('#vector-sheet');
sheet.innerHTML = MATTERGEN_SVG.replace(/<\\?xml[^>]*>/, '');
const desk = document.querySelector('#vector-desk');
const zoom = document.querySelector('#zoom');
const zoomLabel = document.querySelector('#zoom-value');
let fitted = true;
function setZoom(value) {
  const pct = Math.min(150, Math.max(15, Number(value)));
  zoom.value = pct;
  zoomLabel.value = `${pct}%`;
  sheet.style.width = `${1200 * pct / 100}px`;
}
function fit() {
  const cs = getComputedStyle(desk);
  const room = desk.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  setZoom(Math.floor(Math.min(840, room) / 12));
  desk.scrollLeft = 0;
  fitted = true;
}
zoom.addEventListener('input', () => { fitted = false; setZoom(zoom.value); });
document.querySelector('#fit').addEventListener('click', fit);
new ResizeObserver(() => { if (fitted) fit(); }).observe(desk);
fit();
function saveBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.hidden = true;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 15000);
}
let toastTimer;
function notify(message) {
  document.querySelector('#toast').textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { document.querySelector('#toast').textContent = ''; }, 6500);
}
document.querySelector('#download-svg').addEventListener('click', () => {
  saveBlob(new Blob([MATTERGEN_SVG], {type:'image/svg+xml;charset=utf-8'}), 'MatterGen_材料生成蓝图_1200x1600.svg');
  notify('SVG 已导出，文字与图形均可继续编辑。');
});
document.querySelector('#download-png').addEventListener('click', async event => {
  const button = event.currentTarget;
  button.disabled = true;
  button.textContent = '正在渲染…';
  let url;
  try {
    await document.fonts.ready;
    const canvas = document.createElement('canvas');
    canvas.width = 2400; canvas.height = 3200;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas unavailable');
    url = URL.createObjectURL(new Blob([MATTERGEN_SVG], {type:'image/svg+xml;charset=utf-8'}));
    const img = new Image();
    await new Promise((resolve, reject) => { img.onload=resolve; img.onerror=reject; img.src=url; });
    ctx.drawImage(img,0,0,2400,3200);
    const blob = await new Promise(resolve => canvas.toBlob(resolve,'image/png'));
    if (!blob) throw new Error('Export unavailable');
    saveBlob(blob,'MatterGen_材料生成蓝图_2400x3200.png');
    notify('PNG 已导出，尺寸为 2400 × 3200。');
  } catch (error) {
    notify('此浏览器暂未完成 PNG 导出，请下载 SVG 或在 Chrome 中打开此页重试。');
  } finally {
    if(url) URL.revokeObjectURL(url);
    button.disabled = false;
    button.textContent = '导出 PNG ↗';
  }
});
'''
(OUT/'vector.js').write_bytes(js.encode('utf-8'))
print(json.dumps({'svg':str(OUT/'assets/mattergen.svg'),'text_nodes':svg.count('<text '),'atoms':len(atoms),'raster_images':svg.count('<image'),'bytes':len(svg.encode())},ensure_ascii=False))
