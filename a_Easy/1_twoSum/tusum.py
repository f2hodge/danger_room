class TuSum(object):
    def tuSum(self, nums, target):
        """
        :type nums: list[int]
        :type target: int
        :rtype: list[int]
        """
        required = {}
        for i in enumerate(nums):
            if target - nums[i] in required:
                return [required[target - nums[i]], i]
            else:
                required[nums[i]] = i