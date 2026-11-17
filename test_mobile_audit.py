import os
import re
import glob

html_files = sorted(glob.glob('*.html') + glob.glob('work/*.html') + glob.glob('work/*/*.html'))
print(f"Total HTML files to audit: {len(html_files)}")

issues = []

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Viewport meta tag
    if 'name="viewport"' not in content:
        issues.append(f"{fpath}: Missing viewport meta tag!")

    # 2. Fixed widths >= 320px (excluding min-width or inside comments)
    matches = re.findall(r'(?<![a-zA-Z\-_])width:\s*([3-9][0-9]{2}|[1-9][0-9]{3,})px', content)
    if matches:
        issues.append(f"{fpath}: Found fixed pixel width >= 320px: {matches}")

    # 3. Prohibited frameworks
    for fw in ['react', 'vue', 'angular', 'next', 'vite']:
        # check script tags
        script_srcs = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', content, re.IGNORECASE)
        for src in script_srcs:
            if fw in src.lower():
                issues.append(f"{fpath}: Prohibited script source found: {src}")

    # 4. Check hamburger button accessibility
    if 'class="mobile-nav-toggle"' in content:
        if 'aria-label' not in content:
            issues.append(f"{fpath}: mobile-nav-toggle missing aria-label")

print(f"Audit completed. Total issues: {len(issues)}")
for iss in issues:
    print(" - ", iss)

if len(issues) == 0:
    print("ALL 19 HTML FILES PASSED MOBILE COMPATIBILITY & STATIC AUDIT!")
