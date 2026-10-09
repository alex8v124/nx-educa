import re
for name, path in [
    ('PARENT', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\94\content.md'),
    ('TEACHER', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\96\content.md'),
    ('ADMIN', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\98\content.md'),
]:
    with open(path, encoding='utf-8') as f:
        text = f.read()
        match = re.search(r'<div class="font-semibold tracking-tight.*?>(.*?)</div>', text)
        print(name, match.group(1) if match else 'Not found')
        desc = re.search(r'<div class="text-muted-foreground.*?>(.*?)</div>', text)
        print('Desc:', desc.group(1) if desc else 'Not found')
