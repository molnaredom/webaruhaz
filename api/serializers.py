from rest_framework.serializers import ModelSerializer, StringRelatedField
from .models import *


class ProductsSerializer(ModelSerializer):
    category = StringRelatedField(source='category.name')
    class Meta:
        model = Product
        fields = '__all__'


class CartItemsSerializer(ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'
