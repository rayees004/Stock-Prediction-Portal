from django.urls import path
from account import views as UserView

urlpatterns = [
    path("register/",UserView.RegisterView.as_view())
]
