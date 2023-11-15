
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Pictogramme from './components/Pictogramme';
import Commentaire from './components/Commentaire';

function App() {
  return (
    <div className="col-6 offset-3">
    <div className="card">
      <div className="card-block">
        <div className="row">
          <div className="col-2">
            <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg" alt="facebook" className="rounded float-leftimg-thumbnail" width="80" height="70" />
          </div>
          <div className="col-10 profile-row">
            <div className="row">
              <a href="https"><h1> Débuter avec React </h1></a>
            </div>
          </div>
        </div>
        
    
        <div>
          <Pictogramme />
        </div>
      </div>

      <div className="card-footer text-muted">
       <Commentaire />
      </div>

    </div>
  </div>
  );
}

export default App;
