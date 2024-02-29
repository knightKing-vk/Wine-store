import React from "react";

const Gama = ({ WineData }) => {
  const classWiseData = (WineData, alcohal) => {
    const data = WineData.filter((item) => item.Alcohol === alcohal);
    return data;
  };

  const mean = (WineData, Alcohol) => {
    const classWise = classWiseData(WineData, Alcohol);
    const meanGamaList = classWise.map(
      (item) => (item.Ash * item.Hue) / item.Magnesium
    );
    const sortedGamaList = meanGamaList.sort();
    const total = sortedGamaList.reduce(
      (accu, elem) => accu + parseFloat(elem)
    );
    return total / sortedGamaList.length;
  };

  const median = (WineData, Alcohol) => {
    const classWise = classWiseData(WineData, Alcohol);
    const medianGamaList = classWise.map(
      (item) => (item.Ash * item.Hue) / item.Magnesium
    );
    const sortedMedianGamaList = medianGamaList.sort();

    if (sortedMedianGamaList.length % 2 === 0) {
      return (
        (sortedMedianGamaList[sortedMedianGamaList.length / 2 - 1] +
          sortedMedianGamaList[sortedMedianGamaList.length / 2]) /
        2
      );
    } else {
      return sortedMedianGamaList[(sortedMedianGamaList.length - 1) / 2];
    }
  };

  const mode = (WineData, Alcohol) => {
    const classWise = classWiseData(WineData, Alcohol);
    const modeGamaList = classWise.map(
      (item) => (item.Ash * item.Hue) / item.Magnesium
    );
    const sortedModeGamaData = modeGamaList.sort();

    let maxCount = 0;
    let maxVal = [];
    for (let i = 0; i < sortedModeGamaData.length; i++) {
      let count = 0;
      for (let j = i; j < sortedModeGamaData.length; j++) {
        if (sortedModeGamaData[i] === sortedModeGamaData[j]) {
          count++;
        }
      }
      if (count >= maxCount) {
        maxCount = count;
        maxVal.push({ count: maxCount, value: sortedModeGamaData[i] });
      }
    }

    const frequency = maxVal[maxVal.length - 1].count;
    const frequencyCheck = maxVal.filter((item) => item.count === frequency);
    const result =
      frequency === 1
        ? "There is no mode"
        : frequencyCheck.map((item) => item.value).join(", ");
    return result;
  };

  return (
    <div>
      <table className="table-border">
        <thead>
          <tr>
            <td>Measure</td>
            <td>Class 1</td>
            <td>Class 2</td>
            <td>Class 3</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gama Mean</td>
            <td>{mean(WineData, 1)}</td>
            <td>{mean(WineData, 2)}</td>
            <td>{mean(WineData, 3)}</td>
          </tr>
          <tr>
            <td>Gama Median</td>
            <td>{median(WineData, 1)}</td>
            <td>{median(WineData, 2)}</td>
            <td>{median(WineData, 3)}</td>
          </tr>
          <tr>
            <td>Gama Mode</td>
            <td>{mode(WineData, 1)}</td>
            <td>{mode(WineData, 2)}</td>
            <td>{mode(WineData, 3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gama;
