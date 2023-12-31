import classNames from "classnames";

export const Filter = (props) => {
  // propsを定義
  const { value, onChange } = props;
  // フィルターの切り替え
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, "ALL")}
        className={classNames({ "is-active": value === "ALL" })}
      >
        全て表示
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "TODO")}
        className={classNames({ "is-active": value === "TODO" })}
      >
        未達成
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "DONE")}
        className={classNames({ "is-active": value === "DONE" })}
      >
        達成済
      </a>
    </div>
  );
};
export default Filter;
