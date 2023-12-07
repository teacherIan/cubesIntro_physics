import Button from '../lobby/Button';
import './lobby.css';
import { animated, useSpring } from '@react-spring/web';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Mov from './Mov';

export default function Floor(props) {
  const textRef = useRef();
  const [width, setWidth] = useState(0);

  const [springs, api] = useSpring(() => ({
    from: { x: width },
    to: { x: -window.innerWidth + width + 10 },
  }));

  // might be better to just use useEffect
  useLayoutEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }

    return () => {
      console.log('Cleanup useLayoutEffect');
    };
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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
    if (textRef.current.offsetWidth) {
      setWidth(textRef.current.offsetWidth);
    }
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
    <>
      <animated.div
        style={{ ...springs }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onResize={handleResize}
        className="floor"
        onResizeCapture={handleResize}
      >
        <div className="buttons">
          <Button setPlayVideo={props.setPlayVideo} text="The Box" />
          <Button setPlayVideo={props.setPlayVideo} text="Upper School Gym" />
          <Button
            setPlayVideo={props.setPlayVideo}
            text="Grade Three Classroom"
          />
          <Button setPlayVideo={props.setPlayVideo} text="Science Labs" />
        </div>

        <div ref={textRef} className="floor-tab">
          {props.text}
        </div>
      </animated.div>
    </>
  );
}
