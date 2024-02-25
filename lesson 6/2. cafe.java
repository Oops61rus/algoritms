// B. Кафе
// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод	стандартный вывод или output.txt
// Около Петиного университета недавно открылось новое кафе, в котором действует следующая система скидок: при каждой покупке более чем на 100 рублей покупатель получает купон, дающий право на один бесплатный обед (при покупке на сумму 100 рублей и меньше такой купон покупатель не получает).
//
// Однажды Пете на глаза попался прейскурант на ближайшие N дней. Внимательно его изучив, он решил, что будет обедать в этом кафе все N дней, причем каждый день он будет покупать в кафе ровно один обед. Однако стипендия у Пети небольшая, и поэтому он хочет по максимуму использовать предоставляемую систему скидок так, чтобы его суммарные затраты были минимальны. Требуется найти минимально возможную суммарную стоимость обедов и номера дней, в которые Пете следует воспользоваться купонами.
//
// Формат ввода
// В первой строке входного файла записано целое число N (0 ≤ N ≤ 100). В каждой из последующих N строк записано одно целое число, обозначающее стоимость обеда в рублях на соответствующий день. Стоимость — неотрицательное целое число, не превосходящее 300.
//
// Формат вывода
// В первой строке выдайте минимальную возможную суммарную стоимость обедов. Во второй строке выдайте два числа K1 и K2 — количество купонов, которые останутся неиспользованными у Пети после этих N дней и количество использованных им купонов соответственно.
//
// В последующих K2 строках выдайте в возрастающем порядке номера дней, когда Пете следует воспользоваться купонами. Если существует несколько решений с минимальной суммарной стоимостью, то выдайте то из них, в котором значение K1 максимально (на случай, если Петя когда-нибудь ещё решит заглянуть в это кафе). Если таких решений несколько, выведите любое из них.



`import java.util.ArrayDeque;
import java.util.Scanner;

public class E {
    static int inf = 1000000;
    static int dp[][];
    static int a[];


    static int DP(int i, int j) {
        if (j > i) return inf;
        else {
            int res;
            int cost = a[i];
            if (j <= 0) {
                if (i >= 1) {
                    if (cost <= 100) {
                        int dif = Math.min(DP(i - 1, j + 1), DP(i - 1, j) + cost);
                        res = dif;
                    } else {
                        return DP(i - 1, j + 1);
                    }
                } else return 0;
            } else {
                if (dp[i][j] != -1) return dp[i][j];
                if (cost > 100) {
                    int dif = Math.min(DP(i - 1, j + 1), DP(i - 1, j - 1) + cost);
                    res = dif;
                } else {
                    int dif = Math.min(DP(i - 1, j + 1), DP(i - 1, j) + cost);
                    res = dif;
                }
            }
            dp[i][j] = res;
            return res;
        }
    }


    static void GOODOLDDAYS(ArrayDeque<Integer> used, int i, int j) {
        if (j < i) {
            int cost = a[i];
            if (j <= 0) {
                if (i >= 1) {
                    if (cost > 100) {
                        used.add(i);
                        GOODOLDDAYS(used, i - 1, j + 1);
                    } else {
                        boolean addi = (DP(i, j) == DP(i - 1, j + 1));
                        if (addi) {
                            used.add(i);
                            GOODOLDDAYS(used, i - 1, j + 1);
                        } else GOODOLDDAYS(used, i - 1, j);
                    }
                }
            } else {
                if (cost <= 100) {
                    boolean addi = (DP(i - 1, j + 1) == DP(i, j));
                    if (addi) {
                        used.add(i);
                        GOODOLDDAYS(used, i - 1, j + 1);
                    } else {
                        GOODOLDDAYS(used, i - 1, j);
                    }
                } else {
                    boolean addi = (DP(i - 1, j + 1) == DP(i, j));
                    if (addi) {
                        used.add(i);
                        GOODOLDDAYS(used, i - 1, j + 1);
                    } else {
                        GOODOLDDAYS(used, i - 1, j - 1);
                    }
                }
            }
        }
    }


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int k1 = 0;
        int k2 = 0;
        a = new int[n + 1];
        for (int i = 1; i <= n; i++) a[i] = scanner.nextInt();
        dp = new int[n + 1][n + 2];
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= n + 1; j++)
                dp[i][j] = -1;
        }

        int ans = inf;

        for (int i = 0; i <= n; i++) {
            if (ans >= DP(n, i)) {
                ans = DP(n, i);
                k1 = i;
            }
        }

        System.out.println(ans);

        ArrayDeque<Integer> used = new ArrayDeque<>();

        GOODOLDDAYS(used, n, k1);

        k2 = used.size();

        System.out.println(k1 + " " + k2);

        while (!used.isEmpty()) {
            System.out.print(used.removeLast() + "\\n");
        }
    }
}`