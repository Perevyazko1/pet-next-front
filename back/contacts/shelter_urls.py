from django.urls import path

from .views import ShelterApplicationCreateView

urlpatterns = [
    path('', ShelterApplicationCreateView.as_view(), name='shelter-application-create'),
]
