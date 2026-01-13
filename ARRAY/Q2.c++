// ANOTHER way of printing an array
#include<iostream>
using namespace std;

 int main(){
    int array[]={1,2,3,4,5,6,7,8};
    int *p=array;
    for(int i=0;i<8;i++){
        cout<<*p<<" ";
        p++;
    }
    cout<<endl;
    p=array;
    *p=18;
    p++;
    *p=20;
    p--;
    for(int i=0;i<8;i++){
        cout<<*p<<" ";
        p++;
    }
 }