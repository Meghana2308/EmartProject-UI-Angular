package com.cts.model.copy;
public class Seller {
	private int sellerId;
	private String sellerName;
	private String phoneNumber;
	private String password;	
	private String brand;
	private int productId;
	public Seller() {
		
	}
	public Seller(int sellerId, String sellerName, String phoneNumber, String password, String brand, int productId) {
		super();
		this.sellerId = sellerId;
		this.sellerName = sellerName;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.brand = brand;
		this.productId = productId;
	}
	
	public int getsellerId() {
		return sellerId;
	}
	public void setsellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public String getsellerName() {
		return sellerName;
	}
	public void setsellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public String getphoneNumber() {
		return phoneNumber;
	}
	public void setphoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getproductId() {
		return productId;
	}
	public void setproductId(int productId) {
		this.productId = productId;
	}
	

}


