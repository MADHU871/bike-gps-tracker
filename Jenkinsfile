pipeline {

```
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
            docker build -t ${IMAGE_NAME}:latest .
            '''
        }
    }

    stage('Stop Existing Container') {
        steps {
            sh '''
            docker stop ${CONTAINER_NAME} || true
            docker rm ${CONTAINER_NAME} || true
            '''
        }
    }

    stage('Run Docker Container') {
        steps {
            sh '''
            docker run -d \
            --name ${CONTAINER_NAME} \
            -p 3000:3000 \
            ${IMAGE_NAME}:latest
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
```

}
