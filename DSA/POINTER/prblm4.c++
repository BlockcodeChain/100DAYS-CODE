// wafn to find out first and last digit of number without returning anything
#include<iostream>
using namespace std;
void firstlast(int n){
    int d=n%10;
    while(n>9){
     
     int ld=n%10;
     n/=10;
    }
    cout<<"last digit"<<d<<endl;
    cout<<"first digit"<<n;

}
int main(){
    int num;
    cout<<"Enter number:";
    cin>>num;
    firstlast(num);

}