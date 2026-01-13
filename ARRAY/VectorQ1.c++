// find last occurence of x in the array;
#include<iostream>
#include<vector>

using namespace std;
int lastoccur(vector<int>&v,int target){
    int index=-1;
 for(int i=v.size()-1;i>=0;i--){
    if(v[i]==target){
        index=i;
        break;
    }
 }
 return index;
}
int main()
{
    vector<int>v;
    cout<<"Enter 5 Array Element:";
    for(int i =0;i<5;i++){
        int x;
        cin>>x;
        v.push_back(x);
    }
    int x;
    cout<<"Enter target:";
    cin>>x;
    cout<<"Last occurennce of "<<x<<" = "<<lastoccur(v,x);

}
