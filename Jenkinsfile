pipeline {

```
agent any

stages {

    stage('Checkout') {
        steps {
            echo 'Checking out source code'
        }
    }

    stage('Verify Environment') {
        steps {
            sh '''
            pwd
            node --version
            npm --version
            docker --version
            '''
        }
    }

}

post {
    always {
        echo 'Pipeline finished'
    }
}
```

}
