import { useEffect, useState } from "react";
import Button from "../components/builder/builder-components/Button";
import styles from "../styles/Home.module.css";
import { APIaddress } from "../config";
export default function Home() {
  // fetch api key
  const [apiKey, setApiKey] = useState("");

  const fetchApiKey = async () => {
    fetch(APIaddress + "/generateKey")
      .then((res) => res.json())
      .then((data) => {
        setApiKey(data.key);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Task 2</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            width: "40%",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h1>{apiKey ? apiKey : "API KEY HERE"}</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              alignContent: "center",
              padding: "10px",
            }}
          >
            <Button
              title="Get Api Key"
              style={{
                backgroundColor: "#527CEA",
                height: "50px",
                color: "white",
              }}
              callback={() => {
                fetchApiKey();
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
