# Leetcode 2. Add Two Numbers
# You are given two non-empty linked lists representing two non-negative integers. 
# The digits are stored in reverse order, and each of their nodes contains a 
# single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the 
# number 0 itself.

class ListNode(): # given in the problem
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next


def make_list_from_ListNode(ln):
    list1 = []
    while ln: # is not None
        list1.append(ln.val)
        ln = ln.next
    
    return list1


def make_ListNode_from_list(l1):
    head = l3 = ListNode(l1[0])
    for i in l1[1:]:
        l3.next = l3 = ListNode(i)

    return head


def addTwo(ln1, ln2): # This is using the unknown-to-me ListNode class
    l1 = make_list_from_ListNode(ln1)
    l2 = make_list_from_ListNode(ln2)

    num1 = 0
    for i in range(len(l1)):
        num1 += (l1[i] * (10**i))
    
    num2 = 0
    for i in range(len(l2)):
        num2 += (l2[i] * (10**i))
    
    val = list(str(num1 + num2))
    val.reverse()

    l = []
    for i in val:
        l.append(int(i))
    
    ln = make_ListNode_from_list(l)
    
    return ln