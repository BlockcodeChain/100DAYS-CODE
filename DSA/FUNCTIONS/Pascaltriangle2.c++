// nth row element in pascal triangle 
// n=4 1 3 3 1
#include<iostream>
using namespace std;
 int main()
 {
    int n;
    cin>>n;
    long long ans=1;
    cout<<ans<<" ";
    for(int col=1;col<n;col++){
      ans=ans*(n-col)/col;
      cout<<ans<<" ";
    }
    
 }