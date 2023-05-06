from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User

from api.models import Bin,Anchor,Complain
from api.serializers import BinSerializer,AnchorSerializer,ComplainSerializer


from rest_framework.permissions import AllowAny
from rest_framework.response import Response
# from .serializers import UserSerializer,RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics

from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer
from django.contrib.auth import login
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })
    

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        print(10+84)
        print(super(LoginAPI, self).post(request, format=None))
        return super(LoginAPI, self).post(request, format=None)


class ComplainList(APIView):
    def get(self,request):
        complain = Complain.objects.all()
        serializer = ComplainSerializer(complain , many=True)
        return Response(serializer.data)
    # authentication_classes = [SessionAuthentication]
    permission_classes =[IsAuthenticated]
    

class ComplainCreate(APIView):

    def post(self,request):
        serializer = ComplainSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    # authentication_classes = [SessionAuthentication]
    permission_classes =[IsAuthenticated]


class AnchorCreate(APIView):

    permission_classes =[IsAuthenticated]
    def post(self, request):
        serializer = AnchorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save serializer data first
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class AnchorList(APIView):
    permission_classes =[IsAuthenticated]
    def get(self,request):
        user = self.request.user
        anchor = Anchor.objects.filter(email = user)
        serializer = AnchorSerializer(anchor, many=True)
        return Response(serializer.data)
    

class AnchorCreate(APIView):
    permission_classes =[IsAuthenticated]
    def post(self,request):
        serializer = AnchorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class AnchorDetail(APIView):
    # authentication_classes = [SessionAuthentication]
    permission_classes =[IsAuthenticated]
    def get_book_by_pk(self,pk):
        try:
            # bin = Bin.objects.get(pk=pk)
            return Anchor.objects.get(pk=pk)
        except:
            return Response({
                'error' : 'Anchor does not exist'
            },status=status.HTTP_404_NOT_FOUND)

    def get(self,request,pk):
        anchor = self.get_book_by_pk(pk)
        serializer = AnchorSerializer(anchor)
        return Response(serializer.data)
    
    def put(self,request,pk):
        anchor = self.get_book_by_pk(pk)
        serializer = AnchorSerializer(anchor,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        anchor = self.get_book_by_pk(pk)
        anchor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





# class BinList(APIView):
#     permission_classes =[IsAuthenticated]
#     def get(self,request,pk):
#         # user = self.request.user
#         bin = Bin.objects.all()
#         serializer = BinSerializer(bin , many=True)
#         return Response(serializer.data)
    

class BinList(APIView):
    permission_classes =[IsAuthenticated]
    def get(self,request,pk):
        bin = Bin.objects.filter(user_id = pk)
        serializer = BinSerializer(bin , many=True)
        return Response(serializer.data)
    

class BinCreate(APIView):
    permission_classes =[IsAuthenticated]
    def post(self,request):
        serializer = BinSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class BinDetailip(generics.ListAPIView):
    serializer_class = BinSerializer

    def get_queryset(self):
        queryset = Bin.objects.all()
        bin_ip = self.request.query_params.get('bin_ip')
        if bin_ip is not None:
            queryset = queryset.filter(bin_ip=bin_ip)
        return queryset
    # def get_queryset(self):
    #     queryset = Bin.objects.all()
    #     bin_ip = self.request.query_params.get('bin_ip')
        
    #     if bin_ip is not None:
    #         queryset = queryset.filter(bin_ip=bin_ip)
        
    #     serializer = BinSerializer(queryset, many=True)
    #     serialized_data = serializer.data
        
    #     # Return the serialized data as a JSON response
    #     return Response(serialized_data, status=status.HTTP_200_OK)

class BinDetail(APIView):
    permission_classes =[IsAuthenticated]
    def get_book_by_pk(self,pk):
        try:
            return Bin.objects.get(pk=pk)
        except:
            return Response({
                'error' : 'bin does not exist'
            },status=status.HTTP_404_NOT_FOUND)

    def get(self,request,pk):
        bin = self.get_book_by_pk(pk)
        serializer = BinSerializer(bin)
        return Response(serializer.data)
    


    
    def put(self,request,pk):
        bin = self.get_book_by_pk(pk)
        serializer = BinSerializer(bin,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        bin = self.get_book_by_pk(pk)
        bin.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

