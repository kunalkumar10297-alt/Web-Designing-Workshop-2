import React from "react";

const StudentDashboard = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "30px",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh",
      fontFamily: "Arial",
    },

    title: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#333",
    },

    wrapper: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    },

    card: {
      backgroundColor: "white",
      width: "260px",
      padding: "20px",
      border: "2px solid #4a90e2",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "0.3s",
    },

    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #4a90e2",
      marginBottom: "10px",
    },

    name: {
      margin: "10px 0",
      color: "#222",
    },

    info: {
      fontSize: "15px",
      color: "#555",
      margin: "5px 0",
    },

    span: {
      fontWeight: "bold",
    },
  };

  const StudentCard = ({ image, name, course, cgpa }) => {
    return (
      <div style={styles.card}>
        <img src={image} alt={name} style={styles.image} />

        <h2 style={styles.name}>{name}</h2>

        <p style={styles.info}>
          <span style={styles.span}>Course:</span> {course}
        </p>

        <p style={styles.info}>
          <span style={styles.span}>CGPA:</span> {cgpa}
        </p>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Profile Dashboard</h1>

      <div style={styles.wrapper}>
        <StudentCard
          image="https://via.placeholder.com/150"
          name="Rahul Sharma"
          course="B.Tech Computer Science"
          cgpa="8.7"
        />

        <StudentCard
          image="https://via.placeholder.com/150"
          name="Priya Verma"
          course="BCA"
          cgpa="9.1"
        />
      </div>
    </div>
  );
};

export default StudentDashboard;