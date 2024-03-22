import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom'
import "./Tweet.css";

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  // console.log(props);

  return (
    // O link automaticamente identifica quais mudanças precisa acontecer na página entre uma rota e outra, mudando apenas o que é necessário, diferente do 'a'
    <Link to="/status" className="tweet">
      <img src="https://github.com/baakovi.png" alt="Bianca Moraes" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Bianca Moraes</strong>

          <span>@baakovi</span>
        </div>

        <p>
          {props.content}
          {/* Acabei de iniciar minha faculdade de TI! Muito nervoso e informações a
          seguir:
          <br />
          <br />
          Sala majoritariamente masculina, como é de se pensar.
          <br />
          Consegui conversar com alguns colegas de classe! Todos são gente boa. */}
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
