def lensubs(s): # Another algorithmic test file
    subs = set()
    chars = []
    count = 0

    
    for c in range(len(s)):
        for i in s[c:]:
            count += 1
            if i not in chars:
                chars.append(i)

                if count == len(s[c:]):
                    q = "".join(chars)
                    subs.add(q)
                    
            else:
                subs.add("".join(chars))
                chars = []
                chars.append(i)
        chars = []
        count = 0

    return subs