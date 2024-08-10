import React, { useEffect, useState } from "react";
import { getBooks } from "../utilits";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid, LabelList } from "recharts";

const PageToRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBook = getBooks();
    setBooks(storedBook);
  }, []);

  const colors = [
    "#0085F6",
    "#00C29C",
    "#FBB929",
    "#FC8042",
    "#FB0100",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff6b6b",
    "#00c12f",
  ];

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div>
          <p className="label">{`${label}`}</p>
          <p className="label">{`Total Pages : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }


  return (
    <div className="flex justify-center">
      <div className="my-14">
      <BarChart width={1200} height={500} data={books}>
        <XAxis dataKey={"bookName"}></XAxis>
        <Tooltip content={CustomTooltip}></Tooltip>
        <YAxis className="inter text-[#13131380]" domain={[0, 400]} ticks={[0, 80, 160, 240, 320, 400]}></YAxis>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
        <Bar dataKey="totalPages" shape={<TriangleBar />}>
          {books.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <LabelList className="inter font-semibold" dataKey="totalPages" position="top" />
        </Bar>
      </BarChart>
    </div>
    </div>
  );
};

export default PageToRead;
