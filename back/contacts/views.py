from rest_framework import generics

from .models import ShelterApplication, VisitRequest
from .serializers import ShelterApplicationSerializer, VisitRequestSerializer


class VisitRequestCreateView(generics.CreateAPIView):
    queryset = VisitRequest.objects.all()
    serializer_class = VisitRequestSerializer


class ShelterApplicationCreateView(generics.CreateAPIView):
    queryset = ShelterApplication.objects.all()
    serializer_class = ShelterApplicationSerializer
