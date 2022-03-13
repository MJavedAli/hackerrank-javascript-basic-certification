# hackerrank-javascript-basic-certification

![image](https://user-images.githubusercontent.com/30997178/158071495-6929e045-2e4f-4219-949d-c34bdce92092.png)

## 1. JavaScript: Champions League Teams

    In this challenge, the given REST API cDntains information about football matcnes played in the 
    years 2011-2015.

    Given a year and integer k, denoting the minimum number of matchE's we are interested in, your task 
    is to use the API to get the names of teams that played at least k matches in the given year in the 
    competition named UEFA Champions League. The names must be returned as an array and Drdered in 
    ascending order.

    The given API uses pagination to return tne data divided into pages. Fetching the whole data 
    available on the API requires multiple requests.

    To get a single page of matches played in UEFA Champions League in the given year, perform HTTP GET 
    request to: https://jsonmock.hackerrank.com/api/footballs matches? 
    competition=UEFA9ti20Champions9620League&y ear=«year»&page=«pageNumber»
    where <year> denotes the year of the match and
    <pageNumber>  is an integer denoting the page of the results we are requesting.

## 2. JavaScript: Weekday Text

    Implement the function weekdayText such that:

    •   It takes a singlé argument.  weekdays,.which is an array of string
    •  It returns'a new function that called getText that takes a single integer argument. number, and 
    does the following.
          a.  It returns the value from theweekdays array at
              that 0-based index number.

          b.   If number is out of range, the function throws an Error object 
              with the message of 'Invalid weekday number'.
