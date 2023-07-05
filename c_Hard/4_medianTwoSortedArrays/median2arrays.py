def median2arrays(nums1, nums2):
    nums3 = nums1 + nums2
    nums3.sort()
    total = len(nums3)
    median = 0

    if total % 2 != 0:
        median = float(nums3[int(total / 2)])
    else:
        mid1 = nums3[int(total / 2)]
        mid2 = nums3[int(total / 2) +1]
        median = float((mid1 + mid2) / 2)

    return median