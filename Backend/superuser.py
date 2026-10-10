import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Config.settings")
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

username = os.environ.get("ADMIN_USERNAME")
email = os.environ.get("ADMIN_EMAIL")
password = os.environ.get("ADMIN_PASSWORD")

if not all([username, email, password]):
    raise ValueError("Admin environment variables are missing.")

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(
        username=username,
        email=email,
        password=password,
    )
    print("Superuser created successfully.")
else:
    print("Superuser already exists.")