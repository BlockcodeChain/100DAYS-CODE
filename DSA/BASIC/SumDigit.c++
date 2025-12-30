// sum of digit
#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter a number:";
    cin>>num;
    int n=num;
   int  sum=0;
   while(num>0){
        int digit=num%10;
        sum+=digit;
    num/=10;
   }
   cout<<"Sum of "<<n<<" is "<<sum;
}