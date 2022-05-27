import React from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";

const User = () => {
  //    const param=useParams()
  //    const userid=param.userid;
  const [search, setSearch] = useSearchParams();
  const show=search.get('filter')==='active'//can be true or false,filter=active true


  return (
    <>
      <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
      </div>
      <div>
        <button onClick={()=>setSearch({filter:'active'})}>Active User</button>
        <button onClick={()=>setSearch({})}>Reset Filter</button>
      </div>
      <div>
          {show?(<h2>Show Active Users</h2>):(<h2>Show All users</h2>)}
      </div>
      <Outlet />
    </>
  );
};
export default User;
