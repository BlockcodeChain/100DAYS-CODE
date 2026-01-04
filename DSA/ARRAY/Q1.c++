// find the maximum value out of all elemnt in array
#include<iostream>
#include<math.h>
#include<climits>
using namespace std;
int main()
{
    int array[]={1,9,100,3,19,105};
    int size=sizeof(array)/sizeof(array[0]);
    // int max=array[0];
    int max=INT_MIN;
    for(int i=0;i<size;i++){
       if(max<array[i]){
        max=array[i];
       }

    }
    cout<<max;
}