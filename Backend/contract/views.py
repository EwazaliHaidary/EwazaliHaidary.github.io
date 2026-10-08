from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ContactSerializer
from rest_framework import status
from .models import ContactMessage
from rest_framework.views import APIView

# Create your views here.


class ContactView(APIView):
    def post(self, request):
        ser = ContactSerializer(data = request.data)
        if ser.is_valid():
            ser.save()
            return Response({"message": "your message has sent successfully"}, status=status.HTTP_201_CREATED)
        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)
        
