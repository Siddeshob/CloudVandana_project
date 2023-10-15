package cloudVandana;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Integer[] arr= {1,2,3,4,5,6,7,8};
		
		List<Integer> list=Arrays.asList(arr);
		
		Collections.shuffle(list);
		
		System.out.println("ShuffleArray is: "+list);

	}

}
