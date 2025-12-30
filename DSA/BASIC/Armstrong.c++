// armstrong number 
// 153 407 371 370 

#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter a number:";
    cin>>num;
    int n=num;
    int sum=0;
    while(num>0){
        int digit=num%10;
        num/=10;
        sum+=digit*digit*digit;
    }
    if(sum==n){
        cout<<n<<" is armstrong number";
    }
    else{
        cout<<n<<" is not armstrong number";
    }
}
