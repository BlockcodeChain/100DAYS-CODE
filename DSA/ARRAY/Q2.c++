// second largest element in the array
#include<iostream>

#include<climits>
using namespace std;
int main()
{
    int array[]={1,9,100,3,19,105};
    int size=sizeof(array)/sizeof(array[0]);
    // int max=array[0];
    int max=INT_MIN;
    int second=0;
    for(int i=0;i<size;i++){
       if(max<array[i]){
         second=max;
        max=array[i];
       
       }

    }
    cout<<max<<endl;
    cout<<"Second maximum element: "<<second;
}