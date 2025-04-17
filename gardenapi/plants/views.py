from django.shortcuts import render
from rest_framework import generics
from.models import Plant
from.serializers import PlantSerializer

class PlantListCreate(generics.ListCreateAPIView):
    queryset = Plant.objects.all()
    serializer_class = PlantSerializer
    
    

# Create your views here.
class PlantDelete(generics.DestroyAPIView):
    queryset = Plant.objects.all()
    serializer_class = PlantSerializer
    lookup_field = 'id'