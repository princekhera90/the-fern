package com.infy.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infy.dto.CustomerDTO;
import com.infy.dto.FetchDTO;
import com.infy.dto.LoginDTO;
import com.infy.service.DemoService;
import com.infy.utility.AddProduct;

@RestController
@CrossOrigin
public class DemoApplicationAPI {

	@Autowired
	DemoService custService;

//	@Autowired
//	RestTemplate template;

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean createCustomer(@RequestBody CustomerDTO custDTO) {
		logger.info("Creation request for customer {}", custDTO);
		return custService.createCustomer(custDTO);
	}

	@PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {
		logger.info("Login request for customer {} with password {}", loginDTO.getEmail(), loginDTO.getPassword());
		System.err.printf("Login request for customer {} with password {}", loginDTO.getEmail(),
				loginDTO.getPassword());
		boolean result = custService.login(loginDTO);
		ResponseEntity<Boolean> response = new ResponseEntity<Boolean>(result, HttpStatus.OK);
		return response;
	}
	
//	@PostMapping(value = "/fetch", consumes = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Boolean> fetch(@RequestBody FetchDTO fetchDTO) {
//		logger.info("Fetch request for location {}", fetchDTO.getLocation());
//		boolean result = custService.fetch(fetchDTO);
//		ResponseEntity<Boolean> response = new ResponseEntity<Boolean>(result, HttpStatus.OK);
//		return response;
//	}
	
	@PostMapping(value = "/addProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Integer> addProduct(@RequestBody AddProduct addProduct) {
		logger.info("Product adding for email {} ", addProduct.getEmail());
		
		Integer result = null;
		try {
			result = custService.addProduct(addProduct);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		ResponseEntity<Integer> response = new ResponseEntity<Integer>(result, HttpStatus.OK);
		return response;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
