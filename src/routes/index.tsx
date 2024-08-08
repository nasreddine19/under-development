import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Nasreddine Boudellal</Title>
      <h1>Welcome to Nasreddine Boudellal's Portfolio</h1>
      <h4>This site is currently under development.</h4>
      <p>
      Thank you for visiting! I'm currently working on creating an amazing portfolio to showcase my work. Please check back soon to see the updates.
      </p>
      <Counter />
      <p>
        In the meantime, feel free to connect with me on{" "}
        <a href="https://www.linkedin.com/in/n-boudellal/" target="_blank">
          LinkedIn.
        </a>{" "}
      </p>
    </main>
  );
}
