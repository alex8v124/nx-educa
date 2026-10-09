from html.parser import HTMLParser
import re

class MainParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.recording = False
        self.tags = []
        self.data = ''

    def handle_starttag(self, tag, attrs):
        if tag == 'main':
            self.recording = True
        if self.recording:
            attr_str = ' '.join(f'{k}="{v}"' for k, v in attrs if k in ['class', 'id', 'type', 'placeholder', 'for'])
            self.data += f'<{tag} {attr_str}>'
            self.tags.append(tag)

    def handle_endtag(self, tag):
        if self.recording:
            self.data += f'</{tag}>'
            if self.tags and self.tags[-1] == tag:
                self.tags.pop()
            if tag == 'main' and not self.tags:
                self.recording = False

    def handle_data(self, data):
        if self.recording:
            self.data += data.strip()

for name, path in [
    ('PRE-REG', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\92\content.md'),
    ('PARENT', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\94\content.md'),
    ('TEACHER', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\96\content.md'),
    ('ADMIN', r'C:\Users\alex0\.gemini\antigravity\brain\f765b4bb-1dbf-496c-a3ef-aa1f4f1a67bc\.system_generated\steps\98\content.md'),
]:
    with open(path, encoding='utf-8') as f:
        text = f.read()
    parser = MainParser()
    parser.feed(text)
    print(f'--- {name} ---')
    print(parser.data[:1000] + '...')
