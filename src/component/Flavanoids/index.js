import React from "react";

function Flavanoids({ WineData }) {
  const classWiseData = (WineData, alcohal) => {
    const data = WineData.filter((item) => item.Alcohol === alcohal);
    return data;
  };

  const mean = (WineData, alcohal) => {
    const classWise = classWiseData(WineData, alcohal);
    const flavanoidList = classWise.map((item) => item.Flavanoids);
    const total = flavanoidList.reduce((accu, elem) => accu + parseFloat(elem));
    return total / flavanoidList.length;
  };

  const median = (WineData, alcohal) => {
    const classWise = classWiseData(WineData, alcohal);
    const flavanoidList = classWise.map((item) => item.Flavanoids);
    let sortedList = flavanoidList.sort();

    if (sortedList.length % 2 === 0) {
      return (
        (sortedList[sortedList.length / 2 - 1] +
          sortedList[sortedList.length / 2]) /
        2
      );
    } else {
      return sortedList[(sortedList.length - 1) / 2];
    }
  };

  const mode = (WineData, alcohal) => {
    const classWise = classWiseData(WineData, alcohal);
    const flavanoidList = classWise.map((item) => item.Flavanoids);
    const sorteData = flavanoidList.sort();
    let maxCount = 0;
    let maxValue = [];
    for (let i = 0; i < sorteData.length; i++) {
      let count = 0;
      for (let j = i; j < sorteData.length; j++) {
        if (sorteData[i] === sorteData[j]) {
          count++;
        }
      }
      if (count >= maxCount) {
        maxCount = count;
        maxValue.push({ count: maxCount, value: sorteData[i] });
      }
    }
    const frequency = maxValue[maxValue.length - 1].count;
    const filterArr = maxValue.filter((item) => item.count === frequency);
    const result = filterArr.map((item) => item.value).join(", ");

    return result;
  };

  return (
    <div>
      <table className="table-border">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td>{mean(WineData, 1)}</td>
            <td>{mean(WineData, 2)}</td>
            <td>{mean(WineData, 3)}</td>
          </tr>
          <tr>
            <td>Flavanoidsia Median</td>
            <td>{median(WineData, 1)}</td>
            <td>{median(WineData, 2)}</td>
            <td>{median(WineData, 3)}</td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{mode(WineData, 1)}</td>
            <td>{mode(WineData, 2)}</td>
            <td>{mode(WineData, 3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Flavanoids;
