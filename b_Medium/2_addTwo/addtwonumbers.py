# Leetcode 2. Add Two Numbers
# You are given two non-empty linked lists representing two non-negative integers. 
# The digits are stored in reverse order, and each of their nodes contains a 
# single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the 
# number 0 itself.

def addTwo(l1, l2):
    l = []
    num1 = 0
    num2 = 0
    for i in range(len(l1)):
        num1 += (l1[i] * (10**i))
    
    for i in range(len(l2)):
        num2 += (l2[i] * (10**i))
    
    val = list(str(num1 + num2))
    val.reverse()

    for i in val:
        l.append(int(i))
    
    return l