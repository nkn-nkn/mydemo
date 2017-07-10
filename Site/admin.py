from django.contrib import admin

# Register your models here.
from .models import Student

class SignUpAdmin(admin.ModelAdmin):
	class Meta:
		model = Student

admin.site.register(Student, SignUpAdmin)
