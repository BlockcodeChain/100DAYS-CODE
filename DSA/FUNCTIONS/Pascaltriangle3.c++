// given r and n tell element at that place 
// n=5 r=3
#include<iostream>
using namespace std;
 int main()
 {
    int n,r;
  cin>>n>>r;
    long long ans=1;
   
  for(int i=0;i<r;i++){
    ans=ans*(n-i)/(i+1);
   
  }
     cout<<ans<<" ";
    
 }