// WAP TO find the smallest element of a given 2D array of integers
#include<iostream>
#include<climits>
using namespace std;
int main(){
    int m,n;
    cout<<"Enter Row and Column:" ;
    cin>>m>>n;
    int arr[m][n];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    cout<<"RESULT \n";
    int min=INT_MAX;
   
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
          if(min>arr[i][j]){
            min=arr[i][j];
          }
        
        }
      
    }
      cout<<"Maximum Element: "<<min;
}