from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from .models import(
    Profile,
    Project,
    SkillCategory,
    Skill,
    Education,
    Experience,
)
from .serializers import (
    ProfileSerializer,
    SkillSerializer,
    SkillCategorySerializer,
    ProjectSerializer,
    EducationSerializer,
    ExperienceSerializer,
    
)
# Create your views here.

# show Profile 
class ProfileView(APIView):

    def get(self, request):
        profile = Profile.objects.first()

        if not profile:
            return Response(
                {"detail": "Profile not found.exists()."},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = ProfileSerializer(profile)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )


# Prject view
class ProjectsView(APIView):
    def get(self, request):
        project = Project.objects.all()
        if  not project.exists():
            return Response("we couldn't find any project", status=status.HTTP_404_NOT_FOUND)
        ser = ProjectSerializer(instance = project, many = True)
        return Response(ser.data, status = status.HTTP_200_OK)


# مهارت ها skills
class SkillView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        if not skills.exists():
            return Response({"message": "No skill"}, status=status.HTTP_404_NOT_FOUND)
        ser = SkillSerializer(instance = skills, many =True)
        return Response(ser.data, status=status.HTTP_200_OK)
class SkillCategoryView(APIView):
    def get(self, request):
        skillCategory = SkillCategory.objects.all()
        if not skillCategory.exists():
            return Response({"message": "No skill category found yet!"}, status=status.HTTP_404_NOT_FOUND)
        ser = SkillCategorySerializer(instance = skillCategory, many =True)
        return Response(ser.data, status=status.HTTP_200_OK)

# Exprience view
class ExperienceView(APIView):
    def get(self, request):
        experience =Experience.objects.all()
        if not experience.exists():
            return Response({"message": "Not found.exists() any skill"}, status= status.HTTP_404_NOT_FOUND)
        ser = ExperienceSerializer(instance = experience, many =True)
        return Response(ser.data, status= status.HTTP_200_OK)


# Education
class EducationView(APIView):
    def get(self, request):
        education =Education.objects.all()
        if not education.exists():
            return Response({"message": "Not skill found!"}, status= status.HTTP_404_NOT_FOUND)
        ser = EducationSerializer(instance = education, many =True)
        return Response(ser.data, status= status.HTTP_200_OK)

