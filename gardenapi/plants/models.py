from django.db import models

class Plant(models.Model):
    plant_name = models.CharField(max_length=100)
    image = models.URLField(blank=True)
    care = models.TextField(blank=True)

def __str__(self):
    return self.plant_name

