from django.urls import path

from .views import CompanyListCreateAPIView, CompanyRetrieveUpdateDestroyAPIView, \
    VacancyListCreateAPIView, VacancyRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('companies/', CompanyListCreateAPIView.as_view(), name='company-list'),
    path('companies/<int:id>/', CompanyRetrieveUpdateDestroyAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', VacancyListCreateAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListCreateAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyRetrieveUpdateDestroyAPIView.as_view(), name='vacancy-detail'),
]
