from django.urls import path
from . import views
from .views import CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('techstacks/', views.techstack_list_create),
    path('users/', views.user_list_create),
    path('classsessions/', views.classsession_list_create),
    path('assignments/', views.assignment_list_create),
    path('submissions/', views.submission_list_create),
]
