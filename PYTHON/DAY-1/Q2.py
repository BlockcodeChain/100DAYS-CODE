# take input of age and on the basis of age print eligible ot not 
age=int(input("Enter your age"))
if(age>18):
    test=input("Pass for Driving License Y or N :")
    if(test=='Y'or test=='YES'):
        print("your are eligible")
    else:  
     print("your fail in driving test NOT eligible")

else:  print("your are not eligible")