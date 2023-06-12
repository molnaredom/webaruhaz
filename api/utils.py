from rest_framework.response import Response
from .models import *
from .serializers import *


def getProductsList(request):
    products = CartItem.objects.filter()#.order_by('-name')
    serializer = CartItemsSerializer(products, many=True)
    print(serializer.data)
    return Response(serializer.data)


def getCartItemList(request):
    cart = Cart.objects.get(user=request.user)
    print(cart)
    cartitems = CartItem.objects.filter(cart=cart)
    print(cartitems)
    serializer = CartItemsSerializer(cartitems, many=True)
    print(serializer.data)
    print("--"*20)
    return Response(serializer.data)


def createNote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = ProductsSerializer(note, many=False)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = ProductsSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')
