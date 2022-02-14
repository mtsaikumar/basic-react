import './Container.css';
import Navbar from './Navbar';
function Container() {
  return (
    <div className="container">
        <Navbar/>
          <article>
            <h4>A blog post</h4>
            <p>Here is the content...</p>
          </article>
    </div>
  );
}

export default Container;
