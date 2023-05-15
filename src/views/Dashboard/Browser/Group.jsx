import { ChakraProvider, Text } from "@chakra-ui/react";
import NavigationBar from "../../../components/NavigationBar";
import React, { useState } from "react";

const Group = () => {
  const [members, setMembers] = useState([
    "John Doe",
    "Jane Smith",
    "Mark Johnson",
  ]);
  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setMembers([...members, newMember]);
      setNewMember("");
    }
  };

  return (
    <>
      <ChakraProvider>
        <div id="content">
          <div className="group-page">
            <header>
              <h1>Gaming Group</h1>
            </header>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Games</a>
                </li>
                <li>
                  <a href="#">Members</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
              </ul>
            </nav>

            <section className="content">
              <h2>About Us</h2>
              <p>
                Welcome to our gaming group! We are a community of passionate
                gamers who love to play and discuss games. Join us and become
                part of the fun!
              </p>

              <div className="members-container">
                <h2>Members</h2>
                <ul className="members-list">
                  {members.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
                <div className="add-member">
                  <input
                    type="text"
                    placeholder="Enter member name"
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                  />
                  <button onClick={handleAddMember}>Add Member</button>
                </div>
              </div>
            </section>

            <footer>&copy; 2023 Gaming Group. All rights reserved.</footer>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Group;
