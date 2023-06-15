from requests import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from .models import *
from rest_framework.response import Response


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getProducts(request):
    category_id = request.GET.get('category')

    if category_id:
        products = Product.objects.filter(category_id=category_id)
    else:
        products = Product.objects.all()

    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_to_cart(request):
    """
    Example:
    {
        "cart": 1,
        "product": 1,
        "quantity": 2
    }
    """
    serializer = CartItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def getCategories(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def getCart(request):
    cart = Cart.objects.get(user=request.data["user"])
    cartitems = CartItem.objects.filter(cart=cart)
    serializer = CartItemSerializerWithProductDetails(cartitems, many=True)
    return Response(serializer.data)
