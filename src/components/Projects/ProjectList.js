import tree from "../../assets/tree.jpg";
import flower from "../../assets/flower.jpg";
import tree2 from "../../assets/tree2.jpg";
import maze from "../../assets/backtrackLproject/maze.PNG";
import maze_sum from "../../assets/backtrackLproject/maze_sum.PNG";
import maze_fun from "../../assets/backtrackLproject/maze_fun.PNG";


export const ProjectList = [

    {
        image: [maze, maze_fun],
        name: "Backtracking",
        urlName: "Project_Backtrack",
        projectType:"learn",
        cardDescription:"A backtracking algorithm learning project about how the algorithm works",
        description: "This is a learning project about backtracking algorithm. Backtracking algorithm is an useful algorithm for solving problems like Sudoku and Maze puzzles due to the fact that it uses recursions to solve for the next cell base on the previous cell.",
        skills: ["Backtracking algorithm", "How recursion works in a backtracking algorithm", "Using backtracking algorithm to solve a Sudoku board", "Using backtracking algorithm to solve a maze"],
        technologiesUsed:["Python"],
    },
    {
        image: [flower],
        name: "Transaction Log App",
        urlName: "Project_TransactionLog",
        projectType:"personal",
        cardDescription:"A transcation logging application built with Spring framework that used CRUD operations to log transactions",
        description: "A transaction logging application built with Spring framework that uses CRUD operations to add, remove, update and display transactions. By using Mybatis, the application can dynamically update the field specified without the need for prompt or inputting items in every field. The application uses Thymeleaf to render backend compoents from MySQL database and displays it in a HTML format in the frontend. Users will be able to send POST and GET requests from the frontend as well.",
        technologiesUsed:["Java", "Spring Boot", "Spring MVC", "Mybatis", "Thymeleaf", "Lombok", "MySQL", ],
        
    },
    {
        image: [""],
        name: "Tree",
        urlName: "Project2",
        projectType:"learn",
        description: "3rd Project Lol",
        cardDescription:"3rd Projects on card",
        skills: ["Flower", "Tree"],
        technologiesUsed:["Java"],

    },
    {
        image: [""],
        name: "Project 4",
        urlName: "Project2",
        projectType:"personal",
        description: "4th Project fajfkja",
        skills: ["Flower", "Tree"],
        technologiesUsed:["C"]
    },
    {
        image: [""],
        name: "Project 5",
        urlName: "Project_course",
        projectType:"course",
        description: "aaaaaaaaaaaaaaaaaaaaa",
        skills: ["Flower", "Tree"],
        technologiesUsed:["Java"]
    }





]