// finding factor of number
#include<iostream>
#include<math.h>
using namespace std;
void printfactor(int n){
    for(int i=1;i<sqrt(n);i++){
        if(n%i==0){
            cout<<i<<" ";
            // if(i!=sqrt(n)){
            //     cout<<n/i<<" ";
            // }
        }
    } 
    for(int i=sqrt(n);i>=1;i--){
        if(n%i==0) cout<<n/i<<" ";
    }
    
}
int main()
{
    printfactor(60);
}