package com.cts.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Payments")

public class Payment {
	@Id
	@Column(name="payId")
	private int paymentId;
	@Column(name="oId")
	private int orderId;
	@Column(name="payDate")
	private LocalDate paymentDate;
	@Column(name="payAmt")
	private int paymentAmt;
	@Column(name="payMode")
	private String paymentMode;
	public Payment() {
		
	}
	public Payment(int paymentId, int orderId, LocalDate paymentDate, int paymentAmt, String paymentMode) {
		super();
		this.paymentId = paymentId;
		this.orderId = orderId;
		this.paymentDate = paymentDate;
		this.paymentAmt = paymentAmt;
		this.paymentMode = paymentMode;
	}
	public int getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public LocalDate getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}
	public int getPaymentAmt() {
		return paymentAmt;
	}
	public void setPaymentAmt(int paymentAmt) {
		this.paymentAmt = paymentAmt;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	

}
