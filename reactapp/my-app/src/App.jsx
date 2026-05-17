
// import Props from "./Component/Props/Props";
import UseEffect from "./assets/Component/Hooks/UseEffect.jsx";
import UseState from "./assets/Component/Hooks/UseState.jsx";


// import StudentCard from "./Lab/Exp7/StudentCard";
// import Count from "./Lab/Exp8/Count";




function App() {
/*   const students = [
    { name: "Abhay", rollno: "250B1034", course: "B.Tech" },
    { name: "Vikas", rollno: "250B1035", course: "MCA" },
    { name: "Rahul", rollno: "250B1036", course: "BCA" }
  ]; */

  return (
    <>
    {/* <Props name="Abhay" rollno="250B1034" course="B.Tech"/> */}
    {/* for multiple data */}
    {/* <Props students={students} /> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}

    {/* //Experiment 07 */}
      {/*  <h1>Student Information System</h1>
      <div className="student-container">
        <StudentCard name="Monika" course="B.Tech Data Science" marks="95" />
        <StudentCard name="Rahul" course="B.Tech CS" marks="88" />
        <StudentCard name="Sneha" course="B.Tech IT" marks="92" />
      </div> */}

      {/* Experiment 08 */}
      {/* <Count/> */}
      <UseEffect/>
      <UseState/>

 

    
   
   
    </>
  );
}

export default App;