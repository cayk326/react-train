import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  //setOpen関数が変わったときにsetOpen関数を再生成するようにすることで
  //意図しない関数の再生成による再レンダリングをさける
  //第二引数の配列を空にすると最初に作った関数をずっと使い続けるという指示になる
  /**コンポーネント関数をメモ化
   * コンポーネント関数に関数を渡す場合、その関数をuseCallbackでメモ化してあげることで
   * レンダリングの最適化ができる
   *
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  /**
   * 変数のメモ化もある
   * 下記の場合、最初のレンダリングでtempは1+3という計算がされる
   * 第二引数が[]なのでこの値=4がずっと使いまわされる
   * そこまで使うことはない
   * レンダリングのたびに行う計算が複雑で負荷が高いが毎回同じ計算の場合
   * 変数のメモ化を使うと良い
   */
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
    </div>
  );
}
