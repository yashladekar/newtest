from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    # path('weather/', views.getWeather, name="weather"),
    path('weather/', views.get_weather, name="get_weather"),
]
