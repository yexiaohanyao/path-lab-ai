from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'data/research.json').read_text(encoding='utf-8'))
assert len(data['tutor']) == 274
assert len(data['birds']['app']) == 89 and len(data['birds']['expert']) == 73
(root/'data.js').write_text('window.RESEARCH = '+json.dumps(data,ensure_ascii=False)+';',encoding='utf-8')
print('data.js rebuilt from verified research.json')
