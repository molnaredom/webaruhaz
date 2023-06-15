from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('products/', views.getProducts, name="products"),
    path('cart/', views.getCart, name="cart"),
    path('add-to-cart/', views.add_to_cart, name='add-to-cart'),
    path('categories/', views.getCategories, name="categories"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
