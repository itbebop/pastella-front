// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import AdminHeader from '../components/AdminHeader';
// import ReactPaginate from 'react-paginate';
// import '../components/CustomizeList.css';
// import {
//   getCustomizedScripts
// } from '../components/ScriptHandlers';

// function CustomizeList() {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const postsPerPage = 10;
//   const navigate = useNavigate();
//   const [postsLength, setPostsLength] = useState(0);
  
//   const fetchPosts = async (pageNumber) => {
//     try {
//       const firstPost = (pageNumber * postsPerPage) + 1;
//       const lastPost = (pageNumber + 1) * postsPerPage;
//       // const response = await getCustomizedScripts(1, 10); // API 호출
//       const response = await getCustomizedScripts(firstPost, lastPost); // API 호출
//       const data = response.data;
//       const length = response.total;
      
//       const formattedPosts = data.map((item) => ({
//         id: item.id,
//         title: item.title,
//         createdAt: new Date(item.createdAt).toISOString().split('T')[0],
//         lastModified: new Date(item.lastmodified).toISOString().split('T')[0],
//         used: item.used ? 'Yes' : 'No',
//         sex: item.sex.charAt(0).toUpperCase() + item.sex.slice(1),
//         age: `${item.age}s`,
//         job: item.job,
//         love: item.love,
//         mbti: item.mbti,
//       }));
      
//       setPosts(formattedPosts); // 상태 업데이트
//       setPostsLength(length);
//       offset = currentPage * postsPerPage;
//       currentPosts = posts.slice(offset, offset + postsPerPage);
//     } catch (error) {
//       console.error('Failed to fetch posts:', error);
//     }
//   };

//   useEffect(() => {
//     // 초기 렌더링 시 API 호출을 통해 데이터를 받아와 posts 상태 업데이트
//     console.log('currentPage', currentPage)
//     // fetchPosts();
//     fetchPosts(currentPage);
//   }, []); // 빈 배열을 두 번째 인자로 전달하여 컴포넌트가 처음 렌더링될 때만 useEffect 실행

//   let offset = currentPage * postsPerPage;
//   let currentPosts = posts.slice(offset, offset + postsPerPage);

//   const handlePageClick = (event) => {
//     const selectedPage = event.selected;
//     setCurrentPage(selectedPage);

//     // console.log('selectedPage', selectedPage);

//     // const fetchPosts = async () => {
//     //   try {
//     //     const firstPost = (selectedPage*10)+1;
//     //     const lastPost = (selectedPage+1)*10;
//     //     const response = await getCustomizedScripts(firstPost, lastPost); // API 호출
//     //     const data = response.data;
//     //     const length = response.total;
        
//     //     const formattedPosts = data.map((item) => ({
//     //       id: item.id,
//     //       title: item.title,
//     //       createdAt: new Date(item.createdAt).toISOString().split('T')[0],
//     //       lastModified: new Date(item.lastmodified).toISOString().split('T')[0],
//     //       used: item.used ? 'Yes' : 'No',
//     //       sex: item.sex.charAt(0).toUpperCase() + item.sex.slice(1),
//     //       age: `${item.age}s`,
//     //       job: item.job,
//     //       love: item.love,
//     //       mbti: item.mbti,
//     //     }));
        
//     //     setPosts(formattedPosts); // 상태 업데이트
//     //     setPostsLength(length);
//     //   } catch (error) {
//     //     console.error('Failed to fetch posts:', error);
//     //   }
//     // };

//     // fetchPosts();
//     fetchPosts(currentPage);
//   };

//   const handleSelectPost = (postId) => {
//     setSelectedPost(postId);
//   };

//   const handleDelete = () => {
//     if (selectedPost !== null && window.confirm('정말 삭제하시겠습니까?')) {
//       setPosts(posts.filter(post => post.id !== selectedPost));
//       setSelectedPost(null);
//     }
//   };

//   const handleAdd = () => {
//     navigate('/customize_detail', { state: { mode: 'create' } });
//   };

//   const handleEdit = () => {
//     if (selectedPost !== null) {
//       navigate('/customize_detail', { state: { mode: 'edit', id: selectedPost } });
//     } else {
//       alert('수정할 항목을 선택하세요.');
//     }
//   };

//   return (
//     <div className="CustomizeList">
//       <AdminHeader title="Customize Page" description="나의 개성을 살리는 Personalized 영어학습" />
//       <div>
//         <h1>게시판 목록</h1>
//         <table>
//           <thead>
//             <tr>
//               <th></th>
//               <th>#</th>
//               <th>Title</th>
//               <th>Created At</th>
//               <th>Last Modified</th>
//               <th>Used</th>
//               <th>Sex</th>
//               <th>Age</th>
//               <th>Job</th>
//               <th>Love</th>
//               <th>MBTI</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentPosts.map(post => (
//               <tr key={post.id}>
//                 <td>
//                   <input
//                     type="radio"
//                     checked={selectedPost === post.id}
//                     onChange={() => handleSelectPost(post.id)}
//                   />
//                 </td>
//                 <td>{post.id}</td>
//                 <td>{post.title}</td>
//                 <td>{post.createdAt}</td>
//                 <td>{post.lastModified}</td>
//                 <td>{post.used}</td>
//                 <td>{post.sex}</td>
//                 <td>{post.age}</td>
//                 <td>{post.job}</td>
//                 <td>{post.love}</td>
//                 <td>{post.mbti}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         <ReactPaginate
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           breakLabel={'...'}
//           // pageCount={Math.ceil(posts.length / postsPerPage)}
//           pageCount={Math.ceil(postsLength / postsPerPage)}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={3}
//           onPageChange={handlePageClick}
//           containerClassName={'pagination'}
//           activeClassName={'active'}
//         />
//       </div>
//       <nav>
//         <Link to="/">Home</Link>
//         <button onClick={handleEdit} disabled={selectedPost === null}>스크립트 수정</button>
//         <button onClick={handleDelete} disabled={selectedPost === null}>스크립트 삭제</button>
//         <button onClick={handleAdd}>스크립트 생성</button>
//       </nav>
//     </div>
//   );
// }

// export default CustomizeList;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import ReactPaginate from 'react-paginate';
import '../components/CustomizeList.css';
import {
  getCustomizedScripts
} from '../components/ScriptHandlers';

function CustomizeList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 10;
  const navigate = useNavigate();
  const [postsLength, setPostsLength] = useState(0);
  
  const fetchPosts = async (pageNumber) => {
    try {
      const startPost = (pageNumber * postsPerPage) + 1;
      console.log(`Fetching posts from ${startPost} to ${postsPerPage}`); // 확인을 위해 로그 추가
      const response = await getCustomizedScripts(startPost, postsPerPage); // API 호출
      const data = response.data;
      const length = response.total;
      
      console.log('Fetched data:', data); // 데이터 확인을 위한 로그 추가
      
      const formattedPosts = data.map((item) => ({
        id: item.id,
        title: item.title,
        createdAt: new Date(item.createdAt).toISOString().split('T')[0],
        lastModified: new Date(item.lastmodified).toISOString().split('T')[0],
        used: item.used ? 'Yes' : 'No',
        sex: item.sex.charAt(0).toUpperCase() + item.sex.slice(1),
        age: `${item.age}s`,
        job: item.job,
        love: item.love,
        mbti: item.mbti,
      }));
      
      setPosts(formattedPosts); // 상태 업데이트
      setPostsLength(length);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]); // currentPage가 변경될 때마다 fetchPosts 호출

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };

  const handleSelectPost = (postId) => {
    setSelectedPost(postId);
  };

  const handleDelete = () => {
    if (selectedPost !== null && window.confirm('정말 삭제하시겠습니까?')) {
      setPosts(posts.filter(post => post.id !== selectedPost));
      setSelectedPost(null);
      // connect id에 해당하는 script들도 다 먼저 가져와야 함
      // DELETE /kor-script/connect/{connect_id}
      // DELETE /kor-script/{script_id}
    }
  };

  const handleAdd = () => {
    navigate('/customize_detail', { state: { mode: 'create' } });
  };

  const handleEdit = () => {
    if (selectedPost !== null) {
      navigate('/customize_detail', { state: { mode: 'edit', id: selectedPost } });
    } else {
      alert('수정할 항목을 선택하세요.');
    }
  };

  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);

  return (
    <div className="CustomizeList">
      <AdminHeader title="Customize Page" description="나의 개성을 살리는 Personalized 영어학습" />
      <div>
        <h1>게시판 목록</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Title</th>
              <th>Created At</th>
              <th>Last Modified</th>
              <th>Used</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Job</th>
              <th>Love</th>
              <th>MBTI</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(post => (
              <tr key={post.id}>
                <td>
                  <input
                    type="radio"
                    checked={selectedPost === post.id}
                    onChange={() => handleSelectPost(post.id)}
                  />
                </td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.createdAt}</td>
                <td>{post.lastModified}</td>
                <td>{post.used}</td>
                <td>{post.sex}</td>
                <td>{post.age}</td>
                <td>{post.job}</td>
                <td>{post.love}</td>
                <td>{post.mbti}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(postsLength / postsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <button onClick={handleEdit} disabled={selectedPost === null}>스크립트 수정</button>
        <button onClick={handleDelete} disabled={selectedPost === null}>스크립트 삭제</button>
        <button onClick={handleAdd}>스크립트 생성</button>
      </nav>
    </div>
  );
}

export default CustomizeList;
