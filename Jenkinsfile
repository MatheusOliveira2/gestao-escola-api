pipeline{
    agent any
    
    tools {nodejs "Node-15"}
    
    stages {
        stage ('Install Dependencies') {
            steps{
                sh 'yarn install'
            }
        }
        stage ('Sonar'){
            environment{
                scannerHome = tool 'SONAR_SCANNER'
            }
            steps{
                withSonarQubeEnv('SONAR'){
                    sh "${scannerHome}/bin/sonar-scanner -e -Dsonar.projectKey=gestao-escola-api -Dsonar.sources=. -Dsonar.host.url=http://sonarmatheus.ddns.net:9000"
                }
            }
        }
        stage ('Quality Gate'){
            steps{
                sleep(20)
                timeout(time: 2, unit: 'MINUTES'){
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
