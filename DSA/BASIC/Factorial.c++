// factorial and sum of number
#include<iostream>
using namespace std;
int main(){
    int num;
    cout<<"Enter a number:";
    cin>>num;
    int fact=1;
    int sum=0;
    for(int i=1;i<=num;i++){
        fact*=i;
        sum+=fact;
        cout<<fact<<" ";
    }
    cout<<endl;
    cout<<"Factorial of "<<num<<" is "<<fact;
    cout<<endl<<"Sum of factorial "<<sum;
}