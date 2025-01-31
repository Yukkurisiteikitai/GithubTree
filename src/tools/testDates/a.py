import random

def rand(mix,max):
    # for i in range(a):
    #     print(random.randint(3,20))
    return random.randint(mix,max)
    

def a():
    with open("ae.csv","r",encoding="utf-8")as f:
        date = f.readlines()
    # print(date)
    tekitou = 0
    for i in date:
        # print(i)
        # print('{"titile":"'+ i.replace('\n','') +',"end_pos":[343,234],"commit:'+ str(rand(3,20)) + ',"pullID":'+ str(rand(0,len(date))) +'},')
        # print(f'{"title":"{i.replace('\n','')}"}')
        # print('"'+ i.replace('\n','') +'":{\n    "end_pos":[343,234],\n    "commit":'+ str(rand(3,20)) + ',\n    "pullID":' + str(rand(0,len(date))) +'\n},')
        """
  
1:{
    "title":bugfix: updated tutorial002_py310.py for tax=0 situation,
    "end_pos":[343,234],
    "commit":8,
    "pullID":15
},
        """
        print(str(tekitou) +':{\n    "title":"'+ i.replace('\n','') +'",\n    "next_pos":[343,234],\n    "commit":'+ str(rand(3,20)) + ',\n    "pullID":' + str(rand(0,len(date))) +'\n},')
        tekitou+=1

temp = ""
def ce(path:str,count:int,lend:int):
    with open(path,"r",encoding="utf-8")as f:
        date = f.readlines()
    
    for i in range(count):
        temp = ""
        for add in range(lend):
            temp += "+ " + date[random.randint(0,len(date)-1)].replace('\n','')
        print(temp)

    
    
a()
# ce(path="b.csv",count=34,lend=3)
