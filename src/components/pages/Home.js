import React, { useState, useEffect } from "react";
import ContactsList from "../ContactsList";
import ThemeContextProvider from "../../context/ThemeContext";

function Home() {
  const [studentData, setStudentData] = useState([]);

  const endpoint = "https://622f9a88f113bfceed3d057a.mockapi.io/api/student";

  const getPeople = () => {
    fetch(endpoint)
      .then((retVal) => retVal.json())
      .then((retVal) => {
        setStudentData(retVal);
      });
  };
  useEffect(() => {
    getPeople();
  }, []);

  // const getPeople = async () => {
  //   console.log('entered')
  //   const response = await fetch(
  //     `https://622f9a88f113bfceed3d057a.mockapi.io/student`
  //   );
  //   const data = await response.json();
  //   console.log(data)

  //   setStudentData(data);
  // };
  // useEffect(() => {
  //   getPeople();
  // },[]);

  const output = () => {
    console.log(studentData);
    studentData.map((student) => {
      return student.fname;
    });
  };

  // const people = [
  //   {
  //     firstName: "Javaughn ",
  //     lastName: "Bailey",
  //     dob: "11/12/2021",
  //     cohort: "Cohort 1",
  //     email: "janecooper1@example.com",
  //     phone: "+1-202-555-0170",
  //   },
  //   {
  //     firstName: "Akeem ",
  //     lastName: "Henry",
  //     dob: "02/09/2021",
  //     cohort: "Cohort 1",
  //     email: "janecooper2@example.com",
  //     phone: "+1-202-555-0170",
  //   },
  //   {
  //     firstName: "Turay",
  //     lastName: "Shippy",
  //     dob: "11/12/2021",
  //     cohort: "Cohort 2",
  //     email: "janecooper3@example.com",
  //     phone: "+1-202-555-0170",
  //   },
  //   {
  //     firstName: "Ranold",
  //     lastName: "Hector",
  //     dob: "11/12/2021",
  //     cohort: "Cohort 2",
  //     email: "janecooper4@example.com",
  //     phone: "+1-202-555-0170",
  //   },
  // ];
  return (
    <div className="p-10">
      {/* {output()} */}

      <ThemeContextProvider>
        <ContactsList people={studentData} />
      </ThemeContextProvider>
    </div>
  );
}

export default Home;
