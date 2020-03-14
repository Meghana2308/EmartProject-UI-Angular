package com.cts.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User {
	@Id
	@Column(name="uId")
	private String userId;
	@Column(name="uName")
	private String userName;
	@Column(name="password")
	private String password;
	@Column(name="email")
	private String email;
	@Column(name="pNo")
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
