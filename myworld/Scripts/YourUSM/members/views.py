from django.http import HttpResponse
from django.template import loader
from .models import Member

def members(request):
  mymembers = Member.objects.all().values()
  template = loader.get_template('all_members.html')
  context = {
    'mymembers': mymembers,
  }
  return HttpResponse(template.render(context, request))
  
def details(request, id):
  mymember = Member.objects.get(id=id)
  template = loader.get_template('details.html')
  context = {
    'mymember': mymember,
  }
  return HttpResponse(template.render(context, request))
  
def main(request):
  template = loader.get_template('home.html')
  return HttpResponse(template.render())

def testing(request):
  template = loader.get_template('template.html')
  context = {
    'fruits': ['(Apple)Okay', '(Banana)Está de Pana', 'Cherry'],   
  }
  return HttpResponse(template.render(context, request))

def iniciar(request):
  template = loader.get_template('iniciar.html')
  return HttpResponse(template.render())

def registrar(request):
  template = loader.get_template('registrar.html')
  return HttpResponse(template.render())

def registrar(request):
  template = loader.get_template('informaciones.html')
  return HttpResponse(template.render())

def misdenuncias(request):
  template = loader.get_template('misdenuncias.html')
  return HttpResponse(template.render())