import random

def rand(mix,max):
    # for i in range(a):
    #     print(random.randint(3,20))
    return random.randint(mix,max)
    

def a():
    with open("a.csv","r",encoding="utf-8")as f:
        date = f.readlines()
    # print(date)
    for i in date:
        # print(i)
        print('{"titile":"'+ i.replace('\n','') +',"end_pos":[343,234],"commit:'+ str(rand(3,20)) +'},')
        # print(f'{"title":"{i.replace('\n','')}"}')
        # print('"'+ i.replace('\n','') +'":{\n    "end_pos":[343,234],\n    "commit":'+ str(rand(3,20)) +'\n},')

temp = ""
def ce(path:str,count:int,lend:int):
    with open(path,"r",encoding="utf-8")as f:
        date = f.readlines()
    
    for i in range(count):
        temp = ""
        for add in range(lend):
            temp += "+ " + date[random.randint(0,len(date)-1)].replace('\n','')
        print(temp)

    
    

ce(path="b.csv",count=34,lend=3)
