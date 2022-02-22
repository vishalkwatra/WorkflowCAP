const axios = require('axios');

// const getToken = async () => {
//     try {
//         // return await axios.get('/workflowdemo/bpmworkflowruntime/v1/xsrf-token', {
//         //     headers: {
//         //         "X-CSRF-Token": "Fetch",
//         //         "Content-Type": "application/json"
//         //     }
//         // })

//         // const responseToken = await axios({
//         //     method: "get",
//         //     url: "/workflowdemo/bpmworkflowruntime/v1/xsrf-token",
//         //     headers: {
//         //       "content-type": "application/json",
//         //     },
//         //     xsrfHeaderName: "x-csrf-token"
//         //   })
//         const responseToken = await axios({
//             method: "get",
//             url: "/workflowdemo/bpmworkflowruntime/v1/xsrf-token",
//             headers: {
//               "content-type": "application/json",
//             },
//             xsrfHeaderName: "x-csrf-token"
//           })

//           return responseToken;

//     } catch (error) {
//         console.error(error);
//     }
// }

// module.exports = async srv => {
//     srv.on("triggerWorkflow", async () => {
//         var dataPayLoad =
//         {
//             "definitionId": "onboard",
//             "context": {
//                 "managerId": "john.edrich@sapdemo.com",
//                 "buddyId": "kevin.hart@saptest.com",
//                 "userId": "cgrant1",
//                 "empData": {
//                     "firstName": "Carla",
//                     "lastName": "Grant",
//                     "city": "San Mateo",
//                     "country": "United States",
//                     "hireDate": "2020-07-11",
//                     "jobTitle": "General Manager, Industries"
//                 }
//             }
//         };

//         const wfToken = await getToken();
//         console.log(wfToken);
//         try {
//             const data = await axios.post('/workflowdemo/bpmworkflowruntime/v1/workflow-instances', {
//                 data: JSON.stringify(dataPayLoad),
//                 headers: {
//                     "X-CSRF-Token": wfToken,
//                     "Content-Type": "application/json"
//                 }
//             });
//             if(data) return "Started";
//         } catch (error) {
//             console.log(error);
//             return "Error";
//         }


//         // $.ajax({
//         //     url: "/workflowdemo/bpmworkflowruntime/v1/xsrf-token",
//         //     method: "GET",
//         //     headers: {
//         //         "X-CSRF-Token": "Fetch"
//         //     },
//         //     async: false,
//         //     success: function (result, xhr, data) {
//         //         $.ajax({
//         //             url: "/workflowdemo/bpmworkflowruntime/v1/workflow-instances",
//         //             type: "POST",
//         //             data: JSON.stringify(dataPayLoad),
//         //             headers: {
//         //                 "X-CSRF-Token": token,
//         //                 "Content-Type": "application/json"
//         //             },
//         //             async: false,
//         //             success: function (data) {
//         //                 return "Started";
//         //                 console.log("The workflow is started");
//         //             },
//         //             error: function (data) {
//         //                 return "Error";
//         //                 console.log("Error Starting", data);
//         //             }
//         //         });

//         //     }
//         // });
//     })
// }

module.exports = srv => {
    srv.on("triggerWorkflow", async (req, next) => {
        const workflow = await cds.connect.to('wim_workflow');
        console.log(workflow);

        return await workflow.tx(req).post('/v1/workflow-instances', {
            "definitionId": "onboard",
            "context": {
                "managerId": "john.edrich@sapdemo.com",
                "buddyId": "kevin.hart@saptest.com",
                "userId": "cgrant1",
                "empData": {
                    "firstName": "Carla",
                    "lastName": "Grant",
                    "city": "San Mateo",
                    "country": "United States",
                    "hireDate": "2020-07-11",
                    "jobTitle": "General Manager, Industries"
                }
            }
        })

    }
    )
}