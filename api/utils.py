from rest_framework.response import Response
from .serializers import *


def getProductsList(request):
    category_id = request.GET.get('category')

    if category_id:
        products = Product.objects.filter(category_id=category_id)
    else:
        products = Product.objects.all()

    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)


