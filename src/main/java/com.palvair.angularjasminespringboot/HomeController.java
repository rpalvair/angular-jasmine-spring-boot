package com.palvair.angularjasminespringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by PALVAIRR on 12/10/2015.
 */
//@Controller
@SpringBootApplication
public class HomeController {

    /*@RequestMapping("/")
    public String home() {
        return "index";
    }*/

    public static void main(String[] args) throws Exception {
        SpringApplication.run(HomeController.class, args);
    }
}
