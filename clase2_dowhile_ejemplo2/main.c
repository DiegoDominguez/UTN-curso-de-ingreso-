#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i,j;
    do
    {
    printf("Ingrese el primer operando:");
    scanf("%d",&i);
    printf("Ingrese el segundo operando:");
    scanf("%d",&j);
    } while (i<j);
    return 0;
}
