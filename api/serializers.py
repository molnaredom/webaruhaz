from rest_framework.serializers import ModelSerializer
from .models import *


class ProductsSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
