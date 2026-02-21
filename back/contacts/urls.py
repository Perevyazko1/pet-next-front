from django.urls import path

from . import views

urlpatterns = [
    path('', views.VisitRequestCreateView.as_view(), name='visit-request-create'),
]
