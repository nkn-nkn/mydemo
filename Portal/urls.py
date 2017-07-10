from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    # Examples:
	url(r'^$', 'Site.views.home', name='home'),
	url(r'^student/home2/$', 'Site.views.home2', name='home2'),
	url(r'^admin/', include(admin.site.urls)),
	url(r'^student/$', 'Site.views.student', name='student'),
	url(r'^companies/$', 'Site.views.companies', name='companies'),
	url(r'^about_us/$', 'Site.views.about_us', name='about_us'),
	url(r'^contact_us/$', 'Site.views.contact_us', name='contact_us'),
	url(r'^student/signup/$', 'Site.views.signup', name='signup'),
	url(r'^student/signup/new_student/$', 'Site.views.new_student', name='new_student'),
	url(r'^student/login/$', 'Site.views.user_login', name='login'),
	url(r'^student/user_home/$', 'Site.views.user_home', name='user_home'),
	url(r'^student/personal/$', 'Site.views.personal', name='personal'),
	url(r'^student/persave/$', 'Site.views.persave', name='persave'),
	url(r'^student/coursecheck/$', 'Site.views.coursecheck', name='coursecheck'),
	url(r'^student/coursec/$', 'Site.views.coursec', name='coursec'),
	url(r'^student/acsavebe/$', 'Site.views.acsavebe', name='acsavebe'),
	url(r'^student/acsaveme/$', 'Site.views.acsaveme', name='acsaveme'),
	url(r'^student/acsavedp/$', 'Site.views.acsavedp', name='acsavedp'),
	url(r'^student/login/student_login/$', 'Site.views.student_login', name='student_login'),
    url(r'^student/logout/$', 'Site.views.logout_view', name='student_logout'),
	url(r'^student/admin_view/$', 'Site.views.admin_view', name='admin_view'),
	# url(r'^blog/', include('blog.urls')),
	url(r'^student/reg_students/$', 'Site.views.reg_students', name='reg_students'),
	url(r'^student/reg_students/branchwise/$', 'Site.views.branchwise', name='branchwise'),
	url(r'^student/reg_students/branchresult/$', 'Site.views.branchresult', name='branchresult'),
	url(r'^student/elig_cri/$', 'Site.views.elig_cri', name='elig_cri'),
	url(r'^student/elig_cri/decided/$', 'Site.views.decided', name='decided'),
	url(r'^student/elig_cri/testcri/$', 'Site.views.testcri', name='testcri'),
	url(r'^student/elig_cri/allregst/$', 'Site.views.allregst', name='allregst'),
	url(r'^student/elig_cri/allst/$', 'Site.views.allst', name='allst'),
	url(r'^student/request_news/$', 'Site.views.request_news', name='request_news'),
	url(r'^student/add_news/$', 'Site.views.add_news', name='add_news'),

]

if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
