#include<iostream>
using namespace std;
void address(int x,int y){
    cout<<endl<<&x<<endl;
     cout<<&y<<endl;
}
int main()
{
    int x;
    int y;
    cout<<&x<<endl;
     cout<<&y<<endl;
     cout<<"FUNCTION ADDRESS";
     address(x ,y);
}