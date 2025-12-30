// pallindrome number
#include<iostream>
using namespace std;
int main(){
   int num;
    cout<<"Enter a number:";
    cin>>num;
    int n=num;
    int rev=0;
    while(num>0){
        int digit=num%10;
        rev=rev*10+digit;
        num/=10;

    }
    if(rev==n){
        cout<<n<<" is pallindrome";
    }
    else{
        cout<<n<<" is not pallindrome";
    }
}
