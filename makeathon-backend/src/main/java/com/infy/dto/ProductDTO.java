package com.infy.dto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.infy.entity.Product;

public class ProductDTO {

	private Integer pId;
	private String pname;
	private String category;
	private String location;
	private String images;

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

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public Product createEntity() {
		Product product = new Product();
		product.setPname(this.pname);
		product.setCategory(this.category);
		product.setLocation(this.location);
		product.setImages(this.images);

		return product;
	}

	public static ProductDTO valueOf(Product p) {
		ProductDTO pp = new ProductDTO();
		pp.setCategory(p.getCategory());
		pp.setImages(p.getImages());
		pp.setLocation(p.getLocation());
		pp.setpId(p.getpId());
		pp.setPname(p.getPname());
		return pp;
	}

	@Override
	public String toString() {
		return "[pid=" + pId + ", pname=" + pname + ", category=" + category + ", location=" + location + ", imgList="
				+ images;
	}
}
