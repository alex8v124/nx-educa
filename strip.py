import re
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'<header.*?</header>', '', text, flags=re.DOTALL)
text = re.sub(r'<footer.*?</footer>', '', text, flags=re.DOTALL)
text = text.replace('<div className="flex min-h-screen flex-col">', '')
text = text.replace('{/* HEADER */}', '')
text = text.replace('<main className="flex-1">', '')
text = text.replace('</main>', '')
text = text.replace('{/* FOOTER */}', '')
text = text.replace('import { Menu, Sun, Moon, ArrowRight, Target, Gem, Eye, BookOpen, MapPin, Clock, Phone } from "lucide-react"', 'import { ArrowRight, Target, Gem, Eye, BookOpen, MapPin, Clock } from "lucide-react"')
text = text.replace('const { theme, setTheme } = useTheme()', '')
text = text.replace('const [mounted, setMounted] = useState(false)', '')
text = text.replace('setMounted(true)', '')
text = text.replace('import { useTheme } from "next-themes"', '')

last_div = text.rfind('</div>')
if last_div != -1:
    text = text[:last_div] + text[last_div+6:]

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
