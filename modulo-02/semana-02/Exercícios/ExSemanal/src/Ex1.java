public class Ex1 {

    public static void main(String[] args) {
        int[] arr = { 56, 57, 58, 67, 99, 12, 11, 88 };
        System.out.println("a)" + arr[0]);

        System.out.println("b)" + arr[arr.length - 1]);

        System.out.println("c)" + arr[2]);

        System.out.println("====================================");
        System.out.print("normal   invertido\n");
        for(int i = 0; i < arr.length; i++){
            System.out.printf("%d           %d\n",arr[i], arr[arr.length - i-1]);
        }

    }


}