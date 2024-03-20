#include <stdio.h>
int main (void){
int R, G, B;

printf("Informe um Valor para R\n");
scanf("%d", &R);
if(R != 0 || R != 1){
    printf("Value invalid");
}
printf("Informe um Valor para G\n");
scanf("%d", &G);
if(G != 0 || G != 1){
    printf("Value invalid");
}
printf("Informe um Valor para B\n");
scanf("%d", &B);
if(B!= 0 || B != 1){
    printf("Value invalid");
}

return 0; 
}