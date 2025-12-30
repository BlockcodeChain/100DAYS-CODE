// prime number
#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter a number:";
    cin>>num;
    if(num<2){
        return 0;
    }
    for(int i=2;i<num;i++){
        if(num%i==0){
            cout<<"Not a prime number";
        }
        else cout<<"Prime number";
        break;
    }
}