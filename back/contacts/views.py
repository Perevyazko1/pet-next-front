from rest_framework import generics

from .models import VisitRequest
from .serializers import VisitRequestSerializer


class VisitRequestCreateView(generics.CreateAPIView):
    queryset = VisitRequest.objects.all()
    serializer_class = VisitRequestSerializer
