from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.conf import settings
from django.core.mail import send_mail
from django.views.decorators.http import require_POST
from django.contrib.auth import authenticate, login, logout
from django.template import loader
from .models import Student
from .models import TryAdmin

def home(request):
    test = Student.objects.get(username = 'admin')
    print(test.id)
    temp = TryAdmin.objects.get(user2 = test)
    print(temp)
    context = {

       "temp":temp
    }
    if request.user.id == None:
        return render(request,'home.html', context)
    else:
        return render(request, 'home2.html', context)

def student(request):
    if request.user.id == None:
        return render(request,'student.html')
    else:
        return render(request,'userHome.html')

def signup(request):
    return render(request,"showSignUp.html")

def user_login(request):
    return render(request,"showLogIn.html")

def user_home(request):
    return render(request, "userHome.html")

def companies(request):
    return render(request, "companies.html")

def about_us(request):
    return render(request, "AboutUs.html")

def contact_us(request):
    return render(request, "ContactUs.html")

@require_POST
def new_student(request):

    data = request.POST
    print(data)

    student = Student.objects.create_user(
                  first_name = data["first_name"],
                  middle_name= data["middle_name"],
                  last_name  = data["last_name"],
                  gender     = data["gender"],
                  email      = data["email"],
                  password   = data["passwd"],
                  mobile     = data["mobile"],
                  enroll     = data["enroll"],
                  username   = data["enroll"],
                  branch     = data["branch"],
                  d_o_b      = data["dob"]
              )

    student.is_active = True
    student.save()
    response = dict()
    # subject = "Welcome to placement portal"
    # message = "You have been registered to placement portal of IET DAVV... Please click on the link below to activate your account."
    # to_email = data["email"]
    # send_mail(
    #     subject ,
    #     message ,
    #     'placementportaliet@gmail' ,
    #     [to_email],
    #     fail_silently=False,
    # )
    response["redirect_url"] = "/student/"
    return JsonResponse(response)


@require_POST
def student_login(request):

    data = request.POST
    response = dict()
    tempuser = Student.objects.filter(username = data["enroll"])
    user = authenticate(username=data["enroll"], password=data["passwd"])
    if user is not None:
    # the password verified for the user
      if data["enroll"] != "admin":
        if user.is_active:
          login(request, user)
          response["redirect_url"] = "../../"
        else:
          response["redirect_url"] = "/student/login/"
          response["error_value"] = "ID is not activated"
      else:
        login(request, user)
        response["redirect_url"] = "/student/admin_view/"
    else:
        # the authentication system was unable to verify the username and password
        response["redirect_url"] = "/student/login/"
        response["error_value"] = "Register Your ID First."
        #print(tempuser)
        if tempuser.exists():
            response["error_value"] = "Your Password Is Incorrect."
    return JsonResponse(response)

def logout_view(request):
    logout(request)
    return redirect("../../")

def personal(request):
    first_name = request.user.first_name
    middle_name = request.user.middle_name
    last_name = request.user.last_name
    gender = request.user.gender
    email = request.user.email
    dob = request.user.d_o_b
    mobile = request.user.mobile
    al_mobile = request.user.alternate_mobile
    username = request.user.username
    father = request.user.father_name
    mother = request.user.mother_name
    branch = request.user.branch
    add = request.user.address
    context = {
      "first_name" : first_name,
      "middle_name" : middle_name,
      "last_name" : last_name,
      "gender" : gender,
      "alternate_mobile" : al_mobile,
      "email" : email,
      "mobile" : mobile,
      "enroll" : username,
      "father" : father,
      "mother" : mother,
      "add" : add,
      "st_branch" : branch,
      "dob" : dob
    }
    return render(request, "PersonalView.html", context)


def persave(request):
    data = request.POST
    temuser = Student.objects.get(username = request.user.username)
    temuser.username = data["enroll"]
    temuser.enroll = data["enroll"]
    temuser.first_name = data["first_name"]
    temuser.middle_name =   data["middle_name"]
    temuser.last_name = data["last_name"]
    temuser.d_o_b = data["dob"]
    temuser.gender = data["gender"]
    temuser.branch = data["branch"]
    temuser.father_name = data["father"]
    temuser.mother_name = data["mother"]
    temuser.email = data["email"]
    temuser.mobile = data["mobile"]
    temuser.alternate_mobile = data["mobile2"]
    temuser.address = data["add"]
    temuser.save()
    response = dict()
    response["redirect_url"] = "/student/user_home/"
    return JsonResponse(response)

def coursecheck(request):
    x = request.user.course
    print(x)
    if x == 'BE':
      tenthper = request.user.tenth_per
      twelthper = request.user.twelth_per
      tenthyear = request.user.tenth_year
      twelthyear = request.user.twelth_year
      branch = request.user.branch
      dipper = request.user.diploma_per
      dipyear = request.user.diploma_year
      firstsem = request.user.first_sem
      secsem = request.user.second_sem
      thirdsem = request.user.third_sem
      fourthsem = request.user.fourth_sem
      actback = request.user.active_backlog
      fifthsem = request.user.fifth_sem
      sixthsem = request.user.sixth_sem
      aggregate = request.user.aggregate
      context = {
        "tenth_per" : tenthper,
        "twelth_per" : twelthper,
        "tenth_year" : tenthyear,
        "twelth_year" : twelthyear,
        "s1" : firstsem,
        "s2" : secsem,
        "s3" : thirdsem,
        "s4" : fourthsem,
        "s5" : fifthsem,
        "s6" : sixthsem,
        "actback": actback,
        "dip_per" : dipper,
        "dip_year" : dipyear,
        "agg" : aggregate
      }
      return render(request, "AcademicViewbe.html", context)

    if x == 'ME':
      tenthper = request.user.tenth_per
      twelthper = request.user.twelth_per
      tenthyear = request.user.tenth_year
      twelthyear = request.user.twelth_year
      branch = request.user.branch
      dipper = request.user.diploma_per
      dipyear = request.user.diploma_year
      firstsem = request.user.first_sem
      secsem = request.user.second_sem
      actback = request.user.active_backlog
      aggregate = request.user.aggregate
      context = {
        "tenth_per" : tenthper,
        "twelth_per" : twelthper,
        "tenth_year" : tenthyear,
        "twelth_year" : twelthyear,
        "s1" : firstsem,
        "s2" : secsem,
        "actback" : actback,
        "dip_per" : dipper,
        "dip_year" : dipyear,
        "agg" : aggregate
      }
      return render(request, "AcademicViewme.html", context)

    if x == 'DP':
      tenthper = request.user.tenth_per
      twelthper = request.user.twelth_per
      tenthyear = request.user.tenth_year
      twelthyear = request.user.twelth_year
      branch = request.user.branch
      dipper = request.user.diploma_per
      dipyear = request.user.diploma_year
      thirdsem = request.user.third_sem
      fourthsem = request.user.fourth_sem
      fifthsem = request.user.fifth_sem
      sixthsem = request.user.sixth_sem
      aggregate = request.user.aggregate
      context = {
        "tenth_per" : tenthper,
        "twelth_per" : twelthper,
        "tenth_year" : tenthyear,
        "twelth_year" : twelthyear,
        "actback": actback,
        "s3" : thirdsem,
        "s4" : fourthsem,
        "s5" : fifthsem,
        "s6" : sixthsem,
        "dip_per" : dipper,
        "dip_year" : dipyear,
        "agg" : aggregate
      }
      return render(request, "AcademicViewdp.html", context)

    else:
      return render(request, "profileselector.html")

def coursec(request):
    data = request.POST
    temuser = Student.objects.get(username = request.user.username)
    temuser.course = data["course"]
    temuser.save()
    response = dict()
    response["redirect_url"] = "/student/coursecheck"
    return JsonResponse(response)

def acsavebe(request):
    data = request.POST
    temuser = Student.objects.get(username = request.user.username)
    temuser.tenth_per = data["tenthper"]
    temuser.tenth_year = data["tenthyear"]
    temuser.twelth_per = data["twelthper"]
    temuser.twelth_year = data["twelthyear"]
    temuser.first_sem = data["s1"]
    temuser.second_sem = data["s2"]
    temuser.third_sem = data["s3"]
    temuser.fourth_sem = data["s4"]
    temuser.fifth_sem = data["s5"]
    temuser.sixth_sem = data["s6"]
    temuser.active_backlog = data["actback"]
    temuser.aggregate = data["agg"]
    temuser.save()
    response = dict()
    response["redirect_url"] = "/student/user_home/"
    return JsonResponse(response)

def acsaveme(request):
    data = request.POST
    temuser = Student.objects.get(username = request.user.username)
    temuser.tenth_per = data["tenthper"]
    temuser.tenth_year = data["tenthyear"]
    temuser.twelth_per = data["twelthper"]
    temuser.diploma_per = data["dipper"]
    temuser.twelth_year = data["twelthyear"]
    temuser.diploma_year = data["dipyear"]
    temuser.first_sem = data["s1"]
    temuser.second_sem = data["s2"]
    temuser.active_backlog = data["actback"]
    temuser.save()
    response = dict()
    response["redirect_url"] = "/student/user_home/"
    return JsonResponse(response)

def acsavedp(request):
    data = request.POST
    temuser = Student.objects.get(username = request.user.username)
    temuser.tenth_per = data["tenthper"]
    temuser.tenth_year = data["tenthyear"]
    temuser.diploma_per = data["dipper"]
    temuser.diploma_year = data["dipyear"]
    temuser.third_sem = data["s3"]
    temuser.fourth_sem = data["s4"]
    temuser.fifth_sem = data["s5"]
    temuser.sixth_sem = data["s6"]
    temuser.active_backlog = data["actback"]
    temuser.aggregate = data["agg"]
    temuser.save()
    response = dict()
    response["redirect_url"] = "/student/user_home/"
    return JsonResponse(response)

def admin_view(request):
    return render(request, "admin_view.html")

def reg_students(request):
    return render(request, "reg_students.html",)

testbr = ""
def branchwise(request):
    data = request.POST
    global testbr
    testbr = request.POST.get("branch")
    response = dict()
    response["redirect_url"] = "/student/reg_students/branchresult/"
    return JsonResponse(response)

def branchresult(request):
    data = Student.objects.filter(branch = testbr)
    count = len(data)
    context = {
    "data" : data,
    "count": count,
    "branch": testbr,
    }
    return render(request, "branchwise.html", context)
# testenr = ""
# def single(request):
#     data = request.POST
#     global testenr
#     testenr = data["enroll"]
#     response = dict()
#     response["redirect_url"] = "/student/reg_students/testsingle/"
#     return JsonResponse(response)

# def testsingle(request):
#     data = Student.objects.get(username = testenr)
#     context = {
#       "data": data
#     }
#     return render(request, "single.html", context)

def elig_cri(request):
    return render(request, "elig_crit.html")

testtenth = ""
testtwelth = ""
testaggre = ""
count = 0


def decided(request):
    data = request.POST
    global testtenth
    global testtwelth
    global testaggre
    testtenth = request.POST.get("tenth")
    testtwelth = request.POST.get("twelth")
    testaggre = request.POST.get("aggre")
    response = dict()
    response["redirect_url"] = "/student/elig_cri/testcri/"
    return JsonResponse(response)

def testcri(request):
  data = Student.objects.filter(tenth_per__gte = testtenth, twelth_per__gte = testtwelth, aggregate__gte = testaggre)
  global count
  count = len(data)
  context = {
    "data" : data,
    "count": count
  }
  return render(request, "criteria.html", context)

def allregst(request):
    data = request.POST
    response = dict()
    response["redirect_url"] = "/student/elig_cri/allst/"
    return JsonResponse(response)
def allst(request):
  data = Student.objects.filter(username__istartswith = 'DE').order_by('enroll')
  count = len(data)
  context = {
    "data" : data,
    "count": count
  }
  return render(request, "criteria.html", context)


def request_news(request):
    admin = Student.objects.get(username = 'admin')
    temp = TryAdmin.objects.get(user2 = admin)
    p1 = temp.para
    p2 = temp.para2
    p3 = temp.para3
    p4 = temp.para4
    context = {
        "para1":p1,
        "para2":p2,
        "para3":p3,
        "para4":p4
    }
    return render(request, "requestnews.html", context)

def add_news(request):
    data = request.POST
    admin = Student.objects.get(username = 'admin')
    temp = TryAdmin.objects.get(user2 = admin)
    temp.para = data["para1"]
    temp.para2 = data["para2"]
    temp.para3 = data["para3"]
    temp.para4 = data["para4"]
    temp.save()
    response = dict()
    response["redirect_url"] = "/student/admin_view/"
    return JsonResponse(response)

def newsdone(request):
    return render(request, "newsdone.html")
