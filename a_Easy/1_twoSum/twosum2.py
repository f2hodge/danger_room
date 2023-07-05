"""This is the solution I used on the site"""


class Solution:
    def twoSum(self, nums: list[int], target: int):
        if len(nums) < 2:
            return
        elif nums[0] + nums[1] == target:
            return [0, 1]

        c = 0
        while c < len(nums):
            d = c + 1

            while d < len(nums):
                if nums[c] + nums[d] == target:
                    return [c, d]
                else:
                    d += 1

            c += 1
