package com.ksenterprise.org.springreact.controller;

import com.ksenterprise.org.springreact.domain.Employee;
import com.ksenterprise.org.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    private final EmployeeRepository repository;

    @Autowired
    public EmployeeController(EmployeeRepository repository){
        this.repository =repository;
    }

    @GetMapping(value = "/employees")
    public Iterable<Employee> getEmployees(){
        return repository.findAll();
    }

    @GetMapping(value = "/employees/{id}",  params="id" )
    public Optional<Employee> getEmployeeById(@PathVariable("id") Long id){
        return repository.findById(id);
    }

    @PostMapping(value = "/saveEmployee")
    public Iterable<Employee> saveEmployee(@RequestBody Employee employee) {
        repository.save(employee);
        return repository.findAll();
    }
}
