from django.contrib import admin
from .models import ContactMessage
# Register your models here.


class ContractAdmin(admin.ModelAdmin):
    list_display = ["name", 'email']

admin.site.register(ContactMessage,ContractAdmin)