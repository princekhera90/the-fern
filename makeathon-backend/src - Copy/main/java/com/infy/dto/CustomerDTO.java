package com.infy.dto;

import com.infy.entity.Address;
import com.infy.entity.Customer;

public class CustomerDTO {

	private String email;
	private String companyName;
	private String password;
	private long phoneNo;
	private AddressDTO address;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public AddressDTO getAddress() {
		return address;
	}

	public void setAddress(AddressDTO address) {
		this.address = address;
	}

	
	
	@Override
	public String toString() {
		return "CustomerDTO [phoneNo=" + phoneNo + ", email=" + email + ", companyName=" + companyName + ", password="
				+ password + ", phoneNo=" + phoneNo + ", address=" + address.toString() + "]";
	}

	// Converts Entity into DTO
	public static CustomerDTO valueOf(Customer cust) {

		CustomerDTO custDTO = new CustomerDTO();

		custDTO.setEmail(cust.getEmail());
		custDTO.setCompanyName(cust.getCompanyName());
		custDTO.setPassword(cust.getPassword());
		custDTO.setPhoneNo(cust.getPhoneNo());

		AddressDTO addressDTO = new AddressDTO();
		addressDTO.setStreet(cust.getAddress().getStreet());
		addressDTO.setArea(cust.getAddress().getArea());
		addressDTO.setCountry(cust.getAddress().getCountry());
		addressDTO.setState(cust.getAddress().getCountry());
		addressDTO.setPincode(cust.getAddress().getPincode());

		custDTO.setAddress(addressDTO);
		return custDTO;
	}

	// Converts DTO into Entity
	public Customer createEntity() {
		Customer cust = new Customer();

		cust.setEmail(this.getEmail());
		cust.setCompanyName(this.getCompanyName());
		cust.setPassword(this.getPassword());
		cust.setPhoneNo(this.getPhoneNo());

		Address addressEntity = new Address();
		addressEntity.setArea(this.getAddress().getArea());
		addressEntity.setCountry(this.getAddress().getCountry());
		addressEntity.setPincode(this.getAddress().getPincode());
		addressEntity.setState(this.getAddress().getState());
		addressEntity.setStreet(this.getAddress().getStreet());
		
		cust.setAddress(addressEntity);

		return cust;
	}

}
