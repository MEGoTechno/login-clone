function Collage() {
  return (
    <div className="collage">
      {/* Large main card */}
      <div className="card card-main">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
          alt=""
        />
        <div className="time-badge">
          <span>⏱</span> 16:45
        </div>
      </div>

      {/* Plant card */}
      <div className="card card-plant">
        <img
          src="https://images.unsplash.com/photo-1463936575829-25148e1d8d57?w=400&q=80"
          alt=""
        />
        <div className="icon">🌿</div>
      </div>

      {/* Post-style card */}
      <div className="card card-post">
        <div className="post-header">
          <div className="avatar">f</div>
        </div>
        <div className="post-img">
          <img
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&q=80"
            alt=""
          />
        </div>
        <div className="bars">
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Profile circle */}
      <div className="profile-circle">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80"
          alt=""
        />
      </div>

      {/* Floating emoji */}
      <div className="emoji emoji-smile">😊</div>

      {/* Heart */}
      <div className="heart">♥</div>
    </div>
  );
}

export default Collage;
