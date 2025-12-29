// wafn to find out first and last digit of number without returning anything
#include<iostream>
using namespace std;
void firstlast(int n,int *ptr1,int *ptr2){
     *ptr2=n%10;
    while(n>9){
     
   
     n/=10;
    }
    *ptr1=n;
    cout<<"last digit"<<*ptr2<<endl;
    cout<<"first digit"<<*ptr1;

}
int main(){
    int num;
    int first,last;
    cout<<"Enter number:";
    cin>>num;
    int *ptr1=&first;
    int *ptr2=&last;
    firstlast(num,ptr1,ptr2);

}


// first → value

// &first → address

// ptr1 → address of first

// &ptr1 → address of pointer