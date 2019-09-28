package com.infy.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.infy.dto.ProductDTO;
import com.infy.entity.Product;

@Repository(value="customerRepositoryDAO")
public class CustomerRepositoryImpl implements CustomerRepositoryDAO{

	@PersistenceContext
	private EntityManager entityManager;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public List<ProductDTO> findByLocation(String location) {
		logger.info("Fetch request for location {}", location);
//		String queryString = "Select p from Product p"; // where location=?1";
//		System.err.println(entityManager);
////		Query q = entityManager.createQuery(queryString);
//		q.setParameter(1, location);
//		System.err.println("Ececcut33");
//		List<Product> productList = q.getResultList();
//		System.err.println("Ececcut33");
//		List<ProductDTO> pDTOList = new ArrayList<>();
//		for(Product p: productList) {
//			ProductDTO productDTO = ProductDTO.valueOf(p);
//			pDTOList.add(productDTO);
//		}
//		
		List<ProductDTO> pDTOList = new ArrayList<>();
		ProductDTO pp = new ProductDTO();
		pp.setCategory("Clothes");
		pp.setImages("1.jpg,2.jpg,3.jpg");
		pp.setpId(1);
		pp.setLocation("hyderabad");
		pp.setPname("reymond");
		pDTOList.add(pp);
		
		return pDTOList;
	}

}
