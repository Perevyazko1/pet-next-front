from rest_framework import serializers

from .models import ShelterApplication, VisitRequest


class VisitRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitRequest
        fields = ['id', 'name', 'phone', 'email', 'message', 'shelter', 'created_at']
        read_only_fields = ['id', 'created_at']


class ShelterApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShelterApplication
        fields = [
            'id', 'contact_name', 'phone', 'email',
            'city', 'address', 'website', 'comment', 'created_at',
        ]
        read_only_fields = ['id', 'created_at']
