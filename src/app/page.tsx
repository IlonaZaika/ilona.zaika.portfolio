import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilona Zaika – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column" as const,
          justifyContent: "center" as const,
          alignItems: "center" as const,
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          textAlign: "center" as const,
          fontFamily: "sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            margin: "1rem 0",
            color: "#333",
          }}
        >
          Website is under construction.
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          I'm currently working on my portfolio site.
          <br />
          If you’d like to collaborate or connect, feel free to reach out.
        </p>
        <a
          href="https://www.linkedin.com/in/ilona-zaika-a6735a116/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#0077b5",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Message me on LinkedIn
        </a>
      </main>
    </>
  );
}
