import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//メモ化による最適化
//memoで囲うことでpropsが変更されない限り再レンダリングしないようにする
//基本的にはコンポーネントはメモ化しておいた方が良い

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
