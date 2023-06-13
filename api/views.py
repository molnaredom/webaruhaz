from rest_framework.decorators import api_view
from .utils import *


@api_view(['GET'])
def getProducts(request):

    if request.method == 'GET':
        return getProductsList(request)


@api_view(['GET'])
def getCategories(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def getCart(request):

    if request.method == 'GET':
        return getCartItemList(request)
