from django.http import response
from django.shortcuts import render
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.serializers import Serializer
from .models import Note
from .serializers import ProductsSerializer
from api import serializers
from .utils import *


@api_view(['GET', 'POST'])
def getProducts(request):

    if request.method == 'GET':
        return getProductsList(request)

    # if request.method == 'POST':
    #     return createNote(request)


@api_view(['GET', 'POST'])
def getCart(request):

    if request.method == 'GET':
        return getCartItemList(request)

    # if request.method == 'PUT':
    #     return updateNote(request, pk)
    #
    # if request.method == 'DELETE':
    #     return deleteNote(request, pk)


# @api_view(['POST'])
# def createNote(request):
#     data = request.data
#     note = Note.objects.create(
#         body=data['body']
#     )
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateNote(request, pk):
#     data = request.data
#     note = Note.objects.get(id=pk)
#     serializer = NoteSerializer(instance=note, data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)


# @api_view(['DELETE'])
# def deleteNote(request, pk):
#     note = Note.objects.get(id=pk)
#     note.delete()
#     return Response('Note was deleted!')
