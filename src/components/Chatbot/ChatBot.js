import axios from 'axios';
import './chatbot.scss';
import { useState } from 'react';
import { ANSWERS, EXAMPLES, QUESTIONS } from '../../helper/chatbot';

const secretKey = process.env.REACT_APP_SECRET_KEY;

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [answers, setAnswers] = useState([]);
  const [limitArray, setLimitArray] = useState(3);
  const [inputSelect, setInputSelect] = useState(false);
  const [isShowChat, setIsShowChat] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'https://api.cohere.ai/v1/classify',
      {
        model: 'embed-english-v3.0',
        inputs: [message],
        examples: EXAMPLES,
      },
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = (response.data.classifications[0]);
    setAnswers([...answers, { id: Date.now(), type: 'user', text: message }, { id: Date.now(), type: 'bot', text: ANSWERS[data?.prediction] }]);
    setInputSelect(false);
  };

  return (
    <div className='chatbot'>
      {isShowChat === true
        ? <div className='chat-container border border-dark rounded p-2 gap-2'>
            <button className='btn-chat' onClick={() => setIsShowChat(false)}>X</button>
            <p className='bg-secondary p-2 align-self-start text-white text-bot'>Hola, soy un bot preparado para contestar algunas preguntas sobre Marcos. Haceme tu pregunta.</p>
            {answers.map((answer, i) => <div key={i}className={`p-3 chat-content text-white ${answer.type === 'bot' ? 'align-self-start text-bot text-white' : 'text-end bg-primary align-self-end text-human'}`}>
              <p className='text-white'>{answer.text}</p>
            </div>)}
            {
              inputSelect
                ? <div>
                    {QUESTIONS?.map((question, i) => <div key={i}>
                      <div className='text-center' onClick={() => setMessage(question)}><p className=''>{question}</p><hr /></div>
                    </div>).splice(0, limitArray)}
                    <div className='text-center'>
                      {
                        limitArray <= 3
                          ? <button className='btn btn-outline-dark rounded' onClick={() => setLimitArray(QUESTIONS.length)}>...</button>
                          : <button className='btn btn-outline-dark rounded' onClick={() => setLimitArray(3)}>-</button>
                      }
                    </div>
                  </div>
                : ''
            }
            <form className='w-100 mb-2 mt-2' onSubmit={handleSend}>
              <div className='d-flex'>
                <input className='w-100' type='text' onFocus={() => setInputSelect(true)} value={message} onChange={e => setMessage(e.target.value)} placeholder='Quien sos?...'/>
                <button className='btn btn-primary rounded'>Enviar</button>
              </div>
            </form>
          </div>
        : <button className='btn btn-outline-dark' onClick={() => setIsShowChat(true)}>M</button>}
    </div>
  );
};

export default ChatBot;
