/*
 * Araav Nayak
 * Jan 11, 2023
 */

import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

public class ListComparer {

	public static void main(String[] args) {
		String currentSrc = "";
		String oldSrc = "";
		File current = new File(currentSrc);
		File old = new File(oldSrc);
		ArrayList<String> currentFollowers = new ArrayList<>(), oldFollowers = new ArrayList<>();;
		
		try {
			Scanner reader = new Scanner(old);
			while(reader.hasNextLine()) {
				
				String s = reader.nextLine();
				if(s.indexOf("\"") != -1) {
					if (s.indexOf(",") == -1) {
						oldFollowers.add(s.trim());
					} else oldFollowers.add(s.substring(0, s.indexOf(",")).trim());
				}
			}
			reader = new Scanner(current);
			while(reader.hasNextLine()) {
				String s = reader.nextLine();
				if(s.indexOf("\"") != -1) {
					if(s.indexOf(",") == -1) {
						currentFollowers.add(s.trim());
					} else currentFollowers.add(s.substring(0, s.indexOf(",")).trim());
				}
			}
			reader.close();
			System.out.println("Usernames of ppl that have unfollowed you since \'" + new Scanner(new File(oldSrc)).nextLine() + "\'\n" + notInOther(oldFollowers, currentFollowers));
			System.out.println();
			System.out.println("Usernames of ppl that have followed you since \'" + new Scanner(new File(oldSrc)).nextLine() + "\'\n" + notInOther(currentFollowers, oldFollowers));
		} catch(Exception e) {
			System.out.println(e.getClass() + ": " + e.getMessage());
		}
	}

	public static ArrayList<Object> notInOther(ArrayList<Object> one, ArrayList<Object> two) {
		ArrayList<Object> answer = new ArrayList<Object>();
		
		for(int outer = 0; outer < one.size(); outer++) {
			boolean found = false;
			for(int inner = 0; inner < two.size(); inner++) {
				if(two.get(inner).equals(one.get(outer))) {
					found = true;
				}
			}
			if(!found) {
				answer.add(one.get(outer));
			}
		}
		return answer;
	}		
}
