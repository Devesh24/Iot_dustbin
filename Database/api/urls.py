from django.contrib import admin
from django.urls import path,include
# from .views import UserDetailAPI,RegisterUserAPIView

from api.views import BinList,BinCreate,BinDetail,BinDetailip
from api.views import AnchorList,AnchorCreate,AnchorDetail
from api.views import ComplainList,ComplainCreate

from .views import *
from knox import views as knox_views
from .views import LoginAPI

urlpatterns = [
    path('a/' , AnchorCreate.as_view()),
    path('a/list/' , AnchorList.as_view()),
    path('a/<int:pk>',AnchorDetail.as_view()),

    path('bin/list/' , BinList.as_view()),
    path('bin/ip/' , BinDetailip.as_view()),
    path('bin/' , BinCreate.as_view()),
    path('bin/<int:pk>',BinDetail.as_view()),

    path('complain/list/',ComplainList.as_view()),
    path('complain/',ComplainCreate.as_view()),


    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),


    # path('myview/',MyView.as_view()),
    # path("get/",UserDetailAPI.as_view(),name="get-details"),
    # path('register/',RegisterUserAPIView.as_view(),name='register'),
]
