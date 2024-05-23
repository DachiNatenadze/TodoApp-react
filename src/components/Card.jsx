import { useState } from "react";

export default function Card() {
  const [todoTitle, setTodoTitle] = useState("");
  const [checked, setChecked] = useState([]);
  const [todos, setTodos] = useState(["we", "are","dolasha", "lashadome",]);
  console.log(todoTitle);

  function deleteTodo(todo) {
    const filtered = [...todos].filter((item) => {
      return todo.toLowerCase() !== item.toLowerCase();
    });
    setTodos(filtered);
  }

  function selectTodo(todo) {
    let checkedCopy = [...checked];
    if (checkedCopy.includes(todo)) {
      checkedCopy = checkedCopy.filter((item) => {
        return todo !== item;
      });
    } else {
      checkedCopy = [...checked, todo];
    }
    setChecked(checkedCopy);
  }

  function isChecked(todo){
    if(checked.includes(todo)){
      return true
    }else{
        return false
    }
  }

  console.log(checked);
  function isValidTodo() {
    if (!todoTitle) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <main className="bg h-screen relative">
      <div className="container flex flex-col">
        <div className="HeaderInput flex flex-row justify-between items-start w-screen  h-[300px]  pt-[60px] px-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="20"
            viewBox="0 0 109 20"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.0266 10.0266C25.0266 8.25354 25.4743 6.59575 26.3697 5.05319C27.2651 3.51063 28.4796 2.28281 30.0133 1.36968C31.547 0.456556 33.2092 0 35 0C36.7908 0 38.453 0.456556 39.9867 1.36968C41.5204 2.28281 42.7438 3.51063 43.6569 5.05319C44.57 6.59575 45.0266 8.25354 45.0266 10.0266C45.0266 11.8351 44.57 13.5018 43.6569 15.0266C42.7438 16.5514 41.5204 17.7615 39.9867 18.6569C38.453 19.5523 36.7908 20 35 20C33.1915 20 31.5248 19.5523 30 18.6569C28.4752 17.7615 27.2651 16.5514 26.3697 15.0266C25.4743 13.5018 25.0266 11.8351 25.0266 10.0266ZM13.1915 0.212766V3.93617H8.43085V19.7872H4.57447V3.93617H0V0.212766H13.1915ZM29.8271 13.1649C29.2863 12.2074 29.016 11.1614 29.016 10.0266C29.016 8.85638 29.2819 7.79256 29.8138 6.83511C30.3457 5.87766 31.0683 5.11968 31.9814 4.56117C32.8945 4.00266 33.9096 3.7234 35.0266 3.7234C36.1436 3.7234 37.1587 4.00266 38.0718 4.56117C38.9849 5.11968 39.7074 5.87766 40.2394 6.83511C40.7713 7.79256 41.0372 8.85638 41.0372 10.0266C41.0372 11.1791 40.7801 12.2296 40.266 13.1782C39.7518 14.1268 39.0426 14.8803 38.1383 15.4388C37.234 15.9973 36.2323 16.2766 35.133 16.2766C33.9982 16.2766 32.9654 15.9973 32.0346 15.4388C31.1037 14.8803 30.3679 14.1223 29.8271 13.1649ZM58.8564 0.212766H64.7075C67.2075 0.212766 69.2642 0.695917 70.8777 1.66223C72.4911 2.62855 73.6658 3.87854 74.4016 5.41223C75.1374 6.94593 75.5053 8.59042 75.5053 10.3457C75.5053 12.2252 75.0621 13.883 74.1755 15.3191C73.289 16.7553 72.0966 17.859 70.5984 18.6303C69.1002 19.4016 67.4557 19.7872 65.6649 19.7872H58.8564V0.212766ZM69.7606 14.5213C68.5904 15.5497 67.0036 16.0638 65 16.0638H62.7128V3.90957H65.8511C66.6135 3.90957 67.4246 4.08688 68.2846 4.44149C69.1445 4.7961 69.898 5.43439 70.5452 6.35638C71.1924 7.27837 71.516 8.5195 71.516 10.0798C71.516 12.0124 70.9309 13.4929 69.7606 14.5213ZM88.1383 10.0266C88.1383 8.25354 88.586 6.59575 89.4814 5.05319C90.3768 3.51063 91.5913 2.28281 93.125 1.36968C94.6587 0.456556 96.3209 0 98.1117 0C99.9025 0 101.565 0.456556 103.098 1.36968C104.632 2.28281 105.855 3.51063 106.769 5.05319C107.682 6.59575 108.138 8.25354 108.138 10.0266C108.138 11.8351 107.682 13.5018 106.769 15.0266C105.855 16.5514 104.632 17.7615 103.098 18.6569C101.565 19.5523 99.9025 20 98.1117 20C96.3032 20 94.6365 19.5523 93.1117 18.6569C91.5869 17.7615 90.3768 16.5514 89.4814 15.0266C88.586 13.5018 88.1383 11.8351 88.1383 10.0266ZM92.9255 6.83511C92.3936 7.79256 92.1277 8.85638 92.1277 10.0266C92.1277 11.1614 92.398 12.2074 92.9388 13.1649C93.4796 14.1223 94.2154 14.8803 95.1463 15.4388C96.0771 15.9973 97.1099 16.2766 98.2447 16.2766C99.344 16.2766 100.346 15.9973 101.25 15.4388C102.154 14.8803 102.863 14.1268 103.378 13.1782C103.892 12.2296 104.149 11.1791 104.149 10.0266C104.149 8.85638 103.883 7.79256 103.351 6.83511C102.819 5.87766 102.097 5.11968 101.184 4.56117C100.27 4.00266 99.2553 3.7234 98.1383 3.7234C97.0213 3.7234 96.0062 4.00266 95.0931 4.56117C94.18 5.11968 93.4575 5.87766 92.9255 6.83511Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8244 0.166024C8.14853 0.922784 5.38462 4.17708 5.38462 8.07692C5.38462 12.5377 9.00078 16.1538 13.4615 16.1538C15.766 16.1538 17.8451 15.1887 19.3166 13.6406C17.8608 17.3633 14.2383 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10.6231 0 11.2328 0.0569837 11.8244 0.166024Z"
              fill="white"
            />
          </svg>
        </div>
        <form className="Input flex bg-white items-center absolute gap-4 py-[14px] px-[20px] rounded-[5px] [box-shadow:0px_35px_50px_-15px_rgba(194,_195,_214,_0.50)] top-[140px] left-1/2 translate-x-[-50%] w-[327px]">
          <div className="w-[20px] h-[20px] rounded-full bg-transparent border ">
            <div
              className={`flex justify-center items-center w-full  h-full bg-gradient-to-tr from-[#55DDFF] to-[#C058F3] rounded-full ${
                isValidTodo()
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } transition-all duration-300 ease-linear`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="h-3 w-3">
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <input
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
            className="bg-transparent outline-none placeholder:text-[#9495A5] placeholder:font-[Josefin_Sans]  placeholder:text-[12px] placeholder:not-italic w-full"
            placeholder="Create a new todo…"
            type="text"
            value={todoTitle}
          />
        </form>
      </div>
      <div className="Todo bg-white rounded-[5px] border w-[327px] absolute left-1/2 translate-x-[-50%] flex flex-col items-center top-[210px]">
        {todos.map((todo, idx) => {
          return (
            <div
              className="w-full flex px-5 items-center justify-between py-2.5 border-b cursor-pointer"
              key={idx}
              onClick={() => selectTodo(todo)}>
              <div className="checkbox flex flex-row gap-3">
                <div className="w-[20px] h-[20px] rounded-full bg-transparent border ">
                  <div
                    className={`flex justify-center items-center w-full  h-full bg-gradient-to-tr from-[#55DDFF] to-[#C058F3] rounded-full   transition-all duration-300 ease-linear ${
                      isChecked(todo) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="h-3 w-3">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span>{todo}</span>
              </div>
              <div className="div" onClick={() => deleteTodo(todo)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z"
                    fill="#494C6B"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
