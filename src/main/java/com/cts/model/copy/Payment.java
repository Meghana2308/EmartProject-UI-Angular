package com.cts.model.copy;

import java.time.LocalDate;
public class Payment {
	private int paymentId;
	private int orderId;
	private LocalDate paymentDate;
	private int paymentAmt;
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


