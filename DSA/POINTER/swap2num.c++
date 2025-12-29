#include<iostream>
using namespace std;
void swap(int &x,int &y){
    int temp=x;
    x=y;
    y=temp;
    cout<<"x:"<<x<<endl;
    cout<<"y:"<<y<<endl;

}
// or
void swapnum(int *a,int *b){
    int temp=*a;
    *a=*b;
    *b=temp;
    cout<<"\na:"<<a<<endl;  //address
    cout<<"b:"<<b<<endl;   //address
   cout<<"\na:"<<*a<<endl;  //value
    cout<<"b:"<<*b<<endl;   //value
}
int main(){
   int x=8,y=4;
//    swap(x,y);
   cout<<" pointer";
   swapnum(&x,&y);
   cout<<x<<y;
}
