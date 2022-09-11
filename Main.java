// Araav Nayak
// 09/10/2022 5pm

import java.util.Scanner;

public class Main {
    
    private static Scanner s;
	
    public static void main(String[] args) {
        s = new Scanner(System.in);
        String a = s.nextLine();
        String b = s.nextLine();
        String[] list1 = makeList(a);
        String[] list2 = makeList(b);
        
        String[] list = differentiateLists(list1, list2);
        System.out.println(list.length + " item(s) present in the first but not the second list:");
        printArray(list);
    }
    
    public static String[] differentiateLists(String[] list1, String[] list2) {
    	int count = 0;
    	boolean b = false;
    	for(int i = 0; i < list2.length; i++) {
    		for(int j = 0; j < list1.length; j++) {
    			if(list2[i].equals(list1[j])) {
    				b = false;
    				break;
    			} else b = true;
    		}
    		if(b) {
    			count++;
    			b = false;
    		}
    	}   	

    	String[] ans = new String[count];
    	boolean addToList = false;
    	int currInd = 0;
    	
    	for(int i = 0; i < list2.length; i++) {
    		for(int j = 0; j < list1.length; j++) {
    			if(list2[i].equals(list1[j])) {
    				addToList = false;
    				break;
    			} else addToList = true;
    		}
    		if(addToList) {
    			ans[currInd] = list2[i];
    			currInd++;
    			addToList = false;
    		}
    	}
    	return ans;
    }
    
    
    public static String[] makeList(String list1) {
        String[] list = new String[returnFreq(list1, "'s profile picture")];
        int currInd = 0;
        while(list1.indexOf("'s profile picture") != -1) {
            int i = list1.indexOf("'s profile picture");
            String currUser = list1.substring(0, i);
            if(currUser.lastIndexOf(" ") != -1) currUser = currUser.substring(currUser.lastIndexOf(" ") + 1, i);
            
            list[currInd] = currUser;
            currInd++;
            list1 = list1.substring(list1.indexOf("'s profile picture") + 20 + currUser.length());
        }
        return list;
    }
    
    
    public static void printArray(String[] arr) {
    	for(int i = 0; i < arr.length; i++){
    		System.out.println(arr[i]);
    	}
    }
    
    
    public static int returnFreq(String s, String q) {
        int count = 0;
        while(s.indexOf(q) != -1) {
            count++;
            s = s.substring(s.indexOf(q)+1);
        }
        return count;
    }
}
