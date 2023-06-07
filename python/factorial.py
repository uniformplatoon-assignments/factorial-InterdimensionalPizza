def factorial(num):
    if num == 0:
        return 1
    elif num < 0:
        return False
    else:
        my_num=num
        answer=1
        while my_num>0:
            answer=answer*my_num
            my_num-=1
        # print(answer)
        return answer
