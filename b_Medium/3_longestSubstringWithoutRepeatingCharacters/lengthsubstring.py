class Solution: # My previous solution that didn't capture the problem's intended function
    def lengthOfLongestSubstring(self, s: str) -> int:
        subs = []
        chars = []
        li = []
        di = {}
        siz = 0
        
        for c in s:
            chars.append(c)
            di[c] = 0
        
        for c in chars:
            di[c] += 1
            
        for c in chars:
            if di[c] == 1:
                subs.append(c)
            else:
                li.append("".join(subs))
                subs = []
        
        for i in li:
            if len(i) > siz:
                siz = len(i)
        
        return siz