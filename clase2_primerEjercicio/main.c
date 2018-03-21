#include <stdio.h>
#include <stdlib.h>

int main()
{
int i;
int suma=0;
int contador;

    for(i=1;i<=100;i++){
    suma=suma+i;
    }
contador = (((i-1)*(i))/2);


    printf("La suma es: %d", suma);
    printf(" Contador: %d", contador);

    return 0;
}
