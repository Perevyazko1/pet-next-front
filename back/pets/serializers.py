from rest_framework import serializers

from .models import Pet


class PetListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ['id', 'title', 'description', 'image', 'alt_image', 'shelter_since', 'views', 'created_at']


class PetDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ['id', 'title', 'description', 'image', 'alt_image', 'shelter_since', 'views', 'created_at']
