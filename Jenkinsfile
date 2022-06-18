// pipeline {
//   agent {
//         docker {
//             //using this docker image to run the following tasks
//             image 'node:14.18.0'
//         }
    
//   }
//   environment {
//     CI = 'true'
// //     HOME = '.'
// //     npm_config_cache = 'npm-cache'
//   }
//     options {
//         // Keep maximum 10 archieved artifacts
//         buildDiscarder(logRotator(numToKeepStr:'10', artifactNumToKeepStr:'10'))
//         // No simultaneous builds
//         disableConcurrentBuilds()
//         durabilityHint('PERFORMANCE_OPTIMIZED') //MAX_SURVIVABILITY or SURVIVABLE_NONATOMIC
//     }  
//   stages {
//     stage('Install Packages') {
//       steps {
//         echo "Installing packages ..."
//         sh "rm -rf node_modules"
//         sh "npm i npm@latest"
//         sh 'npm i'
//       }
//     }
// //     stage('Test and Build') {
// //       parallel {
// //         stage('Run Tests') {
// //           steps {
// //             echo "Testing ..."
// //             sh 'npm run test'
// //           }
// //         }
// //         stage('Create Build Artifacts') {
// //           steps {
// //             echo "Building ..."
// //             sh 'npm run build'
// //           }
// //         }
// //       }
    

//         stage('Test') {
//             steps{
//                 echo "Testing ..."
//                 sh 'npm run test'
//             }
//         }
//         stage('Build') {
//             steps {
//                 echo "Building ..."
//                 //use env.variable to access environment variable
// //                 echo "Running job: ${env.JOB_NAME}\n Build: ${env.BUILD_ID} - ${env.BUILD_URL}\n Pipeline: ${env.RUN_DISPLAY_URL}"
//                 sh 'npm run build'
//             }
//         }
//     }

// stage('Production') {
//   steps {
//     withAWS(region:'ap-southeast-2',credentials:'awsS3UserReactInterviewJenkinsDeploy') {
//     s3Delete(bucket: 'react-interview-jenkins', path:'**/*')
//     s3Upload(bucket: 'react-interview-jenkins', workingDir:'build', includePathPattern:'**/*');
//             }
//           }
//         }
  
  
//     }

//     post {
//         success {
//             echo "WELL DONE!"
//         }
//         failure {
//             echo "FAILED"
//         }
//     }
// }

pipeline {
    agent {
        docker {
            //using this docker image to run the following tasks
            image 'node:14.18.0'
        }
    }

    //define environemnt variables
    environment {
        CI = 'true'
    }

    options {
        // Keep maximum 10 archieved artifacts
        buildDiscarder(logRotator(numToKeepStr:'10', artifactNumToKeepStr:'10'))
        // No simultaneous builds
        disableConcurrentBuilds()
        durabilityHint('PERFORMANCE_OPTIMIZED') //MAX_SURVIVABILITY or SURVIVABLE_NONATOMIC
    }

    stages {
        stage('Install packages') {
            steps {
        echo "Installing packages ..."
        sh "rm -rf node_modules"
        sh "npm i npm@latest"
        sh 'npm i'
            }
        }
        stage('Test') {
            steps{
                echo "Testing ..."
                sh 'npm run test'
            }
        }      
        stage('Build') {
            steps {
                echo "Building ..."
                //use env.variable to access environment variable
//                 echo "Running job: ${env.JOB_NAME}\n Build: ${env.BUILD_ID} - ${env.BUILD_URL}\n Pipeline: ${env.RUN_DISPLAY_URL}"
                sh 'npm run build'
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

        
    post {
        success {
            echo "WELL DONE!"
        }
        failure {
            echo "FAILED"
        }
    }
}

