// "use client";

// import React, { useState } from "react";
// import { useFetch } from "@/hooks/useFetch";
// import Link from "next/link";
// import { Card } from "@/components/Card";
// import { motion } from "framer-motion";
// import LoadingPage from "@/components/LoadingPage";
// import { ErrorMessage } from "@/components/ErrorMessage";


// export default function PostsContent() {
//   const [simulateError, setSimulateError] = useState(false);
//   const { data: posts, loading, error } = useFetch<any[]>(
//     simulateError
//       ? "https://jsonplaceholder.typicode.com/invalid-posts"
//       : "https://jsonplaceholder.typicode.com/posts"
//   );

//   return (
//     <div className="p-6 min-h-screen  bg-gray-900 text-yellow-400 w-full  md:w-10/12 mx-auto">
//       <div className="w-full mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold tracking-wide">Posts</h1>
//           <button
//             onClick={() => setSimulateError(!simulateError)}
//             className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
//           >
//             {simulateError ? "Fetch Normal Posts" : "Simulate Error"}
//           </button>
//         </div>

     

//         {loading && <LoadingPage />}
//         {error && (
//           <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <ErrorMessage
//                     message="Failed to load posts. Please check your connection."
//                     onRetry={() => setSimulateError(false)}
//                   />
//                 </motion.div>
//         )}
         


//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  max-h-[calc(100vh-100px)] pr-2">
//           {posts?.map((post) => (
//             <motion.div
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: post.id * 0.05 }}
//             >
//               <Link href={`/posts/${post.id}`}>
//                 <Card
//                     title={post.title}
//                     description={post.body}
//                     className="hover:bg-yellow-400 hover:text-gray-900 transition-colors"
//                 />
//                 </Link>

//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import LoadingPage from "@/components/LoadingPage";
import { ErrorMessage } from "@/components/ErrorMessage";

export default function PostsContent() {
  const [simulateError, setSimulateError] = useState(false);
  const { data: posts, loading, error } = useFetch<any[]>(
    simulateError
      ? "https://jsonplaceholder.typicode.com/invalid-posts"
      : "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-yellow-400">
      <div className="p-6 flex-1 overflow-auto">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold tracking-wide">Posts</h1>
            <button
              onClick={() => setSimulateError(!simulateError)}
              className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
            >
              {simulateError ? "Fetch Normal Posts" : "Simulate Error"}
            </button>
          </div>

          {loading && <LoadingPage />}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ErrorMessage
                message="Failed to load posts. Please check your connection."
                onRetry={() => setSimulateError(false)}
              />
            </motion.div>
          )}

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {posts?.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: post.id * 0.05 }}
              >
                <Link href={`/posts/${post.id}`}>
                  <Card
                    title={post.title}
                    description={post.body}
                    className="hover:bg-yellow-400 hover:text-gray-900 transition-colors w-full h-full"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}
