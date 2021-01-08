pipeline{
    agent any
    stages{
        stage ('Teste'){
           sh 'echo foi'
        }
        stage ('Sonar'){
            enviroment{
                scannerHome = tool 'SONAR_SCANNER'
            }
            steps{
                withSonarQubeEnv('SONAR'){
                    sh "${scannerHome}/bin/sonar-scanner -e -Dsonar.projectKey=gestao-escola-api -Dsonar.sources=. -Dsonar.host.url=http://sonarmatheus.ddns.net:9000 -Dsonar.login=admin -Dsonar.password=admin"
                }
            }
        }
    }
}
    
