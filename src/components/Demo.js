import React,{useEffect,useState,useContext,useRef} from 'react'
import { useDispatch, useSelector} from "react-redux";
import { getUser} from "../action/Actions";

const detailsContext = React.createContext();

function ContextDemo(){
    const value= useContext(detailsContext)
    return (
        <div>
            <p>{value.employee_name}</p>
            <p>Age:{value.employee_age}</p>
        </div>
    )
}
function Todo(props){
    console.log('hsghs',props.todos)
    return (
        <div>
            {props.todos.map((data,index)=>{
                return(
                    <p>{data.text}</p>
                ) })}
        </div>
    )
}

function Demo(){
    const [todo,setTodo] = useState([
        {
            text:'learn about react',
            isCompleted:false
        },
        {
            text:'learn about react-hook',
            isCompleted:false
        },
        {
            text:'learn about react-hook-demo',
            isCompleted:false
        }
    ])

    const [list, setList] = useState([])

    const url = "https://reqres.in/api/users?page=2";

    useEffect(()=>{
      loadData()
        fetchData()
    },[])

    // useEffect
    const loadData = async () => {
    const responce = await fetch(url)
    const data = await responce.json();
    setList(data.data)
        console.log('gfhjjj',data.data)
    }

    const dispatch = useDispatch();

    const dataFromReducer = useSelector((state)=>state.dataReducer)
    console.log('reducer',dataFromReducer)


    const fetchData = () => {
        dispatch(getUser());
    }

    //useContext
    const value = useContext(detailsContext);
    console.log(value,'context')

    //useRef
    const [count,setCount] = useState(0)
    const counter = useRef(null);

    const incriment = () =>{
        setCount(count + 1)
    }
    const decriment = () =>{
        setCount(count - 1)
    }

    return(
        <>
        <div style={{background:"lightcoral"}}>
        <h2>Demo</h2>
        </div>
          <div style={{backgroundColor:"lightcyan"}}>
              <h2>useState</h2>
              <Todo todos={todo}/>
          </div>
            <div style={{marginRight:"20%", marginLeft:"30%"}}>
                <h2>useEffect</h2>
                {
                    list.map((item,index)=>{
                      return(
                          <div style={{float:"left", width:"40%", padding:"0 10px"}}>
                          <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "30px",textAlign: "center",backgroundColor:"#f1f1f1"}}>
                          <p>{item.first_name + " " + item.last_name}</p>
                              <p>{item.email}</p>
                          </div>
                          </div>
                      )
                    })
                }
            </div>
            <div style={{marginRight:"10%", marginLeft:"20%"}}>

                {
                    dataFromReducer.map((item,index)=>{
                        return(
                            <div style={{float:"left", width:"40%", padding:"10px 10px"}}>

                                <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "30px",textAlign: "center",backgroundColor:"coral"}}>
                                    <p>{item.employee_name}</p>
                                    <p>Salary : {item.employee_salary}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{marginRight:"20%", marginLeft:"30%"}}>
                <h2>useContext</h2>
                {
                    dataFromReducer.map((item,index)=>{
                        return(
                            <div style={{float:"left", width:"40%", padding:"0 10px"}}>
                                <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "30px",textAlign: "center",backgroundColor:"#f1f1f1"}}>
                                    <detailsContext.Provider  value={item}>
                                        <ContextDemo  />
                                    </detailsContext.Provider>
                                </div>
                            </div>
                        )
                    })
                }

            </div >
            <div style={{marginRight:"20%", marginLeft:"43%"}}>

                <div style={{float:"left", width:"40%", padding:"30px 10px"}}>
                    <h2>useRef</h2>
                    <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "30px",textAlign: "center",backgroundColor:"lightcoral"}}>

                <h1>Count : <span ref={counter}>{count}</span></h1>
                <button onClick={incriment} style={{backgroundColor:"blueviolet" ,width:"30px",padding:"5px"}}>+</button>
                <button onClick={decriment} style={{backgroundColor:"blueviolet" ,width:"30px",padding:"5px"}}>-</button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Demo;
