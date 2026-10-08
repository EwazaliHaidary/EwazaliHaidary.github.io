from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    short_description = models.TextField()
    about = models.TextField()
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=255)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)

    resume = models.FileField(
        upload_to="resume/",
        blank=True,
        null=True
    )

    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name



    # مهارت ها Skills category

class SkillCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


# skills 
class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(
        SkillCategory,
        on_delete=models.CASCADE,
        related_name="skills"
    )
    icon = models.CharField(max_length=100, blank=True)
    level = models.PositiveIntegerField(default=0)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name



# projects model
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    skills = models.ManyToManyField(
        Skill,
        related_name="projects",
        blank=True
    )

    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


    # Exprience تجربات
class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True)
    employment_type = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=200, blank=True)

    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    current = models.BooleanField(default=False)

    description = models.TextField()

    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title


    # Education model
class Education(models.Model):
    degree = models.CharField(max_length=200)
    field = models.CharField(max_length=200)
    institution = models.CharField(max_length=255)

    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField(blank=True, null=True)

    current = models.BooleanField(default=False)

    description = models.TextField(blank=True)

    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.degree} - {self.institution}"