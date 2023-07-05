def compsubs(s): # The first test of algorithms parsing out substrings
    subs = set()
    chars = []

    for i in s:
        if i not in chars:
            chars.append(i)
        elif i in chars:
            chars = chars[(chars.index(i) + 1):]
            chars.append(i)
        else:
            chars = chars[1:]
            chars.append(i)

        q = "".join(chars)
        subs.add(q)

    return subs

def longsub(s): # Algorithm to return longest substring
    subs = compsubs(s)
    siz = list({len(i) for i in subs})
    siz.sort()

    return siz[-1]