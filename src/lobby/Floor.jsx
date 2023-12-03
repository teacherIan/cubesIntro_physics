import Button from './Button';
import './lobby.css';

export default function Floor() {
  return (
    <div className="floor">
      <div className="buttons">
        <Button text="Button One" />
        <Button text="Button Two" />
      </div>

      <div className="floor-tab">F1</div>
    </div>
  );
}
