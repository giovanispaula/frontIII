FROM openjdk:11
WORKDIR /usergetnet
EXPOSE 8080
COPY /out/artifacts/UserGetNet_jar/UserGetNet.jar /usergetnet/getnetapi.jar
ENTRYPOINT ["java", "-jar", "getnetapi.jar"]