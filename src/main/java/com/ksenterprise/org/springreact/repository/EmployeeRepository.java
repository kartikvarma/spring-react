package com.ksenterprise.org.springreact.repository;

import com.ksenterprise.org.springreact.domain.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
