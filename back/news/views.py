from django.db.models import F
from rest_framework import generics

from .models import News
from .serializers import NewsDetailSerializer, NewsListSerializer


class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsListSerializer


class NewsDetailView(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer

    def retrieve(self, request, *args, **kwargs):
        News.objects.filter(pk=self.kwargs['pk']).update(views=F('views') + 1)
        return super().retrieve(request, *args, **kwargs)
