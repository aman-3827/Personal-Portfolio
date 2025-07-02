// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "./Particle";
// import laptopImg from "../Assets/about.png";
// import token from "../Assets/tokens.png";
// import mask from "../Assets/mask.png";
// import bert from "../Assets/bert.png";
// import nsp from "../Assets/nsp.png";
// import demo1 from "../Assets/demo1.png";
// import demo2 from "../Assets/demo2.png";
// import { ImPointRight } from "react-icons/im";

// function Capstone() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Capstone Project<strong className="purple"> Chatbot for College</strong>
//             </h1>
//             <br></br>
//             <p style={{ textAlign: "justify" }}>
//             <b><strong className="purple">Problem Statement:</strong></b> The problem statement of chatbot system that can simulate human interaction and behavior to proficiently handle customer inquiries, provide service and support as well as automate mundane tasks.
//             <br></br>
//             <br></br>
//             <b><strong className="purple">Scope:</strong></b> At the core of chatbot technology is the ability to effectively simulate human interaction and behavior to help people to easily access the information and tools that they require. This includes providing customer service, automated responses, and sophisticated dialogue agents that can accurately answer user queries.
//             <br></br>
//             <br></br>
//             <b><strong className="purple">Objectives:</strong></b> 
//             <ul>
//               <li><strong class="purple">Improve student engagement:</strong> A chatbot can be designed to engage with students and provide them with personalized assistance, such as answering their questions about courses, schedules, and campus life.</li>
//               <li><strong class="purple">Support student success:</strong> A chatbot can provide academic and non-academic support to students, such as helping them with study strategies, alerting them about important deadlines, and connecting them with campus resources.</li>
//               <li><strong class="purple">Provide 24/7 support:</strong> A chatbot can provide round-the-clock support to students, faculty, and staff, helping them with their questions and concerns at any time of the day or night.</li>
//               <li><strong class="purple">Gather feedback:</strong> A chatbot can be used to gather feedback from students and faculty, such as through surveys or polls, to improve the quality of services and programs offered by the college.</li>
//             </ul>
//             </p>
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <div style={{ height: '2px', backgroundColor: 'purple' }}></div>
//         <br></br>
//         <h1 className="project-heading">
//         Chatbot <strong className="purple"> Methodology </strong>
//         </h1>
//         <br></br>
//         There are several methods for creating a chatbot using Python and machine learning. Some popular approaches include:
//         <br></br>
//         <br></br>
//         <p>
//           <font size="4">
//           <ul>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Rule-based Chatbots </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This approach uses a set of pre-defined rules to determine the response to a user input. The chatbot is programmed with a list of possible inputs and the corresponding responses.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Retrieval-based Chatbots </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This approach uses a database of pre-written responses, and the chatbot selects the best response based on the user's input. The selection is made based on the similarity of the user input to the pre-written responses.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Generative Chatbots </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This approach uses machine learning algorithms such as deep learning and neural networks to generate a response to a user's input. The chatbot is trained on a large dataset of text and learns to generate a response based on the input.
//               </span>
//             </li>
//           </ul>
//           </font>
//         </p>
//         <br></br>
//         <br></br>
//         <div style={{ height: '2px', backgroundColor: 'purple' }}></div>
//         <br></br>
//         <h1 className="project-heading">
//           Functional <strong className="purple">Requirements </strong>
//         </h1>
//         <br></br>
//         The most important requirements expected in a chatbot are:
//         <br></br>
//         <br></br>
//         <p>
//           <font size="4">
//           <ul>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Natural language processing </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The chatbot should be able to understand and respond to human language inputs in a natural way.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Dialogue management </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The chatbot should be able to manage a conversation and maintain context between multiple exchanges with a user.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Knowledge base </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The chatbot should have access to a knowledge base that it can use to generate responses to user queries.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Error handling </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The chatbot should be able to handle errors gracefully and provide helpful responses to users in case of any failure or unexpected behavior.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Security </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The chatbot should be designed with security in mind and should implement measures to protect sensitive information and user data.
//               </span>
//             </li>
//             <br></br>
//             <li className="about-activity">
//               <ImPointRight style={{ verticalAlign: "middle" }} />
//               &nbsp;&nbsp; <strong className="purple"> Integration with external systems </strong>
//               <br />
//               <span style={{ display: "inline-block", verticalAlign: "middle" }}>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The chatbot should be able to integrate with systems, such as databases, APIs, or third-party services, to retrieve information and perform actions.
//               </span>
//             </li>
//           </ul>
//           </font>
//         </p>
//         <br></br>
//         <br></br>
//         <div style={{ height: '2px', backgroundColor: 'purple' }}></div>
//         <br></br>
//         <h1 className="project-heading">
//           <strong className="purple">BERT</strong> Model
//         </h1>
//         <p style={{ textAlign: "justify" }}>
//         <br></br>
//           <b><strong className="purple">Description:</strong></b> BERT is a transformers model pretrained on a large corpus of English data in a self-supervised fashion. The BERT model contains 24 layers of encoders. Each encoder consists of 4 processes. The input token embeddings and positional embeddings are summed together. The summed vectors are passed through the multi-head self-attention sublayer. This allows the model to attend to the relationship between different tokens in the sequence. The output of the self-attention is then passed through the feed-forward network sublayer. This introduces non-linearity and projects the vectors into a higher dimensional space. The output of the feed-forward network is the contextualized representation of the input at this layer. This representation is then passed to the next encoder layer, where the process is repeated. The representation becomes more and more contextual with each layer.
//         </p>
//         <img src={bert} alt="bert" className="img-fluid" style={{ maxWidth: "50%" }} />
//         <br></br>
//         <br></br>
//         <p style={{ textAlign: "justify" }}>
//           <b><strong className="purple">Whole Word Masking:</strong></b> A certain percentage of words in the input sequence are masked at random and the model is trained to predict their original values. By masking entire words, the model can capture more contextual information around the masked word, including the surrounding words and their relationships. It is used to generate words that make more sense in a particular context.
//         </p>
//         <img src={mask} alt="mask" className="img-fluid" style={{ maxWidth: "50%" }} />
//         <br></br>
//         <br></br>
//         <p style={{ textAlign: "justify" }}>
//           <b><strong className="purple">Next Sentence Prediction:</strong></b> The NSP task involves taking pairs of sentences as input and predicting whether the second sentence is the immediate successor of the first sentence in each text. During training, the BERT model is fed pairs of sentences along with a binary label indicating whether they are consecutive or not.
//         </p>
//         <img src={nsp} alt="nsp" className="img-fluid" style={{ maxWidth: "50%" }} />
//         <br></br>
//         <br></br>
//         <p style={{ textAlign: "justify" }}>
//           <b><strong className="purple">Tokenization:</strong></b> Tokenization is the process of breaking down a text into smaller units called tokens. BERT uses WordPiece tokenization, which splits words into subwords and may further divide subwords into characters. Here's an example of how tokenization works in BERT:
//         </p>
//         <img src={token} alt="token" className="img-fluid" style={{ maxWidth: "50%" }} />
        
//         <br></br>
//         <br></br>
//         <div style={{ height: '2px', backgroundColor: 'purple' }}></div>
//         <br></br>
//         <h1 className="project-heading">
//           <strong className="purple">DEMO</strong> of Chatbot
//         </h1>
//         <br></br>
//         <h5 style={{ textAlign: "justify" }}>Below is the main interface of the chatbot where user interaction is done:</h5>
//         <br></br>
//         <img src={demo1} alt="demo1" className="img-fluid" style={{ maxWidth: "100%" }} />
//         <br></br>
//         <br></br>
//         <br></br>
//         <h5 style={{ textAlign: "justify" }}>Below is the backend server of the chatbot through which BERT model is used:</h5>
//         <br></br>
//         <img src={demo2} alt="demo2" className="img-fluid" style={{ maxWidth: "100%" }} />
//         <br></br>
//         <br></br>
//         <h5 style={{ textAlign: 'justify' }}> <a href="https://github.com/Retr0-45809/College-Chatbot">Github Link</a>: https://github.com/Retr0-45809/College-Chatbot </h5>
//         <br></br>
//       </Container>
//     </Container>
//   );
// }

// export default Capstone;
