from django.contrib import admin

# Register your models here.

from .models import *


admin.site.register(Note)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(CartItem)
admin.site.register(Cart)
