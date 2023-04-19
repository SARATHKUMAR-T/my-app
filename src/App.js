import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <GetApp />
        <GetApp1 />
        <GetApp2 />
      </div>
    </div>
  );
}

export default App;

// 1st Card:

function GetApp() {
  return (
    <div className="card col-md-3">
      <div className="price-box">
        <p className="tag">Free</p>
        <p>
          <span className="price">$0</span>/month
        </p>
      </div>
      <div className="text-box">
        <ul className="plan-details">
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Single User</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">5GB Storage</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Unlimited Public Projects</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Community Access</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="close-outline" className="list-icon"></ion-icon>
            <span className="list-text">Unlimited Private Projects</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="close-outline" className="list-icon"></ion-icon>
            <span className="list-text">Dedicated Phone Support</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="close-outline" className="list-icon"></ion-icon>
            <span className="list-text">Free Subdomain</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="close-outline" className="list-icon"></ion-icon>
            <span className="list-text">Monthly Status Reports</span>
          </li>
        </ul>
        <button type="button" class="btn btn-primary">
          BUTTON
        </button>
      </div>
    </div>
  );
}

// 2nd card:

function GetApp1() {
  return (
    <div className="card col-md-3">
      <div className="price-box">
        <p className="tag">PLUS</p>
        <p>
          <span className="price">$9</span>/month
        </p>
      </div>
      <div className="text-box">
        <ul className="plan-details">
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">
              <strong>5 Users</strong>
            </span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">50GB Storage</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Unlimited Public Projects</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Community Access</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Unlimited Private Projects</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Dedicated Phone Support</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Free Subdomain</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="close-outline" className="list-icon"></ion-icon>
            <span className="list-text">Monthly Status Reports</span>
          </li>
        </ul>
        <button type="button" class="btn btn-primary">
          BUTTON
        </button>
      </div>
    </div>
  );
}

// 3rd Card

function GetApp2() {
  return (
    <div className="card col-md-3">
      <div className="price-box">
        <p className="tag">PRO</p>
        <p>
          <span className="price">$49</span>/month
        </p>
      </div>
      <div className="text-box">
        <ul className="plan-details">
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">
              <strong>Unlimited Users</strong>
            </span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">150GB Storage</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Unlimited Public Projects</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Community Access</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Unlimited Private Projects</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Dedicated Phone Support</span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">
              <strong>Unlimited</strong> Free Subdomains
            </span>
          </li>
          <li className="list-itmes">
            <ion-icon name="checkmark-outline" className="list-icon"></ion-icon>
            <span className="list-text">Monthly Status Reports</span>
          </li>
        </ul>
        <button type="button" class="btn btn-primary">
          BUTTON
        </button>
      </div>
    </div>
  );
}
