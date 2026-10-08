from django.contrib import admin
from .models import Profile,Skill, SkillCategory, Education, Experience, Project
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["name",'title', 'github_url',"github_url", 'linkedin_url']
    list_display_links =["github_url", 'linkedin_url']
admin.site.register(Profile,ProfileAdmin)

class SkillAdmin(admin.ModelAdmin):
    list_display = ["name",'category', 'icon']
admin.site.register(Skill,SkillAdmin)

class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
admin.site.register(SkillCategory,SkillCategoryAdmin)


class EducationAdmin(admin.ModelAdmin):
    list_display = ["degree",'field']
admin.site.register(Education,EducationAdmin)

admin.site.register(Experience)
admin.site.register(Project)



