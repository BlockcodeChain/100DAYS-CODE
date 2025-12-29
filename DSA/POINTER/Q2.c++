#include<iostream>
using namespace std;
int main(){
    int x=8,y=3;
    int *p1=&x;
    int *p2=&y;
    cout<<"Address x and y: "<<p1<<endl<<p2;
    cout<<"\nValue x and y"<<endl<<*p1<<endl<<*p2;
    // taking input 
    *p1=10;
    *p2=30;
    cout<<endl;
    cout<<*p1+*p2;

}