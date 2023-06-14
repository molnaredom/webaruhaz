from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', views.getProducts, name="products"),
    path('cart/', views.getCart, name="cart"),
    path('categories/', views.getCategories, name="categories"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
