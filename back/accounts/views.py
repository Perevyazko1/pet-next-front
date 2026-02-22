from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Shelter
from .serializers import ShelterSerializer


class ShelterListView(generics.ListAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer
    permission_classes = [AllowAny]
