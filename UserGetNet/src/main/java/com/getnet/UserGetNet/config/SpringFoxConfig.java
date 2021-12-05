package com.getnet.UserGetNet.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

//Configuração para SwaggerUI - Documentação
@Configuration
//@EnableSwagger2
@EnableWebMvc
public class SpringFoxConfig {
    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build().apiInfo(apiInfo());
    }


    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Api Users GetNet",
                "Desafio técnico para a criação de uma Api contendo os métodos: GET, POST e PUT." +
                        "\nNesta API podemos listar todos os usuários, filtrar por Id ou por Nome e também adicionar usuários.",
                "beta",
                "",
                new Contact("Giovani Silva", "http://Github.com/giovanispaula", "giovannispaula@gmail.com"),
                "", "", Collections.emptyList());
    }

}
