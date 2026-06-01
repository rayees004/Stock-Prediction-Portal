from rest_framework import serializers
from .models import Stock

class StockSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['stock_name','stock_api_url']