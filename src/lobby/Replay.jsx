import './lobby.css';
import { FaRotateLeft, FaReply } from 'react-icons/fa6';
import { animated, useSpring } from '@react-spring/web';
export default function Replay(props) {
  function handleReplayClick() {
    props.setShowOptions(false);
    props.replayVideo();
  }

  const [springB, apiB] = useSpring(() => ({
    from: { color: '#ffffff', scale: 1 },
  }));

  function handleEnterB() {
    apiB.start({
      from: {
        color: '#ffffff',
        scale: 1,
      },
      to: {
        color: '#F6BE00',
        scale: 1.05,
      },
    });
  }

  function handleLeaveB() {
    apiB.start({
      from: {
        color: '#F6BE00',
        scale: 1.05,
      },
      to: {
        color: '#ffffff',
        scale: 1.0,
      },
    });
  }

  const [springA, apiA] = useSpring(() => ({
    from: { color: '#ffffff', scale: 1.0 },
  }));

  function handleEnterA() {
    apiA.start({
      from: {
        color: '#ffffff',
        scale: 1.0,
      },
      to: {
        color: '#F6BE00',
        scale: 1.05,
      },
    });
  }

  function handleLeaveA() {
    apiA.start({
      from: {
        color: '#F6BE00',
        scale: 1.05,
      },
      to: {
        color: '#ffffff',
        scale: 1.0,
      },
    });
  }

  return (
    <div className="replay">
      <div className="menu">
        <animated.div
          onPointerEnter={handleEnterA}
          onClick={handleReplayClick}
          className="border"
          style={{ ...springA }}
          onPointerLeave={handleLeaveA}
        >
          <FaRotateLeft className="icon" />
          <div>Replay</div>
        </animated.div>

        <animated.div
          onPointerLeave={handleLeaveB}
          onPointerEnter={handleEnterB}
          style={{ ...springB }}
          onClick={() => props.setPlayVideo(false)}
          className="border"
        >
          <FaReply className="icon" />
          <div>Return</div>
        </animated.div>
      </div>
    </div>
  );
}
