from django.http.request import HttpHeaders
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def main(request):
    return HttpResponse("<H1>Hello</H1>")
