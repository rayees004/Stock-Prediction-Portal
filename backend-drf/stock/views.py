from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Stock
from .serializers import StockSeralizer
from rest_framework.permissions import IsAuthenticated

class StockViewSet(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    queryset = Stock.objects.all().order_by("-created_at")
    serializer_class = StockSeralizer

