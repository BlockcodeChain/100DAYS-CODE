#include<iostream>
using namespace std;
class book{
   public:
    string name;
    float prize;
    int pages;
   int countbooks(int p){
    if(prize<p) return 1;
    return 0;
   }
   bool bookpresent(string bookname){
    if(bookname==name) return true;
    return false;
   }
    
};
int main(){
book harryPotter;
harryPotter.name="Gold";
harryPotter.prize=1000.90;
harryPotter.pages=600;
cout<<harryPotter.bookpresent("Gold")<<endl;
cout<<harryPotter.countbooks(900);
}