# from cgi import print_arguments
import json
import requests
from django.shortcuts import render
from django.http import JsonResponse
# import os
# Create your views here.


def getRoutes(requests):
    return JsonResponse('Hello', safe=False)


# def getWeather(request):
#     city = request.GET.get('city', 'London')
#     api_key = '19c9b00e2a4e240f832b0b0746b63f20'
#     url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
#     response = requests.get(url)
#     data = response.json()
#     return JsonResponse(data)


# import requests
# from django.http import JsonResponse

# def your_view(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         lat = data.get('lat')
#         lon = data.get('lon')
#         print_arguments(data)
#         api_key = '19c9b00e2a4e240f832b0b0746b63f20'
#     # use the data to make a request to the OpenWeather API
#         response = requests.get(
#             f'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&appid={api_key}/')
#         weather_data = response.json()
#     # return the weather data as a JSON response
#     return JsonResponse(weather_data)


#    http://localhost:8000/weather/?lat=40.712776&lon=-74.005974

def get_weather(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    api_key = '9c5321d1c0310fe2a5a617de99c3bd71'

    print(f'lat: {lat}, lon: {lon}')
    url = f'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric'
    response = requests.get(url)
    # print(f'response: ', response)
    data = response.json()

    # print(f'data: ', data)

    return JsonResponse(data)
