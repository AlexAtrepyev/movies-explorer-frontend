import './Timeline.css';

function Timeline() {
  return (
    <ul className="timeline">
      <li className="timeline__chunk">
        <span className="timeline__element timeline__element_color_black">1 неделя</span>
        <span className="timeline__element timeline__element_color_white">Back-end</span>
      </li>
      <li className="timeline__chunk">
        <span className="timeline__element timeline__element_color_gray">4 недели</span>
        <span className="timeline__element timeline__element_color_white">Front-end</span>
      </li>
    </ul>
  );
}

export default Timeline;
