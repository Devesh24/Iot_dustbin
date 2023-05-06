from rest_framework import serializers
from api.models import Bin,Anchor,Complain

from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user
    
    
class AnchorSerializer(serializers.ModelSerializer):
        class Meta:
            model = Anchor
            fields = '__all__'
class BinSerializer(serializers.ModelSerializer):
        class Meta:
            model = Bin
            fields = '__all__'
class ComplainSerializer(serializers.ModelSerializer):
        class Meta:
            model = Complain
            fields = '__all__'
