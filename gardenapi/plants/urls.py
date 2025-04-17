from django.urls import path
from .views import PlantListCreate
from .views import PlantDelete

urlpatterns = [
     path('plants/', PlantListCreate.as_view(), name='plant-list'),
     path('plants/<int:id>/', PlantDelete.as_view(), name='plant-delete')
]
