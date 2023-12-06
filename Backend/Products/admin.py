from django.contrib import admin
from Products.models import Product, Stock, Category,  Purchase

admin.site.register(Product)

admin.site.register(Stock)

admin.site.register(Category)
admin.site.register(Purchase)

# Register your models here.
