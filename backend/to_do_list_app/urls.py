from django.urls import path, include
from rest_framework.routers import DefaultRouter
from to_do_list_app.views import TaskListViewSet, TaskViewSet

router = DefaultRouter()
router.register("task-lists", TaskListViewSet, basename="task-list")
router.register("tasks", TaskViewSet, basename="task")

urlpatterns = [
    path("", include(router.urls))
]