// basic of vector
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main()
{
    vector<int>array;
    array.push_back(40); 
    array.push_back(14);
    array.push_back(24);
    array.push_back(12);
    array.push_back(3);
    cout<<endl;
    for(int i=0;i<array.size();i++){
        cout<<array[i]<<" ";
        
    }
    cout<<endl;
    array.pop_back();
     for(int i=0;i<array.size();i++){
        cout<<array[i]<<" ";
        
    }
    cout<<endl;
    sort(array.begin(),array.end());
      cout<<endl;
        for(int i=0;i<array.size();i++){
        cout<<array[i]<<" ";
        
    }
    cout<<endl;
    cout<<array.at(2)<<endl;
    
}