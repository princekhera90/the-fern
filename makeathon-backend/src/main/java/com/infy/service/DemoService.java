package com.infy.service;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.CustomerDTO;
import com.infy.dto.FetchDTO;
import com.infy.dto.LoginDTO;
import com.infy.dto.ProductDTO;
import com.infy.entity.Customer;
import com.infy.entity.Product;
import com.infy.repository.CustomerRepository;
import com.infy.repository.CustomerRepositoryImpl;
import com.infy.utility.AddProduct;

@Service
@Transactional
public class DemoService {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CustomerRepository custRepo;
	
	CustomerRepositoryImpl custRepImpl = new CustomerRepositoryImpl();

	public boolean createCustomer(CustomerDTO custDTO) {
		logger.info("Creation request for customer {}", custDTO);
		Customer cust = custDTO.createEntity();
		custRepo.save(cust);
		return true;
	}

	// Login

	public boolean login(LoginDTO loginDTO) {
		logger.info("Login request for customer {} with password {}", loginDTO.getEmail(), loginDTO.getPassword());
		Customer cust = custRepo.findByEmail(loginDTO.getEmail());
		if (cust != null && cust.getPassword().equals(loginDTO.getPassword())) {
			return true;
		}
		return false;
	}

	public Integer addProduct(AddProduct addProduct) throws Exception {
		logger.info("Product adding for email {} and product {}", addProduct.getEmail(), addProduct.getProduct());
		Customer cust = custRepo.findByEmail(addProduct.getEmail());
		if (cust != null) {
			List<Product> productList = cust.getProducts();
			
			ProductDTO productDTO = addProduct.getProduct();
			Product product = productDTO.createEntity();
			productList.add(product);
			custRepo.save(cust);
			return product.getpId();
		}
		return null;

	}

	public List<ProductDTO> fetch(FetchDTO fetchDTO) {
		System.err.println(fetchDTO.getLocation());
		return custRepImpl.findByLocation(fetchDTO.getLocation());
	}

	// Fetches full profile of a specific customer

//	public CustomerDTO getCustomerProfile( Long phoneNo) {
//
//		logger.info("Profile request for customer {}", phoneNo);
//		Customer cust = custRepo.findByPhoneNo(phoneNo);
//		CustomerDTO custDTO = CustomerDTO.valueOf(cust);
//
//		logger.info("Profile for customer : {}", custDTO);
//		return custDTO;
//	}

}
