from django.shortcuts import render

# Create your views here.
from rest_framework import generics,status
from .models import Stock
from .serializers import StockSeralizer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .stock_prediction import predicted_stock
from rest_framework.response import Response

class StockViewSet(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    queryset = Stock.objects.all().order_by("-created_at")
    serializer_class = StockSeralizer

class StockPredictionViewSet(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request,pk):
        stock = Stock.objects.get(pk=pk)
        data = predicted_stock(stock.stock_api_url)
        data['stock'] = stock.stock_name
        return Response(data,status=status.HTTP_200_OK)