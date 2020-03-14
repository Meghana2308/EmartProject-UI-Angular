package com.cts.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Sellers")
public class Seller {
	@Id
	@Column(name="sId")
	private int sellerId;
	@Column(name="sName")
	private String sellerName;
	@Column(name="pNo")
	private String phoneNumber;
	@Column(name="password")
	private String password;
	@Column(name="brand")
	private String brand;
	@Column(name="pId")
	private int productId;
	public Seller() {
		
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
	public Seller(int sellerId, String sellerName, String phoneNumber, String password, String brand, int productId) {
		super();
		this.sellerId = sellerId;
		this.sellerName = sellerName;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.brand = brand;
		this.productId = productId;
	}
	

}
