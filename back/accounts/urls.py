from django.urls import path

from . import views

urlpatterns = [
    path('', views.ShelterListView.as_view(), name='shelter-list'),
]
