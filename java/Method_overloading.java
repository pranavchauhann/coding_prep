// 4. Method Overloading (real use)

// Create methods:

// area(int side)              // square
// area(int length, int breadth)  // rectangle
// area(double radius)         // circle

public class Method_overloading{

    static int area(int side){
        int area = side * side;
        return area;
    }
    static int area(int length, int breadth){
        int area = length * breadth;
        return area;
    }

    static double area(double radius){
        double area = 3.14 * radius * radius;
        return area;
    }

    
    public static void main(String[] args){
        System.out.println(area(5));
        System.out.println(area(5,6));
        System.out.println(area(3.5));
    }
}