// fibonnaci number
#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter a number:";
    cin>>num;
  int num1=0,num2=1,num3;
    for(int i=1;i<=num;i++){
    cout<<num1<< " ";
    num3=num2+num1;
    num1=num2;
    num2=num3;
  }
}
