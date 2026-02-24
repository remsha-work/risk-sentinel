from rest_framework import serializers
from .models import Users, Projects

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'username', 'role', 'email', 'enterprise_id', 'projects_assigned']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'name', 'pm_user_id', 'status', 'budget_total', 'health_score']
