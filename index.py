transaction_ids = [4, 7, 4, 2, 7, 4]

def removeDuplicates(arr):
    seen = set()
    times = dict()
    for n in arr:
        if n in seen:
            if n in times: 
                times[n] = [times.get(n) + 1]
                return
            times[n] = 1
        seen.add(n)
    return times

print(removeDuplicates(transaction_ids))