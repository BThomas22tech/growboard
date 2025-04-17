from rest_framework import serializers
from .models import Plant
from rest_framework.response import Response

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model =Plant
        fields = '__all__'
        
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        print("🚨 Serializer Errors:", serializer.errors)
        return Response(serializer.errors, status=400)