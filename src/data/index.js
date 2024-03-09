const data = {
  announcements: [
    {
      title: "Outing schedule for every deployment",
      timeElapsed: "5 Minutes ago",
    },
    { title: "Meeting HR Department", timeElapsed: "Yesterday, 12:30 PM" },
    { title: "IT Department need two more talents for UX/UI Designer position", timeElapsed: "Yesterday, 09:15 AM" },

  ],
  upcomingSchedule:{
    priority:[{title:"Review candidate applications", timeElapsed: "5 Minutes ago"}],
    other:[{title:"Interview with candidates", timeElapsed: "Today - 10:30 AM"}, 
    {title:"Short meeting with product designer from IT Departement", timeElapsed: "Today - 09.15 AM"}],
  },
  employeeStats:{
    positionsAvail:{count:24, urgentNeeded:4},
    jobOpen:{count:10, activeHiring:4},
    newEmployees:{count:24, department:4},
    totalEmployees:{count:216,men:120,women:96,growth:'+2%'},
    talentRequest:{count:16,men:6,women:10, growth:'+5%'},

  }
};
export default data
