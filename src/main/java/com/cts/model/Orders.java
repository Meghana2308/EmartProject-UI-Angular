package com.cts.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Orders")
public class Orders {
	@Id
	@Column(name="oId")
	private int orderId;
	@Column(name="orderDate")
	private LocalDate orderDate;
	@Column(name="totalAmt")
	private Double totalAmount;
	@Column(name="discoId")
	private String discountId;
	@Column(name="discoValue")
	private Long discountvalue;
	public Orders() {
		
	}
	public Orders(int orderId, LocalDate orderDate, Double totalAmount, String discountId, Long discountvalue) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.totalAmount = totalAmount;
		this.discountId = discountId;
		this.discountvalue = discountvalue;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	public Double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public String getDiscountId() {
		return discountId;
	}
	public void setDiscountId(String discountId) {
		this.discountId = discountId;
	}
	public Long getDiscountvalue() {
		return discountvalue;
	}
	public void setDiscountvalue(Long discountvalue) {
		this.discountvalue = discountvalue;
	}
	

}
