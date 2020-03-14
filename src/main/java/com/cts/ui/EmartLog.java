package com.cts.ui;

import org.apache.log4j.Logger;

import java.io.*;


public class EmartLog{

   /* Get actual class name to be printed on */
   static Logger log = Logger.getLogger(EmartLog.class.getName());
   
   public static void main(String[] args){
      log.debug("Hello welcome to emart ");
      log.info("Hello welcome to emart services");
   }
}