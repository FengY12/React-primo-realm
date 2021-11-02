import csvEditorDiagram from "../../assets/csvEditorProject/csvEditor_diagram.PNG"; 
import csvEditorMenu from "../../assets/csvEditorProject/csvEditor.PNG";
import csvEditorDisplay from "../../assets/csvEditorProject/csvEditor_display.PNG";
import transLog from "../../assets/transactionLogProject/TransLog_icon.svg";
import csvIcon from "../../assets/csvEditorProject/csvEditor_icon.svg";
import bankingIcon from "../../assets/bankingSystem/bankingSystem_icon.svg";
import bankingTest from "../../assets/bankingSystem/banking_test.PNG";
import bankingTDD from "../../assets/bankingSystem/banking_tdd.PNG";
import bankingUML from "../../assets/bankingSystem/banking_uml.jpg";



import transLogIndex from "../../assets/transactionLogProject/transLog_index.PNG";
import transLogViewSpecific from "../../assets/transactionLogProject/transLog_viewS.PNG";
import transLogAdd from "../../assets/transactionLogProject/transLog_add.PNG";


import projectChatChat from "../../assets/chatAppProject/projectChat_chat.PNG";
import projectChatLogin from "../../assets/chatAppProject/projectChat_login.PNG";
import projectChatReg from "../../assets/chatAppProject/projectChat_reg.PNG";
import projectChathomeRoom from "../../assets/chatAppProject/projectChat_homeRoom.PNG";
import projectChatDB from "../../assets/chatAppProject/projectChat_db.PNG";
import chatAppIcon from "../../assets/chatAppProject/chatApp_logo.svg";

import blenderIcon from "../../assets/blenderProject/blender_icon.svg";
import blenderMenu from "../../assets/blenderProject/blender_menu.PNG";
import blenderGrid from "../../assets/blenderProject/blender_grid.PNG";
import blenderTriangle from "../../assets/blenderProject/blender_triangle.PNG";
import blenderDiamond from "../../assets/blenderProject/blender_diamond.PNG";




export const ProjectList = [
    {
        image: [transLogIndex, transLogViewSpecific, transLogAdd],
        cover: transLog,
        name: "Transaction Log App",
        urlName: "transactionLog",
        projectType:"personal",
        skills: ["Uses Maven project structure for Spring Application", "Uses MVC pattern for seperation of entities/ layers", "Create controllers using Spring to handle CRUD and page rendering requests","Uses Mybatis for dynamic SQL query", "Uses Postman for request process testing", "Uses Thymeleaf for dynamic page rendering"],
        cardDescription:"A transcation logging application built with Spring framework that uses CRUD operations to log transactions",
        description: "A transaction logging application built with Spring framework that uses CRUD operations to add, remove, update and display transactions. By using Mybatis, the application can dynamically update the field specified without the need for prompt or inputting items in every field. The application uses Thymeleaf to render backend compoents from MySQL database and displays it in a HTML format in the frontend. Users will be able to send POST and GET requests from the frontend as well",
        technologiesUsed:["Java", "Spring Boot", "Spring MVC", "Mybatis", "Thymeleaf", "Lombok", "MySQL", "Maven", "Postman"],
        github: "https://github.com/Fengyzh/Transaction-Log-System"
    },

    {
        image: [blenderMenu, blenderGrid, blenderTriangle, blenderDiamond],
        cover: blenderIcon,
        name: "Object Pattern Generator Add-on",
        urlName: "blenderproject",
        projectType:"personal",
        skills: ["Uses Blender Python API for access to objects in Blender", "Creates a simple user interface allowing users to generate patterns in one click", "Uses object data for pattern generation allowing a non-destructive workflow", "Integrates adjustment window using Blender to reflect user adjustments in real-time"],
        cardDescription:"A Blender add-on that uses Blender Python API to generate different types of pattern based on the active object",
        description: "A Blender add-on that uses Blender's Python API to generate different types of pattern based on the active object. The add-on features a variety of patterns, ranging from a simple grid like pattern to a diamond or a triangular pattern. Additionally, the add-on uses object data for pattern generations instead of permanent manipulation which makes a non-destructive workflow possible. It also allows the user to adjust specific elements such as separation distance and amount based on the pattern chosen. Since this is a Blender add-on all the adjustments are reflected in the viewport in real time.",
        technologiesUsed:["Python", "Blender Python API"],
        github: "https://github.com/Fengyzh/Blender-Pattern-Generator"
    },

    {
        image: [csvEditorMenu, csvEditorDisplay, csvEditorDiagram],
        cover: csvIcon,
        name: "CSV Editor",
        urlName: "csv_editor",
        projectType:"course",
        description: "A simple CSV file editor built with Python that allows user to view and make quick changes. It allows the user to load CSV files with any delimiter they want and view the file with delimiter attached. It also have features that allow the user to display a specific row, column or item. Other than displaying and editing, users can also load/ save files with a click of a button",
        cardDescription:"A simple CSV file editor built with Python that allows user to view and make quick changes. It can also display or edit a specific item",
        skills: ["Python Tkinter GUI", "CSV file reading, parsing and saving", "CSV file editing and displaying", "UML Diagram", "Software Design Documentation"],
        technologiesUsed:["Python", "Python Tkinter"],

    },
    {
        image: [bankingTest, bankingTDD, bankingUML],
        cover: bankingIcon,
        name: "Banking System",
        urlName: "banking_system",
        projectType:"course",
        cardDescription:"A banking system application developed using TDD that simulates the different kind of transactions in a normal banking system",
        description: "A banking system application that simulates the function of a normal banking system. The application is developed using TDD (Test Driven Development) with Junit. The application contains many features that simulate the operations of a bank, ranging from creating, deposting and withdrawing to validation of inputs and pass time simulation",
        skills: ["Used concepts of clean code and polymorphism to reduce duplicated code, and improved code quality by eliminating mutants", "Used Junit for unit testing and development", "Created UML Diagram for the application", "Integrated CI Pipeline on GitLab for code quality and mutant report"],
        technologiesUsed:["Java", "GitLab"]
    },
    {
        image: [projectChatLogin,projectChatReg,projectChathomeRoom, projectChatChat, projectChatDB],
        cover: chatAppIcon,
        name: "Chatting Application",
        urlName: "chatapp",
        projectType:"course",
        cardDescription:"A live chatting website built with Node JS for quick temporary chat rooms. It also features an encrypted user anthentication system",
        description: "A live chatting website built with Node JS for quick temporary chat rooms. It features an encrypted user anthentication system using Bcrypt. The application mainly uses Express as the back-end for request handling and SQL connection and Socket.io for the live chat capability",
        skills: ["Set up SQL database using XAMMP and MySQL", "Used Express for the back-end", "Used EJS template engine to render contents dynamically", "Used Bcrypt to encrypt user and room passwords", "Used Socket.io for live chatting between users"],
        technologiesUsed:["Node JS", "Express", "Bcrypt", "MySQL", "Socket.io", "EJS"]
    }





]