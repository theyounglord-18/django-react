from django.contrib import admin
from .models import User, TechStack, ClassSession, Assignment, AssignmentSubmission

admin.site.register(User)
admin.site.register(TechStack)
admin.site.register(ClassSession)
admin.site.register(Assignment)
admin.site.register(AssignmentSubmission)
