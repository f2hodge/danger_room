class Solution:
    def isPalindrome(self, x: int):
        y = str(x)
        a = list(y[:int(len(y)/2)])
        b = list((y[int(len(y)/2):])[::-1])

        if len(y) % 2 != 0:
            b.pop()

        return a == b
