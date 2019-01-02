package com.ksenterprise.org.springreact.utility;

import com.ksenterprise.org.springreact.domain.Employee;
import com.ksenterprise.org.springreact.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseUtility implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    public DatabaseUtility(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Employee("John", "Smith", "Store Manager"));
        this.repository.save(new Employee("Steve", "Smith", "Assistant Manager"));
        this.repository.save(new Employee("Julia", "Smith", "Owner"));
    }
}
