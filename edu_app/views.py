from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .permissions import IsInstructor, IsStudent, IsAdmin
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import TechStack, User, ClassSession, Assignment, AssignmentSubmission
from .serializers import (
    TechStackSerializer, UserSerializer,
    ClassSessionSerializer, AssignmentSerializer,
    AssignmentSubmissionSerializer,CustomTokenObtainPairSerializer
)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

# Protect ClassSession creation to only Instructors
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, IsInstructor])
def classsession_list_create(request):
    if request.method == 'GET':
        sessions = ClassSession.objects.all()
        serializer = ClassSessionSerializer(sessions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ClassSessionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(instructor=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Only Students can submit assignments
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, IsStudent])
def submission_list_create(request):
    if request.method == 'GET':
        submissions = AssignmentSubmission.objects.all()
        serializer = AssignmentSubmissionSerializer(submissions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AssignmentSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(student=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Only Admin can view/create tech stacks
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, IsAdmin])
def techstack_list_create(request):
    if request.method == 'GET':
        stacks = TechStack.objects.all()
        serializer = TechStackSerializer(stacks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TechStackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'POST'])
def techstack_list_create(request):
    if request.method == 'GET':
        stacks = TechStack.objects.all()
        serializer = TechStackSerializer(stacks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TechStackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def user_list_create(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def classsession_list_create(request):
    if request.method == 'GET':
        sessions = ClassSession.objects.all()
        serializer = ClassSessionSerializer(sessions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ClassSessionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def assignment_list_create(request):
    if request.method == 'GET':
        assignments = Assignment.objects.all()
        serializer = AssignmentSerializer(assignments, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AssignmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def submission_list_create(request):
    if request.method == 'GET':
        submissions = AssignmentSubmission.objects.all()
        serializer = AssignmentSubmissionSerializer(submissions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AssignmentSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

