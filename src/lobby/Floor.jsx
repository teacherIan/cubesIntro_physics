import Button from '../lobby/Button';
import './lobby.css';
import { animated, useSpring } from '@react-spring/web';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';

export default function Floor(props) {
  const textRef = useRef();
  const [width, setWidth] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: { x: width },
    to: { x: -window.innerWidth + width + 10 },
  }));

  useLayoutEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      api.start({
        from: {
          x: -window.innerWidth + width + 10,
        },
        to: {
          x: -window.innerWidth + width + 10,
        },
      });
    }
  }, [springs]);

  const handleMouseEnter = () => {
    api.start({
      from: {
        x: -window.innerWidth + width + 10,
      },
      to: {
        x: 0,
      },
    });
  };

  const handleMouseLeave = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: -window.innerWidth + width + 10,
      },
    });
  };

  function handleResize() {
    console.log('Resize');
    setWidth(textRef.current.offsetWidth);

    api.start({
      from: {
        x: -window.innerWidth,
      },
      to: {
        x: -window.innerWidth + width + 10,
      },
    });
  }

  return (
    <animated.div
      style={{ ...springs }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onResize={handleResize}
      className="floor"
      onResizeCapture={handleResize}
    >
      <div className="buttons">
        <Button text="The Box" />
        <Button text="Upper School Gym" />
        <Button text="Grade Three Classroom" />
        <Button text="Science Labs" />
      </div>

      <div ref={textRef} className="floor-tab">
        {props.text}
      </div>
    </animated.div>
  );
}
