// wap to copy the content of one array into another in reverse order
#include<iostream>
#include<vector>
using namespace std;
void  rev(vector<int>&v){
    int size=v.size();
    int start=0,end=size-1;
    while(start<end){
        swap(v[start],v[end]);
        start++;
        end--;
    }
}
int main(){
    vector<int>v;
     cout<<"Enter 5 Array Element:";
    for(int i =0;i<5;i++){
        int x;
        cin>>x;
        v.push_back(x);
    }
    rev(v);
    for(int i=0;i<v.size();i++){
        cout<<v[i]<<" ";
    }
   
}