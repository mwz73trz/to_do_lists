from rest_framework.serializers import ModelSerializer, StringRelatedField
from to_do_list_app.models import TaskList, Task

class TaskListSerializer(ModelSerializer):
    class Meta:
        model = TaskList
        fields = ['id', 'name', 'user', 'tasks']
        depth = 1

    user = StringRelatedField()

class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
