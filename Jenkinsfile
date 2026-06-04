pipeline {

    agent any

    environment {
        IMAGE_NAME = "bike-gps-tracker"
        CONTAINER_NAME = "bike-gps-container"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                pwd
                ls -la
                node --version
                npm --version
                docker --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd backend
                npm install
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                cd backend
                docker build -t bike-gps-tracker:latest .
                '''
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                docker stop bike-gps-container || true
                docker rm bike-gps-container || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker run -d \
                --name bike-gps-container \
                -p 3000:3000 \
                bike-gps-tracker:latest
                '''
            }
        }

        stage('Verify Container') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }

    post {

        success {
            echo 'Bike GPS Tracker deployed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }

        always {
            echo 'Build finished.'
        }
    }
}