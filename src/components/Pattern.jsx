const bars = [
  false, true, false, false, true, false, false, true,
  false, false, true, false, false, true, false, false,
  true, false, false, true, false, false, true, false
];

const Pattern = () => (
  <div className="site-pattern" aria-hidden="true">
    <div className="site-pattern__orb site-pattern__orb--1" />
    <div className="site-pattern__orb site-pattern__orb--2" />
    <div className="site-pattern__orb site-pattern__orb--3" />
    <div className="site-pattern__orb site-pattern__orb--4" />
    <div className="site-pattern__glass" />
    <div className="site-pattern__track">
      {[0, 1].map((group) => (
        <div className="site-pattern__track-group" key={group}>
          {bars.map((isDark, index) => (
            <div
              className={`site-pattern__bar${isDark ? ' site-pattern__bar--dark' : ''}`}
              key={index}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Pattern;
