from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class PermitedView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        response = {
            "status": "permition class working success"
        }
        return Response(response)