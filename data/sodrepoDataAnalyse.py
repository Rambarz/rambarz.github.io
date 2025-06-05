import re, json

with open('sodrepoData.js', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'^\s*export\s+const\s+\w+\s*=\s*', '', text, flags=re.MULTILINE)
text = re.sub(r'export\s+default\s+\w+;\s*$', '', text, flags=re.MULTILINE)
text = text.strip().rstrip(';')
text = re.sub(r',(\s*[}\]])', r'\1', text)
text = re.sub(r'([{\[,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:', r'\1"\2":', text)
data = json.loads(text)

portals = data['openDataPortals']
n = len(portals)

count_no_meta = sum(
    not (
        p.get('dcat', {}).get('available')
        or p.get('sparql', {}).get('available')
        or p.get('graphql', {}).get('available')
    )
    for p in portals
)
A = count_no_meta / n * 100

datasets = [p.get('datasetsCount') or 0 for p in portals]
B = sum(datasets) / n

cats = [p.get('categoriesCount') or 0 for p in portals]
C = sum(cats) / n

D = min(datasets)
E = max(datasets)
F = min(cats)
G = max(cats)

license_strings = [p.get('license') or '' for p in portals]
keywords = ('nicht angegeben', 'nicht genannt', 'nicht spezifiziert')
count_no_license = sum(
    1
    for lic in license_strings
    if lic.lower().startswith(keywords)
)
H = count_no_license / n * 100

distinct_licenses = set(
    lic for lic in license_strings if lic and not lic.lower().startswith(keywords)
)
I = len(distinct_licenses)

count_custom = sum(
    1
    for p in portals
    if isinstance(p.get('portalSoftware'), str) and p['portalSoftware'].startswith('Custom ')
)
J = count_custom / n * 100

print(f'% portals without any of DCAT, SPARQL or GraphQL exchange layers = {A}%')
print(f'average number of datasets per portal = {B}')
print(f'average number of categories per portal = {C}')
print(f'minimum number of datasets across all portals = {D}')
print(f'maximum number of datasets across all portals = {E}')
print(f'minimum number of categories across all portals = {F}')
print(f'maximum number of categories across all portals = {G}')
print(f'% portals not specifying any license (e.g. “nicht angegeben”, “nicht genannt”, “nicht spezifiziert”) = {H}%')
print(f'count of distinct license strings (excluding the above “not specified” cases) = {I}')
print(f'% portals running pure custom APIs/endpoints (portalSoftware strings beginning with “Custom …”) = {J}%')
