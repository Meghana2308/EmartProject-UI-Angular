package com.cts.model.copy;
public class Category {
	private int categoryId;	
	private String categoryName;
	private int gstPercentage;
	public Category() {
		
	}
	public Category(int categoryId, String categoryName, int gstPercentage) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.gstPercentage = gstPercentage;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public int getGstPercentage() {
		return gstPercentage;
	}
	public void setGstPercentage(int gstPercentage) {
		this.gstPercentage = gstPercentage;
	}
}
	


