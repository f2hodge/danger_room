"""This is a function that adds two numbers from a list to hit a target
"""

def twoSum(nums: list[int], target: int):
    if len(nums) < 2:
        print("Invalid: initial if length check")
        return [None, None]
    elif nums[0] + nums[1] == target:
        print("Hit the target: initial elif first two indexes work")
        return [0, 1]
    
    ans = [nums[0], nums[1]]
    print(f"Initial assignment ans = [nums[0],nums[1]] {ans}")
    c = 0
    # d = 1
    # print("Initial assignment c = 0 d = 1")
    print("Initial assignment c = 0")
    
    print("Starting c-loop")
    while c < len(nums):
        d = c + 1
        print(f"(c-loop) c = {c} Assign d one more than c: d = {d}")

        # print(f"Checking if c:{c} == d:{d}")
        # if c == d:
        #     print("c was equal to d (c-loop execution) increment c and continue loop")
        #     c += 1
        #     continue
        # else:
        print(f"Starting d-loop")
        while d < len(nums):
            if nums[c] + nums[d] == target:
                print(f"(d-loop) checking nums[c] + nums[d] against target success: c = {c} d = {d} target = {target}")
                print(f"(d-loop) Assign ans[0, 1] to {nums[c]},{nums[d]}")
                ans[0], ans[1] = nums[c], nums[d]
                print(ans)
                return [c, d]
            else:
                print(f"(d-loop) nums[{c}]:{nums[c]} + nums[{d}]:{nums[d]} didn't equal {target}")
                d += 1
                print(f"(d-loop) Increment d to {d}")
        
        print(f"(c-loop) d-loop @ c = {c} completed for length of list and d = {d}")
        print(f"(c-loop) c = {c} Increment c and loop again")
        c += 1