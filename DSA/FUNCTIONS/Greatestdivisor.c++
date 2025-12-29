// write a fn to computer the greatest common divisor of two given number
#include<iostream>
#include<math.h>

using namespace std;
int gcd(int x,int y){
    int hcf=1;
    // for(int i=1;i<=min(x,y);i++){
    // reverse loop chlane se benefit joh phle milegga woh highest hoga no mre extra traversing
    for(int i=min(x,y);i>0;i--){
 if(x%i==0 && y%i==0){
   hcf=i;
   break;
 }

    }
 return hcf;
}
int main()
{
    int x,y;
    cout<<"enter x and y:";
    cin>>x>>y;
    cout<<gcd(x,y);
}