import React from "react";

function Member() {
  const Students = [
    "Samual Keleb",
    "Robel Teshome",
    "Ruth Tadesse",
    "Ruth Zenabu",
    "Salahuddin Hafiz",
    "Salem Habte",

    "Rediet Belay",
    "Seid Yesuf",
    "Solomon Sheleme",
    "Surafel Nigusie",
    "Nathan Israel",
    "Natinael Wondimagegnehu",
    "Olbia Letta",
    "Temesgen Getye",
    "Osman Hassan",
    "Rahel Belay",
  ];

  const Studentsmap = Students.map((name, index) => (
    <p className="font-bold mb-1 ml[10%]" key={index}>
      Student {index + 1}: {name}
    </p>
  ));

  return <div className="stud">{Studentsmap}</div>;
}

export default Member;
