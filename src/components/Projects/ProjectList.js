import flower from "../../assets/flower.jpg";
import maze from "../../assets/backTrackLProject/maze.PNG";
import maze_fun from "../../assets/backTrackLProject/maze_fun.PNG";
import csvEditorDiagram from "../../assets/csvEditorProject/csvEditor_diagram.PNG"; 
import csvEditorMenu from "../../assets/csvEditorProject/csvEditor.PNG";
import csvEditorDisplay from "../../assets/csvEditorProject/csvEditor_display.PNG";
import transLog from "../../assets/csvEditorProject/TransLog_icon.svg";
import csvIcon from "../../assets/csvEditorProject/csvEditor_icon.svg";




export const ProjectList = [

    {
        image: [maze, maze_fun],
        cover: maze,
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
        cover: transLog,
        name: "Transaction Log App",
        urlName: "Project_TransactionLog",
        projectType:"personal",
        cardDescription:"A transcation logging application built with Spring framework that used CRUD operations to log transactions",
        description: "A transaction logging application built with Spring framework that uses CRUD operations to add, remove, update and display transactions. By using Mybatis, the application can dynamically update the field specified without the need for prompt or inputting items in every field. The application uses Thymeleaf to render backend compoents from MySQL database and displays it in a HTML format in the frontend. Users will be able to send POST and GET requests from the frontend as well.",
        technologiesUsed:["Java", "Spring Boot", "Spring MVC", "Mybatis", "Thymeleaf", "Lombok", "MySQL", ],
        
    },
    {
        image: [csvEditorMenu, csvEditorDisplay, csvEditorDiagram],
        cover: csvIcon,
        name: "CSV Editor",
        urlName: "csv_Editor",
        projectType:"course",
        description: "A simple CSV file editor that allows user to view and make quick changes. It allows the user to load CSV files with any delimiter they want and view the file with delimiter attached. It also have features that allow the user to display a specify row, column or item.",
        cardDescription:"A simple CSV file editor that allows user to view and make quick changes. It can also display or edit a specify item",
        skills: ["Python Tkinter GUI", "CSV file reading, parsing and saving", "CSV file editing and displaying", "UML Diagram", "Software Design Documentation"],
        technologiesUsed:["Python", "Python Tkinter"],

    },
    {
        image: [""],
        cover: "",
        name: "Project 4",
        urlName: "Project2",
        projectType:"personal",
        description: "4th Project fajfkja",
        skills: ["Flower", "Tree"],
        technologiesUsed:["C"]
    },
    {
        image: [""],
        cover: "",
        name: "Project 5",
        urlName: "Project_course",
        projectType:"course",
        description: "aaaaaaaaaaaaaaaaaaaaa",
        skills: ["Flower", "Tree"],
        technologiesUsed:["Java"]
    }





]