from django.urls import path

from . import views

urlpatterns = [
    path('', views.NewsListView.as_view(), name='news-list'),
    path('<int:pk>/', views.NewsDetailView.as_view(), name='news-detail'),
    path('<int:pk>/view/', views.NewsViewCountView.as_view(), name='news-view-count'),
]
