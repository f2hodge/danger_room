def lenSub(s):
    if len(s) < 1:
        return 0
    
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
    
    siz = list({len(i) for i in subs})
    siz.sort()
    siz.reverse()
    
    return siz[0]