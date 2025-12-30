// largest of 3 number using ternary operators
#include<iostream>
using namespace std;
 int main()
 {
    int a,b,c;
    cout<<"Enter three numbers:";
    cin>>a>>b>>c;
   if(a>b){

         (a>c)?cout<<a<<" is largest":cout<<c<<" is largest";
    }
    else{
         (b>c)?cout<<b<<" is largest":cout<<c<<" is largest";
   }
    }