import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        //reading input for principal
        Scanner sc = new Scanner(System.in);
        System.out.print("Principal: ");
        int principal = sc.nextInt();
        
        //reading input for Annual intrest
        System.out.print("Annual Intrest Rate: ");
        float air = sc.nextFloat();

        //reading input for years
        System.out.print("Period (years): ");
        int Period = sc.nextInt();

        //printing Mortrage value
        float result = (principal * air * Period)/100;
        System.out.print("Mortrage : $" + result);

        sc.close();
    }
}