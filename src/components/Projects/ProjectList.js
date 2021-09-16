import tree from "../../assets/tree.jpg";
import flower from "../../assets/flower.jpg";
import tree2 from "../../assets/tree2.jpg"


export const ProjectList = [

    {
        image: [tree, tree2, flower],
        name: "Backtracking",
        urlName: "Project_Backtrack",
        projectType:"learn",
        cardDescription:"A backtracking algorithm learning project about how the algorithm works",
        description: "This is a learning project about backtracking algorithm. Backtracking algorithm is an useful algorithm for solving problems like Sudoku and Maze puzzles due to the fact that it uses recursions to solve for the next cell base on the previous cell.",
        skills: ["Backtracking algorithm", "How recursion works in a backtracking algorithm", "Using backtracking algorithm on Sudoku by trying all numbers in each cell"],
        technologiesUsed:["Python"],
    },
    {
        image: [flower],
        name: "Project 2",
        urlName: "Project1",
        projectType:"personal",
        description: "Flower Project!!",
        technologiesUsed:["Python"],
        
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
    }


]