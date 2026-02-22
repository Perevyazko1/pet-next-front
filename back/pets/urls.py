from django.urls import path

from . import views

urlpatterns = [
    path('', views.PetListView.as_view(), name='pet-list'),
    path('<int:pk>/', views.PetDetailView.as_view(), name='pet-detail'),
    path('<int:pk>/view/', views.PetViewCountView.as_view(), name='pet-view-count'),
]
