// WAP TO find the largest element of a given 2D array of integers
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
    int max=arr[0][0];
   
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
          if(max<arr[i][j]){
            max=arr[i][j];
          }
        
        }
      
    }
      cout<<"Maximum Element: "<<max;
}