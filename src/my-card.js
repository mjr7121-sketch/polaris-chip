import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.imgsrc = "https://www.scottsmorraphotography.com/images/640/Lanikai-Beach-Sunrise-Palm-Trees-Oahu-Hawaii.jpg";
  }

  static get styles() {
    return css`

    a {
  text-decoration: none;
}

.btn-wrapper {
  background-color: #ff00a3;
  padding: 10px 10px;
  margin: 10px 30px;
  width: 295px;
  height: 370px;
  position: relative;
}

.btn{
  background-color: #94f2fc;
  color: #3477ff;
  border-radius: 5%;
  width: 80px;
  margin-top: -10px;
  margin-left: 85px;
  width: 125px;
  border: solid #80aaff;
}

h1{
  color: white;
  border-width: 10px;
  margin-top: 10px;
  margin-left: 30px;
  border: black;
  
}

img{
  height: 140px;
  width: 250px;
  position: absolute;
  margin: 100;
  left: 32px;
 
}

p {
  color: white;
  margin-top: 170px;
  width: 250px;
  margin-left: 20px;

}

h2{
  color: white;
  background-color: #80aaff;
  margin-top: -57px;
  margin-left: 18px;
  height: 35px;
  width: 260px;
}

p2{
  color: white;
  width: 250px;
  margin-left: 20px;
  margin-bottom: 18px;
  
}
h3{
  color: white;
  width: 250px;
  margin-left: 20px;
  margin-top: -5px;
  background-color: #80aaff;
  border: black;
  
}

.btn-wrapper.fancy{
  background-color: #f55beb;
}

.duplicate{
  background-color: #94f2fc;
  color: #3477ff;
  border-radius: 5%;
  height: 30px;
  width: 100px;
  border: solid #80aaff;
  margin: 70px 2pc;
}

.title{
  background-color: #94f2fc;
  color: #3477ff;
  border-radius: 5%;
  height: 30px;
  width: 100px;
  border: solid #80aaff;
  margin: 70px -30px;
}

.img-change{
  background-color: #94f2fc;
  color: #3477ff;
  border-radius: 5%;
  height: 30px;
  width: 125px;
  border: solid #80aaff;
  margin: 70px 30px;
}

#bg-change{
  background-color: #94f2fc;
  color: #3477ff;
  border-radius: 5%;
  height: 30px;
  width: 150px;
  border: solid #80aaff;
  margin: 70px -30px;
}

#delete {
  background-color: #94f2fc;
  color: #3477ff;
  border-radius: 5%;
  height: 30px;
  width: 115px;
  border: solid #80aaff;
  margin: 10px 30px;
}

.pagetitle{
  color: blue;
  margin: 10px 40px;
  position: absolute;
}
      :host {
        display: block;
      }
    `;
    

  }

  render() {
    return html`
  
  <div class="btn-wrapper">
    <h1>${this.title}</h1> 
    <h2></h2> 
    
    <img src="${this.imgsrc}" alt="">
    
    <p> Travel to the most amazing place on earth. It has everything from beautiful beaches to volcanos. Book your vacation today! </p>
  
    <h3>Click for more details:</h3>
    
    <a 
      href="https://hax.psu.edu">
      
      <button     
    class="btn">DETAILS
        
      </button>
      </a>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imgsrc: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
