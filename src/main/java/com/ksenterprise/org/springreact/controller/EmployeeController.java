package com.ksenterprise.org.springreact.controller;

import com.ksenterprise.org.springreact.domain.Employee;
import com.ksenterprise.org.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class EmployeeController {

    private final EmployeeRepository repository;

    @Autowired
    public EmployeeController(EmployeeRepository repository){
        this.repository =repository;
    }

    @GetMapping(value = "/api/v1/employees")
    public Iterable<Employee> getEmployees(){
        return repository.findAll();
    }

    @GetMapping(value = "/api/v1/employees/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id){
        return repository.findById(id);
    }
}
