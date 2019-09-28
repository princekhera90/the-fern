package com.infy.dto;

import java.util.List;

import com.infy.entity.Product;

public class ProductDTO {

	private Integer pId;
	private String pname;
	private String category;
	private String location;
	private List<String> imgList;
	
	public Integer getpId() {
		return pId;
	}
	public void setpId(Integer pId) {
		this.pId = pId;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public List<String> getImgList() {
		return imgList;
	}
	public void setImgList(List<String> imgList) {
		this.imgList = imgList;
	}
	public Product createEntity() {
		Product product = new Product();
		product.setPname(this.pname);
		product.setCategory(this.category);
		product.setLocation(this.location);
//		product.setImgList(this.imgList);
		
		return product;
	}
}
