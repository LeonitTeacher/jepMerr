from Products.models import Product, Stock, Category, Purchase, User
from rest_framework.views import APIView
from Products.api.serializers import ProductSerializer, CategorySerializer, StockSerializer, PurchaseSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins, generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser

class addProductsView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

class AdminProductDetailsView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    def put(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
    def delete(self, request, pk):
        product = Product.objects.get(pk=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class allProductsView(APIView):
    def get(self, request):
        product = Product.objects.all()
        serialzer = ProductSerializer(product, many=True)
        return Response(serialzer.data)

    
class ProductDetailsView(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    

class addCategoryView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class allCategoryView(APIView):
    parser_classes = (MultiPartParser, FormParser,)
    def get(self, request):
        product = Category.objects.all()
        serializer = CategorySerializer(product, many=True)
        return Response(serializer.data)

        
class CategoryDetailsView(APIView):
    def get(self, request, pk):
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    

class AdminCategoryDetailsView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    def put(self, request, pk):
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
    def delete(self, request, pk):
        category = Category.objects.get(pk=pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class allStockView(APIView):
    def get(self, request):
        stock = Stock.objects.all()
        serializer = StockSerializer(stock, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
class StockDetailsView(APIView):
    def get(self, request, pk):
        stock = Stock.objects.get(pk=pk)
        serializer = StockSerializer(stock)
        return Response(serializer.data)
    
    def put(self, request, pk):
        stock = Stock.objects.get(pk=pk)
        serializer = StockSerializer(stock, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
    def delete(self, request, pk):
        stock = Stock.objects.get(pk=pk)
        stock.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PurchaseView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = PurchaseSerializer(data=request.data)
        if serializer.is_valid():
            # Here, you might want to check if the product is in stock
            # and handle the purchase logic accordingly, reducing the stock.
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        purchases = Purchase.objects.all()
        serializer = PurchaseSerializer(purchases, many=True)
        return Response(serializer.data)
