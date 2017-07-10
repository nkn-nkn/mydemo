from django.db import models
from datetime import date
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User



# Create your models here.
class Student(AbstractUser):
	enroll = models.CharField(max_length = 8, blank = False,null = True)
	mobile = models.CharField(max_length = 10, blank = False, null = True)
	father_name = models.CharField(max_length = 30, blank = True, null = True)
	address = models.TextField(blank = True, null = True)
	tenth_per = models.FloatField(blank = True, null = True, default = 0)
	tenth_year = models.IntegerField(blank = True, null = True, default = 0)
	twelth_per = models.FloatField(blank = True, null = True, default = 0)
	twelth_year = models.IntegerField(blank = True, null = True, default = 0)
	branch = models.CharField(max_length = 10, blank = True, null = True)
	diploma_per = models.FloatField(blank = True, null = True, default = 0)
	diploma_year = models.IntegerField(blank = True, null = True, default = 0)
	d_o_b = models.CharField(max_length = 30, blank = True, null = True)
	first_sem = models.FloatField(blank = True, null = True, default = 0)
	second_sem = models.FloatField(blank = True, null = True, default = 0)
	third_sem = models.FloatField(blank = True, null = True, default = 0)
	fourth_sem = models.FloatField(blank = True, null = True, default = 0)
	fifth_sem = models.FloatField(blank = True, null = True, default = 0)
	sixth_sem = models.FloatField(blank = True, null = True, default = 0)
	aggregate = models.FloatField(blank = True, null = True, default = 0)
	gender = models.CharField(max_length = 6, blank = False, null = True, default = 'None')
	mother_name = models.CharField(max_length = 30, blank = True, null = True, default = 'Mother')
	middle_name = models.CharField(max_length = 30, blank = True, null = True)
	alternate_mobile = models.CharField(max_length = 10, blank = False, null = True)
	active_backlog = models.BooleanField(default = False)
	course = models.CharField(max_length = 2, default = 'OO')
#	user = models.OneToOneField(User, related_name="custom_user_profile", primary_key=True)

class TryAdmin(models.Model):
	para = models.TextField(blank = True, null = True)
	para2 = models.TextField(blank = True, null = True)
	para3 = models.TextField(blank = True, null = True)
	para4 = models.TextField(blank = True, null = True)
	user2 = models.ForeignKey(Student, on_delete= models.CASCADE)
