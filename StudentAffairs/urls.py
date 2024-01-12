from django.urls import path
from . import views

urlpatterns = [
    path('Addstudent', views.Add, name='Add'),
    path('delete', views.delete, name = 'delte'),
    path('editstudent', views.edit, name = 'edit'),
    path('login', views.login, name = 'login'),
    path('navpagev2', views.nav, name = 'nav'),
    path('user', views.user, name = 'user'),
    path('NewDepartment', views.dep, name = 'dep'),
    path('table', views.display, name = 'display'),
    path('SignUp', views.signup, name = 'signup'),
    path('getprofiles', views.getprofiles, name = 'getprofiles'),
    path('', views.home, name = 'home'),
    path('getstudents' , views.getstudents , name = 'getstudents'), 
    path('updateAdmin' , views.updateAdmin , name = 'updateAdmin'),
]