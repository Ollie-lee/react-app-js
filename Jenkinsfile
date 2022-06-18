pipeline {
  agent {
        docker {
            //using this docker image to run the following tasks
            image 'node:14.18.0'
        }
    
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        echo "Installing packages ..."
        sh "rm -rf node_modules"
//         sh "npm i npm@latest"
        sh 'npm ci'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            echo "Testing ..."
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            echo "Building ..."
            sh 'npm run build'
          }
        }
      }
    }

stage('Production') {
  steps {
    withAWS(region:'ap-southeast-2',credentials:'awsS3UserReactInterviewJenkinsDeploy') {
    s3Delete(bucket: 'react-interview-jenkins', path:'**/*')
    s3Upload(bucket: 'react-interview-jenkins', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
    }
}
