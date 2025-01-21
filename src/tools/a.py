import random

def rand(mix,max):
    # for i in range(a):
    #     print(random.randint(3,20))
    return random.randint(mix,max)
    

def a():
    with open("ae.csv","r",encoding="utf-8")as f:
        date = f.readlines()
    # print(date)
    for i in date:
        # print(i)
        print('"'+ i.replace('\n','') +'":{\n    "end_pos":[343,234],\n    "commit":'+ str(rand(3,20)) +'\n},')

a()
