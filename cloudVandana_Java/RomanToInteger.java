package cloudVandana;

public class RomanToInteger {

	public static int RomanTo(String s)
	{
		int result=0;
		for(int i=0;i<s.length();i++)
		{
			char nextChar=s.charAt(i);
			int CurrentValue=getValue(nextChar);
			
			if(i<s.length()-1)
			{
				char newChar=s.charAt(i+1);
				int naxtValue=getValue(newChar);
				
				if(CurrentValue<naxtValue)
				{
					result-=CurrentValue;
				}
				else
				{
					result+=CurrentValue;
				}
			}
			else
			{
				result+=CurrentValue;
			}
		}
		return result;
	}
	public static int getValue(char c)
	{
		switch (c) 
		{
			case 'I': return 1;
			case 'V': return 5;
			case 'X': return 10;
			case 'L': return 50;
			case 'C': return 100;
			case 'D': return 500;
			case 'M': return 1000;
		
			default:return 0;	
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String num="IX";
		
		System.out.print(RomanTo(num));
		

	}

}
