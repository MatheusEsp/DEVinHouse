public class FizzBuzz {
    public static void main(String[] args) {
        for(int i = 0; i < 34; i++){
            if( i % 3 == 0){
                System.out.printf("Num: %d - fizz \n", i);
            }
            if (i % 5 == 0){
                System.out.printf("Num: %d - buzz \n", i);
            }
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.printf("Num: %d - FizzBuzz \n", i);
            } else {
            }
        }
    }
}
