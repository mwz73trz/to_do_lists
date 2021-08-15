from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from to_do_list_app.serializers import TaskListSerializer, TaskSerializer
from to_do_list_app.models import TaskList, Task

class TaskListViewSet(ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

