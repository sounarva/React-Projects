const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Submit report",
        description: "Submit the monthly sales report",
        date: "2025-06-25",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Attend meeting",
        description: "Attend the weekly team sync meeting",
        date: "2025-06-26",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests from teammates",
        date: "2025-06-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix bugs",
        description: "Fix high-priority bugs assigned in JIRA",
        date: "2025-06-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Update onboarding documentation for new hires",
        date: "2025-06-25",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team brainstorming",
        description: "Join team call to brainstorm new features",
        date: "2025-06-27",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Refactor code",
        description: "Refactor legacy modules to modern standards",
        date: "2025-06-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Create mockups",
        description: "Design UI mockups for new dashboard",
        date: "2025-06-29",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "User feedback",
        description: "Analyze feedback from last user testing round",
        date: "2025-06-23",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy release",
        description: "Deploy new app release to production",
        date: "2025-06-25",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve user login issue on mobile devices",
        date: "2025-06-22",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Perform weekly backup of the database",
        date: "2025-06-20",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Monitor metrics",
        description: "Monitor system performance metrics",
        date: "2025-06-25",
        category: "Monitoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server cleanup",
        description: "Clean up unnecessary files from staging server",
        date: "2025-06-23",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Neeraj",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Write blog post",
        description: "Write and submit the next blog article",
        date: "2025-06-30",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Research tools",
        description: "Research new productivity tools for the team",
        date: "2025-06-24",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare slides",
        description: "Prepare slides for upcoming client demo",
        date: "2025-06-26",
        category: "Presentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Demo rehearsal",
        description: "Practice the product demo with team",
        date: "2025-06-27",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];


const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
    localStorage.setItem("employees" , JSON.stringify(employees));
    localStorage.setItem("admin" , JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const employees_data = JSON.parse(localStorage.getItem("employees"));
    const admin_data = JSON.parse(localStorage.getItem("admin"));

    return ({employees_data , admin_data});
    
}