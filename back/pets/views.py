from django.db.models import F
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.mixins import ModerationStatus

from .models import Pet
from .serializers import PetDetailSerializer, PetListSerializer


class PetListView(generics.ListAPIView):
    queryset = Pet.objects.filter(status=ModerationStatus.APPROVED)
    serializer_class = PetListSerializer


class PetDetailView(generics.RetrieveAPIView):
    queryset = Pet.objects.filter(status=ModerationStatus.APPROVED)
    serializer_class = PetDetailSerializer


class PetViewCountView(APIView):
    def post(self, request, pk):
        updated = Pet.objects.filter(pk=pk, status=ModerationStatus.APPROVED).update(views=F('views') + 1)
        if not updated:
            return Response(status=404)
        return Response(status=204)
