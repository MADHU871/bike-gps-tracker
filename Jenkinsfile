pipeline {

    agent any

    environment {
        IMAGE_NAME = "bike-gps-tracker"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/MADHU871/bike-gps-tracker.git'
            }
        }

        stage('Install') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Docker Build') {
            steps {
                dir('backend') {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Docker Run') {
            steps {
                sh '''
                docker stop bike-gps-container || true
                docker rm bike-gps-container || true

                docker run -d \
                --name bike-gps-container \
                -p 3000:3000 \
                $IMAGE_NAME
                '''
            }
        }
    }
}