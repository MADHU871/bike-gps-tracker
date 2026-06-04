pipeline {
    agent any

    environment {
        APP_NAME = "bike-gps-tracker"
        IMAGE_NAME = "bike-gps-tracker"
        IMAGE_TAG = "latest"
        CONTAINER_NAME = "bike-gps-tracker-container"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                    pwd
                    ls -la
                    git branch
                    node --version || true
                    npm --version || true
                    docker --version || true
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    if [ -f package.json ]; then
                        npm install
                    else
                        echo "package.json not found"
                        exit 1
                    fi
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                    if npm run | grep -q test; then
                        npm test
                    else
                        echo "No test script found. Skipping."
                    fi
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
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
                      ${IMAGE_NAME}:${IMAGE_TAG}
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
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }

        always {
            echo 'Build finished.'
        }
    }
}