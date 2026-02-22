from django.db.models import F
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.mixins import ModerationStatus

from .models import News
from .serializers import NewsDetailSerializer, NewsListSerializer


class NewsListView(generics.ListAPIView):
    queryset = News.objects.filter(status=ModerationStatus.APPROVED)
    serializer_class = NewsListSerializer


class NewsDetailView(generics.RetrieveAPIView):
    queryset = News.objects.filter(status=ModerationStatus.APPROVED)
    serializer_class = NewsDetailSerializer


class NewsViewCountView(APIView):
    def post(self, request, pk):
        updated = News.objects.filter(pk=pk, status=ModerationStatus.APPROVED).update(views=F('views') + 1)
        if not updated:
            return Response(status=404)
        return Response(status=204)
