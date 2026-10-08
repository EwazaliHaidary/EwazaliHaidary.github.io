from rest_framework import serializers

from .models import (
    Profile,
    Project,
    SkillCategory,
    Skill,
    Education,
    Experience,
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
        read_only_fields = ("updated_at",)


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"

class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many =True, read_only=True)
    class Meta:
        model = SkillCategory
        fields = "__all__"





class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"