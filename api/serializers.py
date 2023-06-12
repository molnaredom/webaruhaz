from rest_framework.serializers import ModelSerializer
from .models import *


class ProductsSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartItemsSerializer(ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'
