// basic of vector
#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int>array;
    array.push_back(4);
    cout<<"SIZE:"<<array.size()<<endl;
    cout<<endl<<"CAPACITY:"<<array.capacity()<<endl;
    array.push_back(14);
    cout<<"SIZE:"<<array.size()<<endl;
    cout<<endl<<"CAPACITY:"<<array.capacity()<<endl;
    array.push_back(24);
    cout<<"SIZE:"<<array.size()<<endl;
    cout<<endl<<"CAPACITY:"<<array.capacity()<<endl;
    array.push_back(42);
    cout<<"SIZE:"<<array.size()<<endl;
    cout<<endl<<"CAPACITY:"<<array.capacity()<<endl;
    array.push_back(43);
    cout<<"SIZE:"<<array.size()<<endl;
    cout<<endl<<"CAPACITY:"<<array.capacity()<<endl;
    cout<<endl;
    for(int i=0;i<array.size();i++){
        cout<<array[i]<<" ";
        
    }
}