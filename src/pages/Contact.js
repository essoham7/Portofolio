import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Contact = () => {
    return (
      <main>
         <div className="contact">
         <Mouse />
         <Navigation />
          <Logo />

          <div className="contact-infos">
            <div className="address">
              <h4>adresse</h4>
              <p> 12 rue du code</p>
              <p>33000 Bordeaux</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4> téléphone</h4>
            </div>
          </div>
         </div>
      </main>
      
    );
  }
  
  export default Contact;
  