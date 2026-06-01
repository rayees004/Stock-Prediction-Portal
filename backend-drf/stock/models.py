from django.db import models

# Create your models here.
class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    stock_api_url = models.URLField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.stock_name