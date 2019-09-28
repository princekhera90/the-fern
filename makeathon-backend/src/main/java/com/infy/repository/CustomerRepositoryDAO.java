package com.infy.repository;

import java.util.List;

import com.infy.dto.ProductDTO;

public interface CustomerRepositoryDAO {
	public List<ProductDTO> findByLocation(String location);
}
