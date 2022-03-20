import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContactsList({ people }) {
  const { Cohort1, Cohort2 } = useContext(ThemeContext);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => {
        return (
          <li
            key={person.email}
            className={`col-span-1 ${
              person.cohort === "Cohort_1" ? Cohort1.bg : Cohort2.bg
            } rounded-lg shadow hover:${
              person.cohort === "Cohort_1" ? Cohort1.shadow : Cohort2.shadow
            } hover:shadow-xl duration-300 divide-y divide-gray-200`}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium truncate">
                    {`${person.fname} ${person.lname} ${new Date(
                      person.dob
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}`}
                  </h3>
                  <span
                    className={`flex-shrink-0 inline-block px-2 py-0.5 ${
                      person.cohort === "Cohort_1" ? Cohort1.text : Cohort2.text
                    } text-xs font-medium ${
                      person.cohort === "Cohort_1"
                        ? Cohort1.textBg
                        : Cohort2.textBg
                    } rounded-full`}
                  >
                    {person.cohort === "Cohort_1" ? "Cohort 1" : "Cohort 2"}
                  </span>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">
                  {person.email}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactsList;
