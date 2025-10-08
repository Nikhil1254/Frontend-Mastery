import { useState } from "react";
import Accordion from "../accordion/Accordion";
import "./style.css";

const data = [
  {
    title: "Item 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquet enim, non scelerisque dui risus sed nisl. Pellentesque eu urna euismod, blandit augue vitae, facilisis libero. Morbi euismod eu ipsum in dictum. Mauris condimentum pretium nisi, id egestas ex molestie in. Etiam facilisis magna eu ex rhoncus, et efficitur erat dictum. Nullam et nibh quis urna varius venenatis ut ac dui. Aenean ut enim ac justo pulvinar posuere. Aliquam erat volutpat. Proin porttitor, risus eu finibus tristique, magna elit sagittis ex, a egestas tellus nunc id mi. Duis commodo erat eu velit scelerisque consectetur. Fusce ac neque vitae mauris euismod gravida. Vestibulum feugiat imperdiet augue, et tristique mauris dictum et. Curabitur bibendum ex quis dui dictum, a tempor velit cursus. Vestibulum ac felis at quam pharetra pretium.",
  },
  {
    title: "Item 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquet enim, non scelerisque dui risus sed nisl. Pellentesque eu urna euismod, blandit augue vitae, facilisis libero. Morbi euismod eu ipsum in dictum. Mauris condimentum pretium nisi, id egestas ex molestie in. Etiam facilisis magna eu ex rhoncus, et efficitur erat dictum. Nullam et nibh quis urna varius venenatis ut ac dui. Aenean ut enim ac justo pulvinar posuere. Aliquam erat volutpat. Proin porttitor, risus eu finibus tristique, magna elit sagittis ex, a egestas tellus nunc id mi. Duis commodo erat eu velit scelerisque consectetur. Fusce ac neque vitae mauris euismod gravida. Vestibulum feugiat imperdiet augue, et tristique mauris dictum et. Curabitur bibendum ex quis dui dictum, a tempor velit cursus. Vestibulum ac felis at quam pharetra pretium.",
  },
  {
    title: "Item 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquet enim, non scelerisque dui risus sed nisl. Pellentesque eu urna euismod, blandit augue vitae, facilisis libero. Morbi euismod eu ipsum in dictum. Mauris condimentum pretium nisi, id egestas ex molestie in. Etiam facilisis magna eu ex rhoncus, et efficitur erat dictum. Nullam et nibh quis urna varius venenatis ut ac dui. Aenean ut enim ac justo pulvinar posuere. Aliquam erat volutpat. Proin porttitor, risus eu finibus tristique, magna elit sagittis ex, a egestas tellus nunc id mi. Duis commodo erat eu velit scelerisque consectetur. Fusce ac neque vitae mauris euismod gravida. Vestibulum feugiat imperdiet augue, et tristique mauris dictum et. Curabitur bibendum ex quis dui dictum, a tempor velit cursus. Vestibulum ac felis at quam pharetra pretium.",
  },
];

const AccordionList = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <div className="list-container">
      {data.map((data, index) => (
        <Accordion
          title={data.title}
          body={data.body}
          isOpen={index === openIndex}
          setIsOpen={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default AccordionList;
