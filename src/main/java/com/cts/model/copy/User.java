package com.cts.model.copy;
public class User {
	private String userId;
	private String userName;
	private String password;
	private String email;
	private String phoneNumber;
	public User(String userId, String userName, String password, String email, String phoneNumber) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
	public User() {
		
	}
	public String getuserId() {
		return userId;
	}
	public void setuId(String userId) {
		this.userId = userId;
	}
	public String getuserName() {
		return userName;
	}
	public void setuserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getphoneNumber() {
		return phoneNumber;
	}
	public void setpNo(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	

}

}
