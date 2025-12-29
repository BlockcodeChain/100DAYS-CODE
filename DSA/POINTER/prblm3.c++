#include<iostream>
using namespace std;
int main(){
    int x=4;
    int *ptr=&x;
    cout<<*ptr;
        //  *ptr=*ptr+1 ;
        (*ptr)++;
     cout<<endl<<*ptr ;   //5
    cout<<endl<<ptr<<endl;
    ptr=ptr+1;
    cout<<endl<<*ptr<<endl;  
    // yeh joh number aa rha hai isme 
    // ptr ka address mai +4 kregge wha pe toh kuch ahi nhi toh garbage ho gya woh toh 


    // lekin agr

}