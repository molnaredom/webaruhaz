from rest_framework.response import Response
from .models import *
from .serializers import ProductsSerializer


def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = ProductsSerializer(notes, many=True)
    return Response(serializer.data)


def getProductsList(request):
    products = Product.objects.all()#.order_by('-name')
    print(products)
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)


def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = ProductsSerializer(notes, many=False)
    return Response(serializer.data)


def createNote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = ProductsSerializer(note, many=False)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = ProductsSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')
