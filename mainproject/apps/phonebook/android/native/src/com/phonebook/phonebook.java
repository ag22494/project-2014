package com.phonebook;

import android.os.Bundle;

import com.worklight.androidgap.WLDroidGap;

public class phonebook extends WLDroidGap {
	
	@Override
	public void onCreate(Bundle savedInstanceState){
		super.onCreate(savedInstanceState);
	}
	
	/**
     * onWLInitCompleted is called when the Worklight runtime framework initialization is complete
     */
	@Override
	public void onWLInitCompleted(Bundle savedInstanceState){
		super.loadUrl(getWebMainFilePath());
		// Add custom initialization code after this line
	}
}



