from django.urls import path
from account import views as UserView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from stock import views as StockView

urlpatterns = [
    path("register/",UserView.RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('permited_access/',UserView.PermitedView.as_view()),
    path('stock/',StockView.StockViewSet.as_view()),
]
