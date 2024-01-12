from django.template import loader
from django.shortcuts import render
from StudentAffairs.models import students
from django.http import HttpResponse
from datetime import date
from django.http import JsonResponse
from .models import Admin ,students
import json
from django.db.models import Q
from django.shortcuts import redirect

def Add(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id','') 
        name = request.POST.get('name','')
        gpa = request.POST.get('gpa',0)
        email = request.POST.get('email','')
        phone_number = request.POST.get('phone_number','')
        department = request.POST.get('department','')
        level = request.POST.get('level','')
        dob = request.POST.get('dob')
        gender = request.POST.get('gender','')
        address = request.POST.get('address','')
        Status = request.POST.get('Status','')
        student = students(student_id=student_id, name=name, GPA=gpa, email=email,dob=dob, phonenumber=phone_number, depart=department,statuss=Status,lvl=level, s_type=gender, address=address  )
        student.save() 
    return render(request,'Addstudent.html',{})



def delete(request):
    if request.method == "POST":
        IDs=request.POST['id']
        updated_student=students.objects.get(student_id=IDs)
        updated_student.delete()
    return render(request,'delete.html',{})

def edit(request):
    if request.method == "POST":
        IDs=request.POST['id']
        updated_student=students.objects.get(student_id=IDs)
        names=request.POST['name']
        updated_student.name=names
        phones=request.POST['number']
        updated_student.phonenumber=phones
        emails=request.POST['email']
        updated_student.email=emails
        addresse=request.POST['address']
        updated_student.address=addresse
        gpas=request.POST['gpa']
        updated_student.GPA=gpas
        lvls=request.POST['lvl']
        updated_student.lvl=lvls
        Status = request.POST['Status']
        updated_student.statuss=Status
        if int(lvls) <= 2 :
            updated_student.depart = "General" 
        updated_student.save()
    return render(request,'editstudent.html',{})





def nav(request):
    if request.method == 'POST':
        uname = request.POST['Username']
        x = Admin.objects.get(UserName = uname)
        admin = Admin(NationalId = x.NationalId, FullName = x.FullName , UserName = x.UserName , Password = x.Password, ConfirmPassword = x.ConfirmPassword, PhoneNumber = x.PhoneNumber, Date = x.Date, logedIN = 1)
        x.delete()
        admin.save()
    return render(request,'navpagev2.html',{})

def login(request):
    if request.method == 'POST':
        ID = request.POST['id']
        fname = request.POST['fullname']
        username = request.POST['Username']
        Pass = request.POST['pass']
        CPass = request.POST['cpass']
        pnumber = request.POST['phone']
        D = request.POST['date']
        admin = Admin(NationalId = ID, FullName = fname , UserName = username , Password = Pass, ConfirmPassword = CPass, PhoneNumber = pnumber, Date = D)
        admin.save()
       

    return render(request,'login.html',{})



def user(request):
    try:
        x = Admin.objects.get(logedIN=True)
        context = {
            'u': x,
        }
        if request.method == 'POST':
            # form_type = request.POST.get('form_type')
            # if form_type == 'update' :
                name = request.POST.get('FullName')
                phone = request.POST.get('PhoneNumber')
                password = request.POST.get('Password')
                try:
                    x.FullName = name
                    x.PhoneNumber = phone
                    x.Password = password
                    x.ConfirmPassword = password
                    x.save()
                except Exception as e:
                    print("Error saving changes:", str(e))
                    
    except:
        return login(request) 

    return render(request, 'user.html', context)



def dep(request):
    if request.method == "POST":
        IDs=request.POST['id']
        
        updated_student=students.objects.get(student_id=IDs)
        names=request.POST['name']
        lvls=request.POST['lvl']
        departs=request.POST['depart']
        updated_student.depart=departs
        updated_student.save()
    return render(request,'NewDepartment.html',{})


def display(request):
    template = loader.get_template('table.html')
    return render(request , 'table.html' , {} )

def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

def signup(request):
    template = loader.get_template('SignUp.html')
    return render(request,'SignUp.html',{})


def updateAdmin(request):
    x = Admin.objects.get(logedIN=True)
    x.logedIN = False
    x.save() 



    

def getprofiles(request):
    Data = Admin.objects.all()
    return JsonResponse({"Data": list(Data.values())})


def getstudents (request):

    if request.method == "POST":
        searchFilter = request.POST.get('searchInput' , '')
        Data = students.objects.filter(
            Q(student_id__startswith=searchFilter) |
            Q(name__startswith=searchFilter) |
            Q(lvl__startswith=searchFilter) | 
            Q(depart__startswith=searchFilter) |
            Q(GPA__startswith=searchFilter)

        )
        return JsonResponse({"Data": list(Data.values())})
        # Data = students.objects.all()
        # return JsonResponse({"Data": list(Data.values())})
    
    Data = students.objects.all()
    return JsonResponse({"Data": list(Data.values())})
    

        
