package com.cts.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="OrderDetails")
public class OrderDetails {
	@Id
	@Column(name="oId")
	private int orderId;
	@Column(name="pId")
	private int productId;
	@Column(name="qty")
	private String quantity;
	@Column(name="price")
	private long price;
	@Column(name="totalAmt")
	private Double totalAmount;
	public OrderDetails() {
		
	}
	public OrderDetails(int orderId, int productId, String quantity, long price, Double totalAmount) {
		super();
		this.orderId = orderId;
		this.productId = productId;
		this.quantity = quantity;
		this.price = price;
		this.totalAmount = totalAmount;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public Double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
	

}
