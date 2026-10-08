from django.urls import path
from . import views

urlpatterns = [
    path("profile/",views.ProfileView.as_view()),
    path("project/",views.ProjectsView.as_view()),
    path("skill/", views.SkillView.as_view()),
    path("skillCategory/", views.SkillCategoryView.as_view()),
    path("experience/", views.ExperienceView.as_view()),
    path("education/", views.EducationView.as_view()),


]



