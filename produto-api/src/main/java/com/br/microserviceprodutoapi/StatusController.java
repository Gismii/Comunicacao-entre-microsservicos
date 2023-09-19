package com.br.microserviceprodutoapi;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/status")
public class StatusController {

    @GetMapping("status")
    public ResponseEntity<HashMap<String, Object>> getapiStatus(){

        var response = new HashMap<String, Object>();

        response.put("sevice", "Product-api");
        response.put("satatus", "up");
        response.put("Gismi tech", "test");
        response.put("httpStatus", HttpStatus.OK.value());

        return ResponseEntity.ok(response);

    }
}
