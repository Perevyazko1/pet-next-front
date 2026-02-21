from django.db.models import F
from rest_framework import generics

from .models import Pet
from .serializers import PetDetailSerializer, PetListSerializer


class PetListView(generics.ListAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetListSerializer


class PetDetailView(generics.RetrieveAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetDetailSerializer

    def retrieve(self, request, *args, **kwargs):
        Pet.objects.filter(pk=self.kwargs['pk']).update(views=F('views') + 1)
        return super().retrieve(request, *args, **kwargs)
