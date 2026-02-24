from rest_framework import viewsets
from .models import Users, Projects
from .serializers import UserSerializer, ProjectSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer
